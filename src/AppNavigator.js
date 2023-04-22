import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import SignUp from './SignUp';
import HomeScreen from './home/Home';
import UpgradeToPremium from './premium';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TarotApp from './TarotApp';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: true }}
        />
        <Drawer.Screen name="Login" component={Login}  />
        <Drawer.Screen name="UpgradeToPremium" component={UpgradeToPremium} />
        <Drawer.Screen
          name="TarotApp"
          component={TarotApp}
          options={({ navigation }) => ({
            headerShown: true,
            onLoginSuccess: () => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'TarotApp' }],
              });
            },
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
