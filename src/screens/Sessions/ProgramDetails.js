import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export const ProgramDetails = props => { 
  const navigation = useNavigation(); 
  return (
   <View>
    <Text style={{color:'black'}}>ChatNavigator Screen</Text>
   </View>
  );
}
export default ProgramDetails;