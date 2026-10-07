import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { COLORS } from '../../theme/colors';

const students = [
  { id: '1', name: 'Ama Mensah', gender: 'Female', className: 'KG1' },
  { id: '2', name: 'Kojo Boateng', gender: 'Male', className: 'Basic 3' },
  { id: '3', name: 'Efua Tetteh', gender: 'Female', className: 'JHS 1' },
  { id: '4', name: 'Nana Osei', gender: 'Male', className: 'SHS 2' },
];

export default function StudentsScreen() {
  return (
    <ScreenContainer title="Students">
      <FlatList
        data={students}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>{item.gender} • {item.className}</Text>
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
    borderLeftWidth: 5,
    borderLeftColor: COLORS.primary,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    color: COLORS.text,
  },
  meta: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 6,
  },
});
