import React from 'react';
import { UserProvider } from './src/UserContext';
import AppNavigator from './src/AppNavigator';

export default function App() {
  return (
    <UserProvider>
      <AppNavigator />
    </UserProvider>
  );
}
