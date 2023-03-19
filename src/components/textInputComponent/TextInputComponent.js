import React from 'react';
import { TouchableOpacity } from 'react-native';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TextInput as MaterialTextInput} from 'react-native-paper';
import FONTS from "../../constants/fonts"
import COLORS from "../../constants/color"

export const TextInputComponent = props => {
  return (
    <View style={props.emailView}>
      <MaterialTextInput
        placeholder={props.placeholder}
        mode="outlined"
        label={props.label}
        outlineColor="#E5E4E2"
        activeOutlineColor="black"
        style= {[props.styleInput, styles.styleInput]}
        // style={{fontFamily:FONTS.REGULAR, color:COLORS.BLACK, }}
        // style={{fontFamily:FONTS.BOLD_ITALIC, color:COLORS.BLACK}}
        autoCapitalize="none"
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        value={props.value}
        error={props.error}
        onChangeText={props.onChangeText}
        passwordView={props.passwordView}
        onFocus={props.onFocus}
        placeholderStyle={{fontFamily:FONTS.REGULAR,}}
        placeholderTextColor="grey"
        keyboardType={props.keyboardType}
        onBlur={props.onBlur}
      />
      {props.empty ? (
        <Text style={[props.condtionText, styles.conditionText]}>{props.TextMessage}</Text>
      ) : null}
      {props.checkCondtion ? (
        <Text style={[props.condtionText, styles.conditionText]}>{props.TextMessageAlert}</Text>
      ) : null}
      <View style={props.emailIconView}>
        <TouchableOpacity onPress={props.onPress}>
        <Image style={props.emailIcon} source={props.source} />
        </TouchableOpacity>
      </View>
     
    </View>
  );
};




const styles = StyleSheet.create({
  styleInput: {
    fontFamily:FONTS.REGULAR,
    // width:200,
  },
  conditionText:{
    fontFamily:FONTS.REGULAR,
  }
})
