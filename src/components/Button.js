import {useTheme} from '@react-navigation/native';
import PropTypes from 'prop-types';
import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
// import { typography } from '@/theme';
import FONTS from "../constants/fonts"
import COLORS from "../constants/color"

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:COLORS.PRIMARY,
          alignSelf: 'center',
          height: 45,
          width: '100%',
          borderRadius: 10,
          borderColor: COLORS.PRIMARY,
  },
  textStyle:{
      fontSize: 16,
      fontFamily:FONTS.BOLD,
      color:COLORS.WHITE

  }
  
});

export function Button({ style, textStyle, title,isLoading, loaderColor, ...rest }) {
  const { colors } = useTheme();
  return (
    // <TouchableOpacity style={[styles.button, style]} {...rest}>
    //   {isLoading ? (
    //     <ActivityIndicator size={'small'} color={loaderColor ? loaderColor : 'white'} />
    //   ) : (
    //     <Text style={[{ color: colors.text }, textStyle]}>{title}</Text>
    //   )}
    // </TouchableOpacity>
    <TouchableOpacity style={[styles.button, style]} {...rest}>
      <Text style={[{ color: colors.text }, styles.textStyle, textStyle]}>{title}</Text>
  </TouchableOpacity>
  );
}

Button.propTypes = {
  // style: PropTypes.object,
  // textStyle: PropTypes.object,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  style: null,
  textStyle: null,
};
