import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {TabBarIcon} from '../components';
import {NAVIGATION} from '../constants';
import {HomeNavigator} from '../navigation/HomeNavigator';
import {ProgramNavigator} from './ProgramNavigator';
import {SessionNavigator} from './SessionNavigator';
import {ChatNavigator} from './ChatNavigator';
import { getUser } from '../selectors/UserSelectors';
import {useSelector} from 'react-redux';
import { MenteeHomeNavigator } from './MenteeNavigation.js/MenteeHomeNavigator';
import { MenteeProgramNavigator } from './MenteeNavigation.js/MenteeProgramNavigator';
import { MenteeSessionNavigator } from './MenteeNavigation.js/MenteeSessionNavigator';
import { MenteeChatNavigator } from './MenteeNavigation.js/MenteeChatNavigator';
import { MentorNavigator } from './MenteeNavigation.js/MentorNavigator';
import { MenteeTabBarIcon } from '../components/MenteeTabBarIcon';

const Tab = createBottomTabNavigator();
export function AppNavigator() {
  const {colors} = useTheme();
  const user = useSelector(getUser);
  console.log('getuser response for app navigator', user.response);
  return (
    <>
    {user.response.data.role==1?
    
    // {true?
    (<Tab.Navigator
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
    </Tab.Navigator>):( <Tab.Navigator
      screenOptions={({route}) => ({
        activeTintColor: colors.activeTab,
        inactiveTintColor: colors.inactiveTab,
        tabBarIcon: ({color}) => (
          <MenteeTabBarIcon color={color} routeName={route.name} />
        ),
      })}
      tabBarOptions={{
        activeTintColor: colors.activeTab,
        inactiveTintColor: colors.inactiveTab,
      }}>
      <Tab.Screen
        name="Home"
        component={MenteeHomeNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Program"
        component={MenteeProgramNavigator}
        options={{headerShown: false}}
      />
         <Tab.Screen
        name="Mentors"
        component={MentorNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Session"
        component={MenteeSessionNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Chat"
        component={MenteeChatNavigator}
        options={{headerShown: false}}
      />
    
    </Tab.Navigator>)}
    </>
  );
}
