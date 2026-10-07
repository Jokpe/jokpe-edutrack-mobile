import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useAuth } from '../../context/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';
import { COLORS } from '../../theme/colors';

export default function SettingsScreen() {
  const { session, logout } = useAuth();

  return (
    <ScreenContainer title="Settings">
      <View style={styles.card}>
        <Text style={styles.heading}>School profile</Text>
        <Text style={styles.info}>{session?.school.schoolName}</Text>
        <Text style={styles.info}>School code: {session?.school.schoolCode}</Text>
        <Text style={styles.info}>Region: {session?.school.region}</Text>
        <Text style={styles.info}>District: {session?.school.district}</Text>
        <Text style={styles.info}>Headmaster: {session?.school.headmaster}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => logout()}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 18,
  },
  heading: {
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.text,
    marginBottom: 12,
  },
  info: {
    color: COLORS.muted,
    marginBottom: 8,
    fontSize: 14,
  },
  button: {
    backgroundColor: COLORS.danger,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
  },
});
