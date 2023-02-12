import React from 'react';
import {View, Text, Image} from 'react-native';
import {TextInput as MaterialTextInput} from 'react-native-paper';

export const TextInputComponent = props => {
  return (
    <View style={props.emailView}>
      <MaterialTextInput
        placeholder={props.placeholder}
        mode="outlined"
        label={props.label}
        outlineColor="grey"
        activeOutlineColor="black"
        style={props.styleInput}
        autoCapitalize="none"
        autoCorrect={false}
        value={props.value}
        onChangeText={props.onChange}
      />
      {props.empty ? (
        <Text style={props.styleText}>{props.TextMessage}</Text>
      ) : null}
      {props.checkemail ? (
        <Text style={props.styleText}>{props.TextMessageAlert}</Text>
      ) : null}
      <View style={props.emailIconView}>
        <Image style={props.emailIcon} source={props.ImageIcon} />
      </View>
    </View>
  );
};
