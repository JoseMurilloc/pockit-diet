import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { RevenueDetail } from '../screens/App/RevenueDetail';
import Revenues from '../screens/App/Revenues';

const Stack = createStackNavigator();

export function RevenueStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen 
        name="RevenueScreen"
        component={Revenues}
      />
      <Stack.Screen 
        name="RevenueDetail"
        component={RevenueDetail}
      />
    </Stack.Navigator>
  );
}