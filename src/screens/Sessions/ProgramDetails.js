import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export const ProgramDetails = props => { 
  const navigation = useNavigation(); 
  return (
   <View>
      {/* <Text onPress={()=>navigation.navigate("Program Details")}>Sessions Screen</Text> */}
    <Text style={{color:'black'}}>ChatNavigator Screen</Text>
   </View>
  );
}
export default ProgramDetails;