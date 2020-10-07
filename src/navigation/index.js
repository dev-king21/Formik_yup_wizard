import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// screens
import SignupScreen from '../screens/general/SignupScreen';
import LoginScreen from '../screens/general/LoginScreen';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
