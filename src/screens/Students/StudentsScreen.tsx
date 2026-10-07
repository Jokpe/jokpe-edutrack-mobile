import React from 'react';
import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { useAppData } from '../../context/AppDataContext';
import { COLORS } from '../../theme/colors';

export default function StudentsScreen() {
  const { students } = useAppData();

  return (
    <ScreenContainer title="Students">
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <Pressable style={styles.card}>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text style={styles.meta}>{item.gender} • {item.className}</Text>
            <Text style={styles.meta}>Admission: {item.admissionNumber || 'N/A'}</Text>
            <Text style={styles.meta}>Guardian: {item.guardianName || 'N/A'}</Text>
          </Pressable>
        )}
      />
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    borderLeftWidth: 5,
    borderLeftColor: COLORS.primary,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
  },
  name: {
    fontSize: 16,
    color: COLORS.text,
    fontWeight: '700',
  },
  meta: {
    color: COLORS.muted,
    fontSize: 13,
    marginTop: 4,
  },
});
