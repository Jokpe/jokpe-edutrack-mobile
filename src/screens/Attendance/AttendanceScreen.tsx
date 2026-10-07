import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { useAppData } from '../../context/AppDataContext';
import { COLORS } from '../../theme/colors';

export default function AttendanceScreen() {
  const { attendance } = useAppData();

  return (
    <ScreenContainer title="Attendance">
      <View style={styles.container}>
        {attendance.map((item) => (
          <View key={item.date} style={styles.row}>
            <Text style={styles.day}>{item.date}</Text>
            <Text style={styles.value}>{item.present}/{item.total}</Text>
            <Text style={styles.pct}>{Math.round((item.present / item.total) * 100)}%</Text>
          </View>
        ))}
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#edf2f7',
  },
  day: {
    width: 60,
    color: COLORS.text,
    fontWeight: '700',
  },
  value: {
    flex: 1,
    textAlign: 'center',
    color: COLORS.primary,
    fontWeight: '700',
  },
  pct: {
    minWidth: 60,
    textAlign: 'right',
    color: COLORS.muted,
    fontWeight: '600',
  },
});
