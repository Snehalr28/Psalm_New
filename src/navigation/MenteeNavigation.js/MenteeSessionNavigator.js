import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menteesession from '../../MenteeScreens/Session/Menteesession';

const Stack = createNativeStackNavigator();
export function MenteeSessionNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Menteesession" component={Menteesession} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
