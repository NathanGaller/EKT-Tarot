import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TarotApp from './TarotApp';
import Login from './Login';
import SignUp from './SignUp';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen
          name="TarotApp"
          component={TarotApp}
          options={{ headerShown: false }} // Hide the header for the nested stack
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
