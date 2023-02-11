/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
// import { loginUser } from '@/actions/UserActions';
import {lock, login, auth, backArrow, mail} from '../../assets';
import {confirmOTP, resendOtp, forgotPassword} from '../../actions/UserActions';
import {Button, TextField} from '../../components';
import {NAVIGATION} from '../../constants';
// import OTPInputView from 'twotalltotems/react-native-otp-input'
import OTPInputView from '@twotalltotems/react-native-otp-input';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
// import { InitiateNotification } from '@/test-utils/notificationManager';
// import * as regex from '@/test-utils/regex';
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
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './VerifyEmail.styles';
import CodeInput from 'react-native-confirmation-code-input';
import {sub} from 'react-native-reanimated';
import {RFValue} from 'react-native-responsive-fontsize';
// import {useNavigation} from '@react-navigation/native';
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

  // console.log("verify email data", email)

  // const { route } = props;
  console.log('routedataisssss', route);
  const {email} = route.params;
  const {type} = route.params;

  // const navigation = useNavigation();
  const dispatch = useDispatch();

  let OTPLoader = useSelector(state => state.user.isOtpMatchRequest);

  const submitPressed = () => {
    // navigation.navigate('createNewPassword')
    if (value && value.length == 0) {
      Alert.alert('Please enter a otp');
      return;
    }
    if (value && value.length < 6) {
      Alert.alert('OTP must be of 6 characters');
      return;
    } else {
      //  {type?( navigation.navigate('createNewPassword');
      //  // navigation.navigate('Dahbord');
      //  dispatch(
      //      confirmOTP({otp: value}, cb => {
      //      console.log("otp cb", cb, otp)
      //      if (cb != false)
      //        if (cb.code == 200) {
      //        }
      //    }),
      //  );):(
      //   navigation.navigate('createNewPassword');
      //  // navigation.navigate('Dahbord');
      //  dispatch(
      //      confirmOTP({otp: value}, cb => {
      //      console.log("otp cb", cb, otp)
      //      if (cb != false)
      //        if (cb.code == 200) {
      //        }
      //    }),
      //  );)}
      if (type) {
        // navigation.navigate('createNewPassword');
        // navigation.navigate('Dahbord');
        dispatch(
          confirmOTP({otp: value, type: 'forgot'}, cb => {
            if (cb.responseCode == 200) {
              navigation.navigate('createNewPassword');
            }
            console.log('otp cb', cb, otp);
            // if (cb != false)
            //   if (cb.code == 200) {
            //     navigation.navigate('createNewPassword');
            //   }
          }),
        );
      } else {
        // navigation.navigate('Dahbord');
        dispatch(
          confirmOTP({otp: value}, cb => {
            console.log('otp cb', cb, otp);
            if (cb.responseCode == 200) {
              //  navigation.navigate('Dashbord');
            }
            // if (cb != false)
            //   if (cb.code == 200) {
            //   }
          }),
        );
      }
      // navigation.navigate('createNewPassword');
      // // navigation.navigate('Dashbord');
      // dispatch(
      //     confirmOTP({otp: value}, cb => {
      //     console.log("otp cb", cb, otp)
      //     if (cb != false)
      //       if (cb.code == 200) {
      //       }
      //   }),
      // );

      // navigation.navigate('Dahbord');
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
          {/* {type?(<Text>Hello</Text>):(<Text>Bye</Text>)} */}
          <Text style={styles.yourEmailText}>your {email}</Text>

          <View style={styles.codeFieldView}>
            <CodeField
              ref={ref}
              {...propss}
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
          <View style={styles.bottomTextView}>
            <Text style={styles.textBottom}>I didn't receive code.</Text>
            <TouchableOpacity
              onPress={
                () => resendOtpSubmit()
                // submitPressed()
                // console.log("button")
              }>
              <Text style={styles.resendText}>Resend code</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonView}>
            <Button
              onPress={() => {
                submitPressed();
                // console.log("button")
              }}
              textStyle={styles.buttonText}
              title={'send'}
              // isLoading={loginLoader}
              // disabled={loginLoader}
            />
          </View>

          {/* <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 20,
              marginBottom: 35,
              marginRight:"5%",
              marginLeft:"-5%"
            }}>
            <TouchableOpacity 
            // onPress={() => navigation.navigate('VerifyEmail')}
            onPress={() => {
                        navigation.navigate('createNewPassword');
                      }}
              style={{
                backgroundColor: '#FE4D4D',
                height: 50,
                width: '100%',
                borderRadius: 10,
              }}>
              <Text
                style={{
                  alignSelf: 'center',
                  color: 'white',
                  marginTop: 13,
                  fontSize: 16,
                  fontWeight: '800',
                }}>
                Submit
              </Text>
            </TouchableOpacity>
          </View> */}

          {/* <View style={{justifyContent:"center", alignItems:"center", marginTop:"10%"}}>
            <TouchableOpacity style={{backgroundColor: ""}}>
              <Text>Sumbit</Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>

    // <KeyboardAwareScrollView
    //   style={{flex: 1, backgroundColor: globalColors.white}}
    //   showsVerticalScrollIndicator={false}
    //   keyboardShouldPersistTaps="handled"
    //   scrollEnabled={false}>
    //   <View
    //     style={{
    //       position: 'relative',
    //       width: 375,
    //       height: 835,
    //       background: '#FFFFFF',
    //       borderRadius: 20,
    //     }}>
    //     <Image
    //      source={require('../../assets/Icons/otp.png')}

    //       style={{
    //         position: 'absolute',
    //         width: 304,
    //         height: 226.28,
    //         left: 35,
    //         top: 41,
    //       }}
    //       // resizeMode="contain"
    //     />
    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 207,
    //         height: 41,
    //         left: 20,
    //         top: 304,
    //       }}>
    //       <Text
    //         style={{
    //           fontWeight: 700,
    //           fontSize: 36,
    //           lineHeight: 41,
    //           color: '#313131',
    //         }}>
    //         Enter OTP
    //       </Text>
    //     </View>
    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 294,
    //         height: 40,
    //         left: 20,
    //         top: 294,
    //         // backgroundColor:"red"
    //       }}>
    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //         }}>
    //         A 5 digit code has been sent to
    //       </Text>
    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //           marginTop: 17,
    //         }}>
    //         your email
    //         {/* user123@mail.com */}
    //       </Text>
    //     </View>
    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 294,
    //         height: 40,
    //         left: 20,
    //         top: 390,
    //         // backgroundColor:"red"
    //       }}>
    //       <CodeField
    //         ref={ref}
    //         {...propss}
    //         // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
    //         value={value}
    //         onChangeText={setValue}
    //         cellCount={CELL_COUNT}
    //         rootStyle={styles.codeFieldRoot}
    //         keyboardType="number-pad"
    //         textContentType="oneTimeCode"
    //         renderCell={({index, symbol, isFocused}) => (
    //           <Text
    //             key={index}
    //             style={[styles.cell, isFocused && styles.focusCell]}
    //             onLayout={getCellOnLayoutHandler(index)}>
    //             {symbol || (isFocused ? <Cursor /> : null)}
    //           </Text>
    //         )}
    //       />
    //     </View>
    //     {/* <CodeInput
    //          ref={otpRef}
    //           secureTextEntry
    //           compareWithCode='123456'
    //           // autoFocusOnLoad={false}
    //           activeColor='rgba(49, 180, 4, 1)'
    //           // activeColor='rgb(234,234,237)'
    //           inactiveColor='rgb(234,234,237)'
    //           autoFocus={false}
    //           ignoreCase={true}
    //           inputPosition='center'
    //           size={50}
    //           codeLength={6} */}
    //     {/* // onTextChange={(e) => doSmoething(e.value)}
    //           // onFulfill={(code) => {
    //           //   setOTP(code);
    //           //   // if(code.length == 6){
    //           //   // submitPressed(code);
    //           //   // }
    //           //   submitPressed(code);
    //           //   // doSmoething(123456)
    //           // }}
    //           onFulfill={(code) => alert('hii<<',code)}
    //           // onFulfill={this.submitPressed}

    //           // containerStyle={{ marginTop: 30 }}
    //           codeInputStyle={{ borderWidth: 2 }}
    //               />

    //         <View
    //         style={{
    //           width: '100%',
    //           borderWidth: 0,
    //           height: 50,
    //           justifyContent: 'center',
    //           marginVertical: RFValue(15),
    //         }}
    //       >
    //         <OTPInputView
    //           ref={otpRef}
    //           style={{ width: '100%', height: '20%' }}
    //           pinCount={6}
    //           // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
    //           // onCodeChanged = {code => { this.setState({code})}}
    //           autoFocusOnLoad={false}
    //           codeInputFieldStyle={{
    //             borderWidth: 0,
    //             borderBottomWidth: 1,
    //             color: 'black',
    //             borderColor: '#EC008C',
    //             fontSize: RFValue(24),
    //           }}
    //           codeInputHighlightStyle={{
    //             borderColor: '#EC008C',
    //           }}
    //           onCodeFilled={(code) => {
    //             setOTP(code);
    //             submitPressed(code);
    //           }}
    //         />
    //       </View>

    //     <View
    //       style={{
    //         position: 'absolute',
    //         height: 50,
    //         width: 294,
    //         left: 24,
    //         top: 484,
    //         flexDirection: 'row',
    //       }}>
    //       <Text style={{lineHeight: 22, fontWeight: 400, fontSize: 14}}>
    //         I didn't receive code. Resend code
    //       </Text>
    //       <TouchableOpacity
    //         onPress={() => navigation.navigate('ForgetPassword')}>
    //         {/* onPress={() => setSelection(!isSelected)}>  */}
    //         <Text
    //           style={{
    //             marginLeft: 30,
    //             fontSize: 14,
    //             fontWeight: 500,
    //             color: 'black',
    //           }}>
    //           Resend code
    //         </Text>
    //       </TouchableOpacity>
    //     </View>
    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 530,
    //         backgroundColor: '#FE4D4D',
    //         borderRadius: 8,
    //       }}>
    //       <Button
    //         onPress={() => {
    //           submitPressed();
    //           // submitLogin();
    //         }}
    //         // onPress={() => {
    //         //   navigation.navigate('createNewPassword');
    //         // }}
    //         style={{}}
    //         textStyle={styles.buttonText}
    //         title={'Continue'}
    //         // isLoading={loginLoader}
    //         // disabled={loginLoader}
    //       />
    //     </View>
    //   </View>
    // </KeyboardAwareScrollView>
  );
};
export default VerifyEmail;
