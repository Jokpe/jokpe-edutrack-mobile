import React, { createContext, useContext, useMemo, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { mockData } from '../services/mockData';

export interface StudentItem {
  id: string;
  fullName: string;
  gender: 'Male' | 'Female';
  className: string;
  admissionNumber?: string;
  guardianName?: string;
  phone?: string;
}

export interface StaffItem {
  id: string;
  fullName: string;
  role: string;
  phone: string;
  hasLoginAccess: boolean;
}

export interface AttendanceItem {
  date: string;
  present: number;
  total: number;
}

export interface SBAItem {
  subject: string;
  scores: {
    test1: number;
    test2: number;
    test3: number;
    test4: number;
    exam: number;
  };
}

interface AppDataContextType {
  students: StudentItem[];
  staff: StaffItem[];
  attendance: AttendanceItem[];
  sba: SBAItem[];
  isReady: boolean;
  addStudent: (student: StudentItem) => void;
  addStaff: (staff: StaffItem) => void;
  updateAttendance: (value: AttendanceItem[]) => void;
  updateSBA: (value: SBAItem[]) => void;
}

const AppDataContext = createContext<AppDataContextType | undefined>(undefined);
const STORAGE_KEY = 'jokpe_app_data';

export const AppDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [students, setStudents] = useState<StudentItem[]>([]);
  const [staff, setStaff] = useState<StaffItem[]>([]);
  const [attendance, setAttendance] = useState<AttendanceItem[]>([]);
  const [sba, setSba] = useState<SBAItem[]>([]);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const hydrate = async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          setStudents(parsed.students || mockData.students);
          setStaff(parsed.staff || mockData.staff);
          setAttendance(parsed.attendance || mockData.attendance);
          setSba(parsed.sba || mockData.sba);
        } else {
          setStudents(mockData.students);
          setStaff(mockData.staff);
          setAttendance(mockData.attendance);
          setSba(mockData.sba);
        }
      } catch (error) {
        setStudents(mockData.students);
        setStaff(mockData.staff);
        setAttendance(mockData.attendance);
        setSba(mockData.sba);
      } finally {
        setIsReady(true);
      }
    };

    hydrate();
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const payload = JSON.stringify({ students, staff, attendance, sba });
    AsyncStorage.setItem(STORAGE_KEY, payload).catch(() => undefined);
  }, [students, staff, attendance, sba, isReady]);

  const addStudent = (student: StudentItem) => {
    setStudents((prev) => [student, ...prev]);
  };

  const addStaff = (member: StaffItem) => {
    setStaff((prev) => [member, ...prev]);
  };

  const updateAttendance = (next: AttendanceItem[]) => setAttendance(next);

  const updateSBA = (next: SBAItem[]) => setSba(next);

  const value = useMemo<AppDataContextType>(
    () => ({ students, staff, attendance, sba, isReady, addStudent, addStaff, updateAttendance, updateSBA }),
    [students, staff, attendance, sba, isReady],
  );

  return <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>;
};

export const useAppData = () => {
  const context = useContext(AppDataContext);
  if (!context) {
    throw new Error('useAppData must be used inside AppDataProvider');
  }
  return context;
};
