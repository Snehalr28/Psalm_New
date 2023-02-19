import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NAVIGATION } from '../navigation';
import { Dashboard } from '../screens/Home/Dashboard';
import { MentorMenteeProfile } from '../screens/MentorMenteeProfileScreen/MentorMenteeProfileScreen';

import BankDetails from '../screens/Bank/AddBankDetails/AddBankDetails';

import AddBankAccount from '../screens/Bank/BankAccountAdd/AddBankAccount';
import BankAccountVerify from '../screens/Bank/BankAccountVerify/BankAccountVerify';
import AddBankDetails from '../screens/Bank/AddBankDetails/AddBankDetails';

const Stack = createNativeStackNavigator();
export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Dashborad" component={Dashboard}  options={{headerShown: false}} />
      <Stack.Screen name="MentorMenteeProfileScreen" component={MentorMenteeProfile}  options={{headerShown: false}}/>
      <Stack.Screen name="Add Bank Account" component={AddBankAccount} />
      <Stack.Screen name="Add Bank Details" component={AddBankDetails} />
      <Stack.Screen name="Bank Account Verify" component={BankAccountVerify} />
    </Stack.Navigator>
  );
}
