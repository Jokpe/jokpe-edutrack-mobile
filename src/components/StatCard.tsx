import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { COLORS } from '../theme/colors';

interface StatCardProps {
  label: string;
  value: string;
  accent?: string;
  onPress?: () => void;
}

export default function StatCard({ label, value, accent = COLORS.primary, onPress }: StatCardProps) {
  return (
    <Pressable onPress={onPress} style={[styles.card, { borderLeftColor: accent }]}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    minWidth: '45%',
    backgroundColor: COLORS.white,
    borderRadius: 14,
    padding: 16,
    margin: 8,
    borderLeftWidth: 6,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  label: {
    fontSize: 12,
    color: COLORS.muted,
    marginBottom: 8,
  },
  value: {
    fontSize: 22,
    fontWeight: '700',
    color: COLORS.text,
  },
});
