import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';
import {logout} from '../../actions/UserActions';
import COLORS from '../../constants/color';
import FONTS from '../../constants/fonts';
import {useNavigation} from '@react-navigation/native';

const logoutUser = () => {
  dispatch(logout());
};

const CustomHeader = ({title, newtitle, leftIcon, rightIcon, textStyle, onPress}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.containerView}>
      {leftIcon && <Image style={styles.topIcon} source={leftIcon} />}
      <View>
        <TouchableOpacity onPress={onPress}>
        <Text style={styles.topText}>{title}</Text>
        </TouchableOpacity>
      </View>
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
    // fontWeight: 'bold',
    marginLeft: '-35%',
    // marginTop: 3,
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
    marginLeft: -1,
  },
});

export default CustomHeader;
