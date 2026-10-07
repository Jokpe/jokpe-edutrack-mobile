import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import StatCard from '../../components/StatCard';
import { useAppData } from '../../context/AppDataContext';
import { COLORS } from '../../theme/colors';

export default function HomeScreen() {
  const { students, staff, attendance } = useAppData();
  const totalPresent = attendance.reduce((sum, item) => sum + item.present, 0);
  const totalPossible = attendance.reduce((sum, item) => sum + item.total, 0);
  const attendanceRate = totalPossible ? Math.round((totalPresent / totalPossible) * 100) : 0;

  return (
    <ScreenContainer title="Dashboard">
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>Good morning</Text>
        <Text style={styles.heroSubtitle}>Your school is performing well today.</Text>
      </View>

      <View style={styles.grid}>
        <StatCard label="Students" value={String(students.length)} accent={COLORS.primary} />
        <StatCard label="Teachers" value={String(staff.length)} accent={COLORS.secondary} />
        <StatCard label="Attendance" value={`${attendanceRate}%`} accent={COLORS.success} />
        <StatCard label="Pending" value="12" accent={COLORS.warning} />
      </View>

      <View style={styles.panel}>
        <Text style={styles.panelTitle}>Quick actions</Text>
        <View style={styles.row}>
          <Text style={styles.item}>Register learners</Text>
          <Text style={styles.badge}>Today</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.item}>Review SBA marks</Text>
          <Text style={styles.badge}>6 tasks</Text>
        </View>
        <View style={styles.row}>
          <Text style={styles.item}>Staff attendance</Text>
          <Text style={styles.badge}>91%</Text>
        </View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  heroCard: {
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    padding: 20,
    marginBottom: 16,
  },
  heroTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
  },
  heroSubtitle: {
    color: '#dbeafe',
    fontSize: 14,
    marginTop: 6,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 14,
  },
  panel: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  panelTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
    color: COLORS.text,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eef2f7',
  },
  item: {
    color: COLORS.text,
    fontSize: 15,
  },
  badge: {
    backgroundColor: '#e0f2fe',
    color: COLORS.primary,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    overflow: 'hidden',
    fontSize: 12,
    fontWeight: '700',
  },
});
