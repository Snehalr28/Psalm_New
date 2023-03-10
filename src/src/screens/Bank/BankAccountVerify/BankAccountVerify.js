import React, {useState} from 'react';
import {SafeAreaView, Text, View, Image,} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { styles } from './BankAccountVerify.styles';
import {Button} from "../../../components/Button"
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
          <Text style={styles.upperText}>
            A Verification Code has been sent to
          </Text>
          <Text style={styles.upperTextEmail}>
            Cameron.w123@gmail.com
          </Text>
        </View>

        <View style={styles.codeField}>
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
        <View style={styles.textView}>
          <Text style={styles.DontReceive}>I didn't receive code.</Text>
          <Text style={styles.resendText}> Resend code</Text>
        </View>

        <View style={styles.buttonView}>
            <Button
              onPress={() => {
                navigation.navigate('Add Bank Account');
                console.log('button');
              }}
              title={'Verify & Proceed'}
            />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default BankAccountVerify;

