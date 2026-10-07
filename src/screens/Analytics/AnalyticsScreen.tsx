import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { COLORS } from '../../theme/colors';

export default function AnalyticsScreen() {
  return (
    <ScreenContainer title="Analytics">
      <View style={styles.grid}>
        <View style={styles.card}><Text style={styles.label}>Total students</Text><Text style={styles.value}>1240</Text></View>
        <View style={styles.card}><Text style={styles.label}>Pass rate</Text><Text style={styles.value}>86%</Text></View>
        <View style={styles.card}><Text style={styles.label}>School average</Text><Text style={styles.value}>78%</Text></View>
        <View style={styles.card}><Text style={styles.label}>Attendance</Text><Text style={styles.value}>92%</Text></View>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 18,
    width: '48%',
    margin: '1%',
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
