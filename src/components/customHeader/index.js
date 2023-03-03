import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native';
// import {TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import COLORS from '../../constants/color';
import FONTS from '../../constants/fonts';

const CustomHeader = ({title, leftIcon, rightIcon, textStyle, onPress}) => {
  return (
    <View style={styles.containerView}>
      {leftIcon && <Image style={styles.topIcon} source={leftIcon} />}
      {/* <View style={textStyle}> */}
      <View>
        <TouchableOpacity onPress={onPress}>
          <Text style={styles.topText}>{title}</Text>
        </TouchableOpacity>
      </View>

      {/* </View> */}

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
    // marginLeft: '-35%',
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    marginLeft: -100,
  },
});

export default CustomHeader;
