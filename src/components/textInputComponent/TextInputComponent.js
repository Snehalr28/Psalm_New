import React from 'react';
import { TouchableOpacity } from 'react-native';
import {View, Text, Image, TouchableWithoutFeedback} from 'react-native';
import {TextInput as MaterialTextInput} from 'react-native-paper';

export const TextInputComponent = props => {
  return (
    <View style={props.emailView}>
      <MaterialTextInput
        placeholder={props.placeholder}
        mode="outlined"
        label={props.label}
        outlineColor="#E5E4E2"
        activeOutlineColor="black"
        style={props.styleInput}
        autoCapitalize="none"
        secureTextEntry={props.secureTextEntry}
        autoCorrect={false}
        value={props.value}
        error={props.error}
        onChangeText={props.onChangeText}
        passwordView={props.passwordView}
        onFocus={props.onFocus}
      />
      {props.empty ? (
        <Text style={props.condtionText}>{props.TextMessage}</Text>
      ) : null}
      {props.checkCondtion ? (
        <Text style={props.condtionText}>{props.TextMessageAlert}</Text>
      ) : null}
      <View style={props.emailIconView}>
        <TouchableOpacity onPress={props.onPress}>
        <Image style={props.emailIcon} source={props.source} />
        </TouchableOpacity>
      </View>
     
    </View>
  );
};