import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { COLORS } from '../../theme/colors';

const staff = [
  { id: '1', name: 'Mr. Adjei', role: 'Class Teacher', status: 'Present' },
  { id: '2', name: 'Mrs. Owusu', role: 'Mathematics', status: 'On leave' },
  { id: '3', name: 'Mr. Danso', role: 'Science', status: 'Present' },
];

export default function StaffScreen() {
  return (
    <ScreenContainer title="Staff">
      <FlatList
        data={staff}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>{item.role}</Text>
            <Text style={[styles.status, item.status === 'Present' ? styles.present : styles.leave]}>{item.status}</Text>
          </View>
        )}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  meta: {
    marginTop: 6,
    color: COLORS.muted,
  },
  status: {
    marginTop: 10,
    fontWeight: '700',
    fontSize: 12,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    overflow: 'hidden',
  },
  present: {
    backgroundColor: '#dcfce7',
    color: '#166534',
  },
  leave: {
    backgroundColor: '#fef3c7',
    color: '#92400e',
  },
});
