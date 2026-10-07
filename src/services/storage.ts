import AsyncStorage from '@react-native-async-storage/async-storage';

const AUTH_KEY = 'jokpe_session';

export const storage = {
  async saveSession(data: unknown) {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify(data));
  },

  async getSession() {
    const raw = await AsyncStorage.getItem(AUTH_KEY);
    return raw ? JSON.parse(raw) : null;
  },

  async clearSession() {
    await AsyncStorage.removeItem(AUTH_KEY);
  },
};
