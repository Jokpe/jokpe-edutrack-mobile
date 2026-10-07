export type UserRole = 'admin' | 'teacher' | 'manager' | 'principal';

export interface User {
  id: string;
  username: string;
  role: UserRole;
  email?: string;
}

export interface SchoolProfile {
  schoolName: string;
  schoolCode: string;
  address?: string;
  region?: string;
  district?: string;
  circuit?: string;
  community?: string;
  digitalAddress?: string;
  phone?: string;
  email?: string;
  headmaster?: string;
}

export interface AuthSession {
  token: string;
  user: User;
  school: SchoolProfile;
}

export interface StudentRecord {
  id: string;
  fullName: string;
  gender: 'Male' | 'Female';
  className: string;
  admissionNumber?: string;
  guardianName?: string;
  phone?: string;
}

export interface StaffRecord {
  id: string;
  fullName: string;
  role: string;
  phone: string;
  hasLoginAccess: boolean;
}

export interface SBATopic {
  id: string;
  subject: string;
  test1: number;
  test2: number;
  test3: number;
  test4: number;
  exam: number;
}
