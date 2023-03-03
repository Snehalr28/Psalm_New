import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet, View, Text} from 'react-native';
import {NAVIGATION} from '../constants';
import OnboardingS from '../screens/Onboarding/OnboardingS';
import ForgetPassword from '../screens/ForgetPassword/ForgetPassword';
import {Login} from '../screens/Login/Login';
import CreateNewPassword from '../screens/CreateNewPassword/CreateNewPassword';
import VerifyEmail from '../screens/VerifyEmail/VerifyEmail';
import BiometricLogin from '../screens/Biometric/BiometricLogin';
import Register from '../screens/Register/Register';
import TermsConditions from '../screens/TermsConditions/TermsConditions';

const Stack = createNativeStackNavigator();

export function AuthNavigator() {
  return (
    <Stack.Navigator>
       {/* <Stack.Screen
        component={OnboardingS}
        name="Onboarding"
        options={{headerShown: false}}
      /> */}
     
      <Stack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
        <Stack.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}}
      />
      
       <Stack.Screen
        component={ForgetPassword}
        name="ForgetPassword"
        options={{headerShown: false}}
      />
       <Stack.Screen
        component={VerifyEmail}
        name="VerifyEmail"
        options={{headerShown: false}}
      />
      <Stack.Screen
        component={CreateNewPassword}
        name="createNewPassword"
        options={{headerShown: false}}
      /> 
       <Stack.Screen
        component={BiometricLogin}
        name="BiometricLogin"
        options={{headerShown: false}}
      /> 
       <Stack.Screen
        name="Terms & Conditions"
        component={TermsConditions}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
