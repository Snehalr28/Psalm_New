import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../navigation';
import { Dashboard } from '../screens/Home/Dashboard';
import { MentorMenteeProfile } from '../screens/MentorMenteeProfileScreen/MentorMenteeProfileScreen';

const Stack = createNativeStackNavigator();
export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashborad" component={Dashboard} />
      <Stack.Screen name="MentorMenteeProfileScreen" component={MentorMenteeProfile} />
    </Stack.Navigator>
  );
}
