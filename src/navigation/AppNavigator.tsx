import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/Dashboard/HomeScreen';
import StudentsScreen from '../screens/Students/StudentsScreen';
import AttendanceScreen from '../screens/Attendance/AttendanceScreen';
import SBAScreen from '../screens/SBA/SBAScreen';
import StaffScreen from '../screens/Staff/StaffScreen';
import AnalyticsScreen from '../screens/Analytics/AnalyticsScreen';
import SettingsScreen from '../screens/Settings/SettingsScreen';

export type AppTabParamList = {
  Home: undefined;
  Students: undefined;
  Attendance: undefined;
  SBA: undefined;
  Staff: undefined;
  Analytics: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<AppTabParamList>();

export default function AppTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const iconName =
            route.name === 'Home'
              ? 'home-outline'
              : route.name === 'Students'
                ? 'people-outline'
                : route.name === 'Attendance'
                  ? 'calendar-outline'
                  : route.name === 'SBA'
                    ? 'clipboard-outline'
                    : route.name === 'Staff'
                      ? 'person-outline'
                      : route.name === 'Analytics'
                        ? 'bar-chart-outline'
                        : 'settings-outline';

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        headerShown: false,
        tabBarActiveTintColor: '#1d4ed8',
        tabBarInactiveTintColor: '#6b7280',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Students" component={StudentsScreen} />
      <Tab.Screen name="Attendance" component={AttendanceScreen} />
      <Tab.Screen name="SBA" component={SBAScreen} />
      <Tab.Screen name="Staff" component={StaffScreen} />
      <Tab.Screen name="Analytics" component={AnalyticsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}
