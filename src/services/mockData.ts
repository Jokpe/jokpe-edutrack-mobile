export const mockData = {
  students: [
    { id: '1', fullName: 'Ama Mensah', gender: 'Female', className: 'KG1', admissionNumber: 'ADM-001', guardianName: 'Mrs. Mensah', phone: '+233 24 111 2222' },
    { id: '2', fullName: 'Kojo Boateng', gender: 'Male', className: 'Basic 3', admissionNumber: 'ADM-002', guardianName: 'Mr. Boateng', phone: '+233 20 333 4444' },
    { id: '3', fullName: 'Efua Tetteh', gender: 'Female', className: 'JHS 1', admissionNumber: 'ADM-003', guardianName: 'Mr. Tetteh', phone: '+233 50 555 6666' },
    { id: '4', fullName: 'Nana Osei', gender: 'Male', className: 'SHS 2', admissionNumber: 'ADM-004', guardianName: 'Mrs. Osei', phone: '+233 27 777 8888' },
    { id: '5', fullName: 'Yaw Adu', gender: 'Male', className: 'Basic 5', admissionNumber: 'ADM-005', guardianName: 'Mr. Adu', phone: '+233 24 987 6543' },
  ],
  staff: [
    { id: '1', fullName: 'Mr. Adjei', role: 'Class Teacher', phone: '+233 20 111 3333', hasLoginAccess: true },
    { id: '2', fullName: 'Mrs. Owusu', role: 'Mathematics Teacher', phone: '+233 24 222 4444', hasLoginAccess: true },
    { id: '3', fullName: 'Mr. Danso', role: 'Science Teacher', phone: '+233 50 555 7777', hasLoginAccess: false },
  ],
  attendance: [
    { date: 'Mon', present: 19, total: 20 },
    { date: 'Tue', present: 18, total: 20 },
    { date: 'Wed', present: 20, total: 20 },
    { date: 'Thu', present: 17, total: 20 },
    { date: 'Fri', present: 19, total: 20 },
  ],
  sba: [
    { subject: 'Mathematics', scores: { test1: 80, test2: 84, test3: 78, test4: 86, exam: 88 } },
    { subject: 'Science', scores: { test1: 76, test2: 80, test3: 82, test4: 79, exam: 85 } },
    { subject: 'English', scores: { test1: 88, test2: 90, test3: 86, test4: 91, exam: 94 } },
    { subject: 'ICT', scores: { test1: 82, test2: 85, test3: 87, test4: 88, exam: 90 } },
  ],
};
