import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native';
// import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';
import FONTS from '../../constants/fonts';

const CustomHeader = ({title,newtitle,onPresstitle, leftIcon, rightIcon, textStyle, onPress}) => {
  return (
    <View style={styles.containerView}>
    {leftIcon && <Image style={styles.topIcon} source={leftIcon} />}
    <View>
      <TouchableOpacity onPress={onPress}>
      <Text style={styles.topText}>{title}</Text>
      </TouchableOpacity>
    </View>

    <TouchableOpacity onPress={onPresstitle}>
      <Text style={styles.topText}>{newtitle}</Text>
      </TouchableOpacity>

    <TouchableOpacity onPress={() => logoutUser()} style={{}}>
    </TouchableOpacity>

    {rightIcon && <Image style={styles.topIcon} source={rightIcon} />}
  </View>
  );
};

const styles = StyleSheet.create({
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    
  },
  topIcon: {height: 25, width: 25},
  topText: {
    fontSize: 14,

    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    // marginLeft: -130,
  },
});

export default CustomHeader;
