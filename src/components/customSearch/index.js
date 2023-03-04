import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';
import COLORS from "../../constants/color"
import FONTS from "../../constants/fonts"

const CustomSearch = ({ searchTerm, onSearchTermChange, placeholder }) => {
  return (
    <View style={styles.containerView}>
      <View style={styles.searchIcon}>
        <Image source={require('../../assets/Icons/Search.png')} />
      </View>
      <TextInput
        placeholder={placeholder}
        onChangeText={onSearchTermChange}
        value={searchTerm}
        style={styles.searchTextInput}
        textAlign="left"
        placeholderTextColor="grey"
      />
    </View>
  );
};

const styles = StyleSheet.create({
    containerView:{
        justifyContent: 'flex-start',
        marginLeft: '9%',
        flexDirection: 'row',
        borderWidth: 1,
        borderRadius: 10,
        borderColor:COLORS.HIGHLIGHT,
        marginRight: '9%',
        backgroundColor:COLORS.LIGHT_GREY
      },
      searchIcon:{marginTop: 10, marginLeft: 10},
      searchTextInput:{
        borderRadius: 10,
        width: '95%',
        marginLeft: 10,
        marginTop: -4,
        // marginBottom: 5,
        fontFamily:FONTS.REGULAR,
        color: COLORS.BLACK
      },
});

export default CustomSearch;