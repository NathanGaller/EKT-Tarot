import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TarotApp from './TarotApp';
import Login from './Login';
import SignUp from './SignUp';
import HomeScreen from './home/Home';
import UpgradeToPremium from './premium';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="UpgradeToPremium" component={UpgradeToPremium} />
        <Stack.Screen
          name="TarotApp"
          component={TarotApp}
          options={({ navigation }) => ({
            headerShown: false,
            onLoginSuccess: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'TarotApp' }],
              });
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
