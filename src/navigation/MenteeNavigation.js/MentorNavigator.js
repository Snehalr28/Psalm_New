

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Mentorlist from '../../MenteeScreens/Mentorslist/Mentorlist';

const Stack = createNativeStackNavigator();
export function MentorNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenteeProgram"
        component={Mentorlist}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
