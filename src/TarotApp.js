import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { useUserContext } from './UserContext';
import withLogin from './withLogin';
import { getTarotReading, getUserTarotReadings } from './interop/tarot';
import { ComplexError } from './api';
import MainScreen from './reading_components/MainScreen';
import HistoryScreen from './reading_components/HistoryScreen';
import { styles } from './Style';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TarotApp() {
  return (
    <Tab.Navigator
      initialRouteName="MainScreen"
      tabBarOptions={{
        activeTintColor: '#5cb85c',
        inactiveTintColor: 'gray',
        labelStyle: { fontSize: 14, paddingBottom: 4 },
      }}
    >
      <Tab.Screen
        name="MainScreen"
        component={MainScreen}
        options={{ title: 'New Reading' }}
      />
      <Tab.Screen
        name="HistoryScreen"
        component={HistoryScreen}
        options={{ title: 'Reading History' }}
      />
    </Tab.Navigator>
  );
}

export default withLogin(TarotApp);
