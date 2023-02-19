
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../navigation';
import { Dashboard } from '../screens/Home/Dashboard';

import ChatScreen from '../screens/Chat/ChatScreen'

const Stack = createNativeStackNavigator();
export function ChatNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatScreen" component={ChatScreen } />
    </Stack.Navigator>
  );
}
