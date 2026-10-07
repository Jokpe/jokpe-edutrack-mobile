import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../context/AuthContext';
import ScreenContainer from '../../components/ScreenContainer';
import { COLORS } from '../../theme/colors';

export default function RegisterScreen() {
  const navigation = useNavigation<any>();
  const { registerSchool } = useAuth();
  const [form, setForm] = useState({
    schoolName: 'Jokpe Academy',
    address: 'Ashaley Botwe',
    region: 'Greater Accra',
    district: 'Madina',
    circuit: 'North Circuit',
    community: 'Ashaley Botwe',
    digitalAddress: 'GA-000-0000',
    phone: '+233 500 000 000',
    email: 'admin@jokpe.edu',
    headmaster: 'Mr. Owusu',
    username: 'admin',
    password: 'admin123',
  });
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const updateField = (key: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  const handleRegister = async () => {
    setLoading(true);
    try {
      await registerSchool(form);
    } catch (error: any) {
      setMessage(error.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScreenContainer title="Register school">
      <View style={styles.container}>
        <TextInput value={form.schoolName} onChangeText={(v) => updateField('schoolName', v)} style={styles.input} placeholder="School name" />
        <TextInput value={form.address} onChangeText={(v) => updateField('address', v)} style={styles.input} placeholder="Address" />
        <TextInput value={form.region} onChangeText={(v) => updateField('region', v)} style={styles.input} placeholder="Region" />
        <TextInput value={form.district} onChangeText={(v) => updateField('district', v)} style={styles.input} placeholder="District" />
        <TextInput value={form.circuit} onChangeText={(v) => updateField('circuit', v)} style={styles.input} placeholder="Circuit" />
        <TextInput value={form.community} onChangeText={(v) => updateField('community', v)} style={styles.input} placeholder="Community" />
        <TextInput value={form.phone} onChangeText={(v) => updateField('phone', v)} style={styles.input} placeholder="Phone" />
        <TextInput value={form.email} onChangeText={(v) => updateField('email', v)} style={styles.input} placeholder="Admin email" keyboardType="email-address" />
        <TextInput value={form.headmaster} onChangeText={(v) => updateField('headmaster', v)} style={styles.input} placeholder="Headmaster" />
        <TextInput value={form.username} onChangeText={(v) => updateField('username', v)} style={styles.input} placeholder="Username" />
        <TextInput value={form.password} onChangeText={(v) => updateField('password', v)} style={styles.input} placeholder="Password" secureTextEntry />

        {message ? <Text style={styles.message}>{message}</Text> : null}

        <TouchableOpacity style={styles.primaryButton} onPress={handleRegister} disabled={loading}>
          <Text style={styles.primaryButtonText}>{loading ? 'Creating account...' : 'Create school account'}</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.link}>Already have an account? Login</Text>
        </TouchableOpacity>
      </View>
    </ScreenContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 10,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
    paddingVertical: 12,
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
    marginTop: 12,
    color: COLORS.primary,
    textAlign: 'center',
    fontWeight: '600',
  },
  message: {
    color: COLORS.danger,
    fontSize: 13,
  },
});
