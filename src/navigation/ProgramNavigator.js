import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '.';
import { MentorMenteeProfile, MentorProfile, Profile, ProgramScreen } from '../screens/Program/Program';

const Stack = createNativeStackNavigator();

export function ProgramNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{ headerLargeTitle: true }}
      /> */}
        <Stack.Screen
        name="ProgramScreen"
        component={ProgramScreen}
        options={{ headerLargeTitle: true }}
      />
    </Stack.Navigator>
  );
}
