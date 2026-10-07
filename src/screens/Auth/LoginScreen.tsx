import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../context/AuthContext';
import { COLORS } from '../theme/colors';
import ScreenContainer from '../components/ScreenContainer';

export default function LoginScreen() {
  const navigation = useNavigation<any>();
  const { login } = useAuth();
  const [schoolCode, setSchoolCode] = useState('JOKP1234');
  const [username, setUsername] = useState('admin');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    if (!schoolCode || !username || !password) {
      setMessage('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      await login(schoolCode, username, password);
      setMessage('');
    } catch (error: any) {
      setMessage(error.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer title="Welcome back">
      <View style={styles.card}>
        <Text style={styles.title}>Jokpe EduTrack</Text>
        <Text style={styles.subtitle}>School management system</Text>

        <TextInput
          value={schoolCode}
          onChangeText={setSchoolCode}
          style={styles.input}
          placeholder="School code"
          autoCapitalize="characters"
        />

        <TextInput
          value={username}
          onChangeText={setUsername}
          style={styles.input}
          placeholder="Username"
          autoCapitalize="none"
        />

        <TextInput
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />

        {message ? <Text style={styles.message}>{message}</Text> : null}

        <TouchableOpacity style={styles.primaryButton} onPress={handleLogin} disabled={loading}>
          <Text style={styles.primaryButtonText}>{loading ? 'Signing in...' : 'Login'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Register')}>
          <Text style={styles.link}>Need a school account? Register</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 18,
    padding: 22,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 14,
    elevation: 4,
  },
  title: {
    fontSize: 28,
    fontWeight: '800',
    color: COLORS.text,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.muted,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 12,
    marginBottom: 14,
    fontSize: 16,
    backgroundColor: '#f9fafb',
  },
  primaryButton: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 8,
  },
  primaryButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  link: {
    marginTop: 18,
    textAlign: 'center',
    color: COLORS.primary,
    fontWeight: '600',
  },
  message: {
    color: COLORS.danger,
    marginBottom: 10,
    fontSize: 13,
  },
});
