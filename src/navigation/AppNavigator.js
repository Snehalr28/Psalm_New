import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TabBarIcon} from '../components';
import {NAVIGATION} from '../constants';
import {HomeNavigator} from '../navigation/HomeNavigator';
import {ProgramNavigator} from './ProgramNavigator';
import {SessionNavigator} from './SessionNavigator';
import {ChatNavigator} from './ChatNavigator';
const Tab = createBottomTabNavigator();

export function AppNavigator() {
  const {colors} = useTheme();

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
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
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
