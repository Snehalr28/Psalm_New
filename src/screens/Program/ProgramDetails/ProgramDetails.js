import React from 'react';
import {View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
export const ProgramDetails = props => {
  const navigation = useNavigation();
  return (
    <View>
      <Text onPress={() => navigation.navigate('Program Details')}>
        Sessions Screen
      </Text>
    </View>
  );
};
export default ProgramDetails;
