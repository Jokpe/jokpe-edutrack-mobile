import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../context/AuthContext';
import AuthNavigator from './AuthNavigator';
import AppTabs from './AppTabs';

export default function AppNavigator() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f3f6fb' }}>
        <ActivityIndicator size="large" color="#1d4ed8" />
      </View>
    );
  }

  return isAuthenticated ? <AppTabs /> : <AuthNavigator />;
}
