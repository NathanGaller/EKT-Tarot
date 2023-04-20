import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, StyleSheet } from 'react-native';
import { useUserContext } from './UserContext';
import withLogin from './withLogin';
import { getTarotReading, getUserTarotReadings } from './interop/tarot';
import { ComplexError } from './api';
import MainScreen from './reading_components/MainScreen';
import HistoryScreen from './reading_components/HistoryScreen';
import HomeScreen from './home/Home';

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function TarotTabNavigator() {
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

function TarotApp() {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Tarot" component={TarotTabNavigator} />
    </Drawer.Navigator>
  );
}

export default withLogin(TarotApp);