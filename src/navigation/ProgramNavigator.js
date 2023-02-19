import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NAVIGATION} from '.';
import {
  AddNewProgram,
  ProgramScreen,
} from '../screens/Program/ProgramAdd/AddNewProgram';
import ProgramList from '../screens/Program/ProgramList/ProgramList';
import ProgramCategory from '../screens/Program/ProgramCategory/ProgramCategory';
import Programs from "../screens/Program/Programs/Programs"
import ProgramDetails from "../screens/Program/ProgramDetails/ProgramDetails"
import EditProgram from "../screens/Program/EditProgram/EditProgram"
const Stack = createNativeStackNavigator();
export function ProgramNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProgramCategory"
        component={ProgramCategory}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="ProgramList"
        component={ProgramList}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Add New Program"
        component={AddNewProgram}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="programs"
        component={Programs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Program Details"
        component={ProgramDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit Program"
        component={EditProgram}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
