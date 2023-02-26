import {confirmOTP, resendOtp} from '../../actions/UserActions';
import {Button} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch} from 'react-redux';
import {styles} from './VerifyEmail.styles';

export const VerifyEmail = ({route, navigation}) => {
  const CELL_COUNT = 6;
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [propss, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  console.log('routedataisssss', route);
  const {email} = route.params;
  const {type} = route.params;

  const dispatch = useDispatch();

  const submitPressed = () => {
    if (value && value.length == 0) {
      alert('Please enter a otp');
      return;
    }
    if (value && value.length < 6) {
      alert('OTP must be of 6 characters');
      return;
    } else {
      if (type) {
        dispatch(
          confirmOTP({otp: value, type: 'forgot'}, cb => {
            if (cb.responseCode == 200) {
              navigation.navigate('createNewPassword');
            }
            console.log('otp cb', cb);
          }),
        );
      } else {
        dispatch(
          confirmOTP({otp: value}, cb => {
            console.log('otp cb', cb);
            if (cb.responseCode == 200) {
              //  navigation.navigate('Dashbord');
            }
          }),
        );
      }
    }
  };

  const resendOtpSubmit = () => {
    dispatch(
      resendOtp({}, cb => {
        if (cb != false)
          if (cb.responseCode == 200) {
            Alert.alert('Otp sent successfully');
          }
      }),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.mainImage}>
          <Image source={require('../../assets/assets/OTP1.png')} />
        </View>

        <View style={styles.otpView}>
          <Text style={styles.otpText}>Enter OTP</Text>
          <Text style={styles.otpDigitText}>
            A 6 digit code has been sent to
          </Text>

          <Text style={styles.yourEmailText}>{email}</Text>

          <View style={styles.codeFieldView}>
            <CodeField
              ref={ref}
              {...propss}
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
          <View style={styles.bottomTextView}>
            <Text style={styles.textBottom}>I didn't receive code.</Text>
            <TouchableOpacity onPress={() => resendOtpSubmit()}>
              <Text style={styles.resendText}>code Resend</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <Button
              onPress={() => {
                submitPressed();
              }}
              textStyle={styles.buttonText}
              title={'Send'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default VerifyEmail;
