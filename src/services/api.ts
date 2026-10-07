import axios from 'axios';
import type { AuthSession, SchoolProfile } from '../types';

export const API_BASE_URL = 'http://localhost:3000';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const apiService = {
  async login(schoolCode: string, username: string, password: string) {
    try {
      const response = await api.post('/api/login', {
        schoolCode,
        username,
        password,
      });

      return response.data;
    } catch (error: any) {
      const message = error?.response?.data?.error || 'Unable to login right now.';
      throw new Error(message);
    }
  },

  async registerSchool(payload: any) {
    try {
      const response = await api.post('/api/register', payload);
      return response.data;
    } catch (error: any) {
      const message = error?.response?.data?.error || 'Unable to register school right now.';
      throw new Error(message);
    }
  },

  async getSchoolData(schoolCode: string, token?: string) {
    const response = await api.get(`/api/school/${schoolCode}`, {
      headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    });
    return response.data;
  },

  async syncData(schoolCode: string, payload: Record<string, any>, token: string) {
    const response = await api.post('/api/sync', {
      schoolCode,
      data: payload,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  },
};

export const demoAuthSession = (): AuthSession => ({
  token: 'demo-token',
  user: {
    id: 'demo-user',
    username: 'admin',
    role: 'admin',
    email: 'admin@jokpe.edu',
  },
  school: {
    schoolName: 'Jokpe Academy',
    schoolCode: 'JOKP1234',
    region: 'Greater Accra',
    district: 'Madina',
    circuit: 'North Circuit',
    community: 'Ashaley Botwe',
    phone: '+233 500 000 000',
    email: 'info@jokpe.edu',
    headmaster: 'Mr. Owusu',
  } satisfies SchoolProfile,
});
