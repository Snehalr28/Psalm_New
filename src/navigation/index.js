import {NavigationContainer} from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {AppNavigator} from '../navigation/AppNavigator';
import {AuthNavigator} from '../navigation/AuthNavigator';
import {getUser, getUserConfirm} from '../selectors/UserSelectors';

import {theme} from '../theme';
import {StyleSheet, View, Text} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { navigationRef } from './NavigationService';
export function RootNavigator() {
  const user = useSelector(getUser);
  const userConfirm = useSelector(getUserConfirm);
  const scheme = useColorScheme();
  console.log('user of navigation', user)
  console.log('user confirm ',userConfirm)
  const [condition, setCondition] = useState(false);
const Stack = createNativeStackNavigator();

// useEffect(() => {
// if(user?.response?.data?.email){
//   setCondition(true)
// }
  
// },[user]);


  return (
    <NavigationContainer theme={theme[scheme]}>
      
    {/* <NavigationContainer ref={navigationRef} theme={theme[scheme]}> */}
     {/* <AuthNavigator /> */}
      {/* <Stack.Navigator screenOptions={{ headerShown: false }}> */}
      {/* {user?  <Stack.Screen name="AppNavigator" component={AppNavigator} />: <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> }  */}
      {/* {user? (<AppNavigator/>) : (<AuthNavigator/>)} */}
      {userConfirm? (<AppNavigator/>) : (<AuthNavigator/>)}
       {/* <Stack.Screen name="AuthNavigator" component={AuthNavigator} /> */}
       {/* <Stack.Screen name="AppNavigator" component={AppNavigator} /> */}
    {/* </Stack.Navigator> */}
    </NavigationContainer>
  );
}
