import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenteeHome from '../../MenteeScreens/Home/MenteeHome';

const Stack = createNativeStackNavigator();
export function MenteeHomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenteeHome"
        component={MenteeHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
