import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenteeProgram from '../../MenteeScreens/program/MenteeProgram';

const Stack = createNativeStackNavigator();
export function MenteeProgramNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenteeProgram"
        component={MenteeProgram}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
