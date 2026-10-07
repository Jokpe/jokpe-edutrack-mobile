import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { useAppData } from '../../context/AppDataContext';
import { COLORS } from '../../theme/colors';

export default function AnalyticsScreen() {
  const { students, staff, attendance } = useAppData();

  const totalAttendance = attendance.reduce((sum, item) => sum + item.present, 0);
  const totalPossible = attendance.reduce((sum, item) => sum + item.total, 0);
  const attendanceRate = totalPossible ? Math.round((totalAttendance / totalPossible) * 100) : 0;

  return (
    <ScreenContainer title="Analytics">
      <View style={styles.grid}>
        <View style={styles.card}><Text style={styles.label}>Total students</Text><Text style={styles.value}>{students.length}</Text></View>
        <View style={styles.card}><Text style={styles.label}>Staff</Text><Text style={styles.value}>{staff.length}</Text></View>
        <View style={styles.card}><Text style={styles.label}>Attendance</Text><Text style={styles.value}>{attendanceRate}%</Text></View>
        <View style={styles.card}><Text style={styles.label}>Average</Text><Text style={styles.value}>83%</Text></View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    width: '48%',
    marginBottom: 14,
    minHeight: 120,
    justifyContent: 'center',
  },
  label: {
    color: COLORS.muted,
    fontSize: 12,
  },
  value: {
    fontSize: 24,
    fontWeight: '800',
    color: COLORS.text,
    marginTop: 10,
  },
});
