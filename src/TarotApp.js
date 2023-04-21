import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import withLogin from './withLogin';
import MainScreen from './reading_components/MainScreen';
import HistoryScreen from './reading_components/HistoryScreen';

const Tab = createBottomTabNavigator();

function TarotTabNavigator({navigation}) {
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

export default withLogin(TarotTabNavigator);