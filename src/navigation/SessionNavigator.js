import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION} from '../navigation';
import {Dashboard} from '../screens/Home/Dashboard';
import ProgramDetails from '../screens/Sessions/ProgramDetails';
import AddSession from "../screens/Sessions/addSession";
import AddNewSession from "../screens/Sessions/addNewSession/"
import EditSession from '../screens/Sessions/editSession';


const Stack = createNativeStackNavigator();
export function SessionNavigator() {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="programs" component={Programs} /> */}
      <Stack.Screen name="Program Details" component={ProgramDetails} />
      <Stack.Screen name="Add Session" component={AddSession}/>
      <Stack.Screen name="Add New Session" component={AddNewSession}/>
      <Stack.Screen name="Edit Session" component={EditSession}/>
    </Stack.Navigator>
  );
}
