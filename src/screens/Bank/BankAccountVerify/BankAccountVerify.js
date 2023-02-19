// import React, {useEffect} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// export const BankVerify= props => { 
//   const navigation = useNavigation(); 
//   return (
//    <View>
//     <Text>BankVerify Screen</Text>
//    </View>
//   );
// }
// export default BankVerify;



import React, {useState} from 'react';
import {SafeAreaView, Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { styles } from './BankAccountVerify.styles';
const CELL_COUNT = 6;

const BankAccountVerify = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <SafeAreaView style={styles.root}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.loginImage}>
       
          <Image  source={require('../../../assets/assets/bank.png')}/>
        </View>

        <View style={{marginTop: 15}}>
          <Text style={{fontSize: 14, fontWeight: '400'}}>
            A Verification Code has been sent to
          </Text>
          <Text style={{fontSize: 14, fontWeight: '400'}}>
            Cameron.w123@gmail.com
          </Text>
        </View>

        <View style={{marginLeft: 10, marginRight: 10}}>
          <CodeField
            ref={ref}
            {...props}
            // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
            value={value}
            onChangeText={setValue}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFieldRoot}
            keyboardType="number-pad"
            textContentType="oneTimeCode"
            renderCell={({index, symbol, isFocused}) => (
              <Text
                key={index}
                style={[styles.cell, isFocused && styles.focusCell]}
                onLayout={getCellOnLayoutHandler(index)}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 20, marginLeft: 10}}>
          <Text style={{color: 'black'}}>I didn't receive code.</Text>
          <Text style={{color: 'black', fontWeight: '600'}}> Resend code</Text>
        </View>

        <View style={{marginTop: '42%'}}>
          <TouchableOpacity
            onPress={e => {
            //   handleSubmitButton(e);
              navigation.navigate('Add Bank Account');
            }}
            style={{
              flex: 1,
              height: 45,
              width: '100%',
              backgroundColor: '#FE4D4D',
              justifyContent: 'center',
              // alignItems: 'flex-end',

              borderColor: '#FE4D4D',
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Verify & Proceed
            </Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BankAccountVerify;

