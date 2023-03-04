import React from 'react';
import { StyleSheet } from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';

const CustomDropdown = ({
  data,
  value,
  placeholder,
  labelField,
  valueField,
  onChange,
  style,
  placeholderStyle,
  selectedTextStyle,
  iconStyle,
  itemTextStyle,
  maxHeight,
}) => {
  return (
    <Dropdown
      style={styles.dropdown}
      placeholderStyle={styles.placeholderStyle}
      selectedTextStyle={styles.selectText}
      iconStyle={styles.icon}
      data={data}
      itemTextStyle={itemTextStyle}
      maxHeight={maxHeight}
      labelField={labelField}
      valueField={valueField}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default CustomDropdown;
 const styles = StyleSheet.create({
  dropdown:{
    borderWidth: 1,
    height: 50,
    width: '100%',
    borderRadius: 5,
    borderColor: '#E5E4E2',
    backgroundColor: '#fefbfc',
    color: '#313131',
    marginTop:20
  },
  placeholderStyle:{marginLeft: 10, color: '#313131'},
  selectText:{marginLeft: 10, color: '#313131'},
  icon:{marginRight: 25},
  textStyle:{color:"black"},
})
