import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export const ChatScreen = props => { 
  const navigation = useNavigation(); 
  return (
   <View>
    <Text style={{color:'black'}}>ChatNavigator Screen</Text>
   </View>
  );
}
export default ChatScreen;