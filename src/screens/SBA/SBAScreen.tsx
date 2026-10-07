import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { COLORS } from '../../theme/colors';

const marks = [
  { subject: 'Mathematics', score: 82 },
  { subject: 'Science', score: 76 },
  { subject: 'English', score: 90 },
  { subject: 'ICT', score: 88 },
];

export default function SBAScreen() {
  return (
    <ScreenContainer title="SBA">
      <View style={styles.container}>
        {marks.map((item) => (
          <View key={item.subject} style={styles.item}>
            <Text style={styles.label}>{item.subject}</Text>
            <View style={styles.progressTrack}>
              <View style={[styles.progressFill, { width: `${item.score}%` }]} />
            </View>
            <Text style={styles.score}>{item.score}%</Text>
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
  item: {
    marginBottom: 18,
  },
  label: {
    color: COLORS.text,
    fontSize: 14,
    marginBottom: 8,
    fontWeight: '600',
  },
  progressTrack: {
    height: 10,
    borderRadius: 999,
    backgroundColor: '#e5e7eb',
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: COLORS.secondary,
    borderRadius: 999,
  },
  score: {
    marginTop: 6,
    color: COLORS.muted,
    fontSize: 12,
  },
});
