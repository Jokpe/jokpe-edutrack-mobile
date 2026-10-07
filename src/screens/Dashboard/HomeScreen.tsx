import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import StatCard from '../../components/StatCard';
import { COLORS } from '../../theme/colors';

const quickStats = [
  { label: 'Students', value: '1,240', accent: COLORS.primary },
  { label: 'Teachers', value: '54', accent: COLORS.secondary },
  { label: 'Attendance', value: '92%', accent: COLORS.success },
  { label: 'Pending', value: '12', accent: COLORS.warning },
];

export default function HomeScreen() {
  return (
    <ScreenContainer title="Dashboard">
      <View style={styles.heroCard}>
        <Text style={styles.heroTitle}>Good morning</Text>
        <Text style={styles.heroSubtitle}>Here is your school summary for today.</Text>
      </View>

      <View style={styles.grid}>
        {quickStats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} accent={stat.accent} />
        ))}
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
    marginBottom: 16,
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
