import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menteechat from '../../MenteeScreens/Chat/Menteechat';
const Stack = createNativeStackNavigator();
export function MenteeChatNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatScreen" component={Menteechat} options={{headerShown: false}} />
    </Stack.Navigator>
  );
}
