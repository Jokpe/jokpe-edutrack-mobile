import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { COLORS } from '../../theme/colors';

const records = [
  { subject: 'Math', present: 19, total: 20 },
  { subject: 'Science', present: 18, total: 20 },
  { subject: 'English', present: 17, total: 20 },
  { subject: 'ICT', present: 20, total: 20 },
];

export default function AttendanceScreen() {
  return (
    <ScreenContainer title="Attendance">
      <View style={styles.container}>
        {records.map((item) => (
          <View key={item.subject} style={styles.row}>
            <Text style={styles.subject}>{item.subject}</Text>
            <Text style={styles.value}>{item.present}/{item.total}</Text>
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
    padding: 14,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#eef2f7',
  },
  subject: {
    fontSize: 15,
    color: COLORS.text,
  },
  value: {
    fontWeight: '700',
    color: COLORS.primary,
  },
});
