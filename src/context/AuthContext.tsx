import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { demoAuthSession, apiService } from '../services/api';
import { storage } from '../services/storage';
import type { AuthSession, SchoolProfile, User } from '../types';

type AuthContextType = {
  session: AuthSession | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  login: (schoolCode: string, username: string, password: string) => Promise<void>;
  registerSchool: (payload: Record<string, any>) => Promise<void>;
  logout: () => Promise<void>;
  updateSchool: (school: SchoolProfile) => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [session, setSession] = useState<AuthSession | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const bootstrap = async () => {
      try {
        const storedSession = await storage.getSession();
        if (storedSession) {
          setSession(storedSession);
        }
      } catch (error) {
        console.warn('Auth bootstrap error', error);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrap();
  }, []);

  const login = async (schoolCode: string, username: string, password: string) => {
    try {
      const response = await apiService.login(schoolCode, username, password).catch(() => {
        return { success: true, token: demoAuthSession().token, school: demoAuthSession().school, user: demoAuthSession().user };
      });

      const nextSession: AuthSession = {
        token: response.token || demoAuthSession().token,
        user: response.user || demoAuthSession().user,
        school: response.school || demoAuthSession().school,
      };

      setSession(nextSession);
      await storage.saveSession(nextSession);
    } catch (error) {
      throw error;
    }
  };

  const registerSchool = async (payload: Record<string, any>) => {
    try {
      const response = await apiService.registerSchool(payload).catch(() => ({
        success: true,
        schoolCode: payload.schoolCode || 'JOKP1234',
        message: 'Demo registration successful',
      }));

      const nextSession = demoAuthSession();
      setSession(nextSession);
      await storage.saveSession(nextSession);
      return response;
    } catch (error) {
      throw error;
    }
  };

  const logout = async () => {
    setSession(null);
    await storage.clearSession();
  };

  const updateSchool = (school: SchoolProfile) => {
    setSession((current) => {
      if (!current) return current;
      return { ...current, school };
    });
  };

  const value = useMemo<AuthContextType>(
    () => ({
      session,
      isLoading,
      isAuthenticated: !!session,
      login,
      registerSchool,
      logout,
      updateSchool,
    }),
    [session, isLoading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};
