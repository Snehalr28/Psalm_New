import {lock, login, auth, backArrow, mail} from '../../assets';
import {confirmOTP, resendOtp, forgotPassword} from '../../actions/UserActions';
import {Button, TextField} from '../../components';
import {NAVIGATION} from '../../constants';
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import {globalColors} from '../../theme/globalColors';
import React, {useRef, useState, useEffect} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './VerifyEmail.styles';
import CodeInput from 'react-native-confirmation-code-input';
import {sub} from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';

export const VerifyEmail = ({route, navigation}) => {
  const [otp, setOTP] = useState();
  const otpRef = useRef();
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

  let OTPLoader = useSelector(state => state.user.isOtpMatchRequest);

  const submitPressed = () => {
    if (value && value.length == 0) {
      Alert.alert('Please enter a otp');
      return;
    }
    if (value && value.length < 6) {
      Alert.alert('OTP must be of 6 characters');
      return;
    } else {
      if (type) {
        dispatch(
          confirmOTP({otp: value, type: 'forgot'}, cb => {
            if (cb.responseCode == 200) {
              navigation.navigate('createNewPassword');
            }
            console.log('otp cb', cb, otp);
          }),
        );
      } else {
        dispatch(
          confirmOTP({otp: value}, cb => {
            console.log('otp cb', cb, otp);
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
