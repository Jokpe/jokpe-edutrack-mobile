import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { useAppData } from '../../context/AppDataContext';
import { COLORS } from '../../theme/colors';

export default function SBAScreen() {
  const { sba } = useAppData();

  return (
    <ScreenContainer title="SBA">
      <View style={styles.container}>
        {sba.map((item) => {
          const total = Object.values(item.scores).reduce((sum, value) => sum + value, 0);
          const average = total / Object.keys(item.scores).length;

          return (
            <View key={item.subject} style={styles.item}>
              <Text style={styles.label}>{item.subject}</Text>
              <Text style={styles.score}>{average.toFixed(0)} avg</Text>
              <View style={styles.progressTrack}>
                <View style={[styles.progressFill, { width: `${Math.min(average, 100)}%` }]} />
              </View>
            </View>
          );
        })}
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
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 8,
  },
  score: {
    color: COLORS.muted,
    fontSize: 12,
    marginBottom: 8,
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
});
