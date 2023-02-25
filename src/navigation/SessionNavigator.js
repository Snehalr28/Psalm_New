import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION} from '../navigation';
import {Dashboard} from '../screens/Home/Dashboard';
import ProgramDetails from '../screens/Sessions/ProgramDetails';

const Stack = createNativeStackNavigator();
export function SessionNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="programs" component={Programs} /> */}
      <Stack.Screen name="Program Details" component={ProgramDetails} />
      {/* <Stack.Screen name="Edit Program" component={EditProgram}/> */}
    </Stack.Navigator>
  );
}
