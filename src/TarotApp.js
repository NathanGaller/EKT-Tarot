import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useUserContext } from './UserContext';
import withLogin from './withLogin';
import { getTarotReading, getUserTarotReadings } from './interop/tarot';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TarotReading from './TarotReading';
import TarotReadingDisplay from './TarotReadingDisplay';
import { ComplexError } from './api';
import MainScreen from './reading_components/MainScreen';
import HistoryScreen from './reading_components/HistoryScreen';
import Navigation from './reading_components/Navigation';
import { styles } from './Style';

const TarotStack = createStackNavigator();

function TarotApp() {
  return (
    <TarotStack.Navigator
      initialRouteName="MainScreen"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#5cb85c',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <TarotStack.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: 'New Reading' }}
      />
      <TarotStack.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ title: 'Reading History' }}
      />
    </TarotStack.Navigator>
  );
}

export default withLogin(TarotApp);