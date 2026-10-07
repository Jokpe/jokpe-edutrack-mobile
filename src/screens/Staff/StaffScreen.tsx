import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ScreenContainer from '../../components/ScreenContainer';
import { useAppData } from '../../context/AppDataContext';
import { COLORS } from '../../theme/colors';

export default function StaffScreen() {
  const { staff } = useAppData();

  return (
    <ScreenContainer title="Staff">
      <FlatList
        data={staff}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 24 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.fullName}</Text>
            <Text style={styles.meta}>{item.role}</Text>
            <Text style={styles.meta}>{item.phone}</Text>
            <Text style={[styles.status, item.hasLoginAccess ? styles.present : styles.leave]}>
              {item.hasLoginAccess ? 'Has login access' : 'No login access'}
            </Text>
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
    color: COLORS.muted,
    marginTop: 6,
    fontSize: 13,
  },
  status: {
    marginTop: 10,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    overflow: 'hidden',
    fontWeight: '700',
    fontSize: 12,
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
