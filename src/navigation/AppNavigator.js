import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TabBarIcon} from '../components';
import {NAVIGATION} from '../constants';
import {HomeNavigator} from '../navigation/HomeNavigator';
import {ProfileNavigator, ProgramNavigator} from './ProgramNavigator';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';
import { SessionNavigator } from './SessionNavigator';
import { ChatNavigator } from './ChatNavigator';
const Tab = createBottomTabNavigator();

export function 
AppNavigator() {
  const {colors} = useTheme();
  // return(
  //   <View style={{backgroundColor:"red",height:200}}></View>
  // )
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        activeTintColor: colors.activeTab,
        inactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({color}) => (
          <TabBarIcon color={color} routeName={route.name} />
        ),
      })}
      tabBarOptions={{
        activeTintColor: colors.activeTab,
        inactiveTintColor: colors.inactiveTab,
      }}
      >
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      {/* <Tab.Screen name={NAVIGATION.profile} component={ProfileNavigator} /> */}
      <Tab.Screen
        name="Program"
        component={ProgramNavigator}
        options={{headerShown: false}}
      />
         <Tab.Screen
        name="Session"
        component={SessionNavigator}
        options={{headerShown: false}}
      />
         <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{headerShown: false}}
      /> 
    </Tab.Navigator>
  );
}
