import React from 'react';
import { UserProvider } from './src/UserContext';
import AppNavigator from './src/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
