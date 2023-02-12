/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
// import { loginUser } from '@/actions/UserActions';
import {lock, login, auth, backArrow, mail} from '../../assets';
import {Button, TextField} from '../../components';
import {NAVIGATION} from '../../constants';
import {SafeAreaView} from 'react-native-safe-area-context';
// import { InitiateNotification } from '@/test-utils/notificationManager';
import * as regex from '../../test-utils/regex';
import {globalColors} from '../../theme/globalColors';
import {globalFonts} from '../../theme/globalFonts';
import React, {useState} from 'react';
import {
  Image,
  TextInput,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  ScrollView,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './ForgetPassword.styles';
import {forgotPassword} from '../../actions/UserActions';
import {TextInput as MaterialTextInput, HelperText} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';

// import {useNavigation} from '@react-navigation/native';
export const ForgetPassword = ({route, navigation}) => {
  const [email, setEmail] = useState('');
  const [empty, setEmpty] = useState(false);
  const [checkemail, SetCheckEmail] = useState(false);
  console.log('routesdataissssss', route, navigation);
  // console.log('props<<<<',props)
  // let { navigation } = props;
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  let forgotLoader = useSelector(state => state.user.isForgotRequest);
  const submitPressed = async () => {
    console.log('forget password');
    if (!regex.validateEmail(email)) {
      // alert('Please enter a valid email id.');
      // Toast.show('Please enter a valid email id.',10000);
      return;
    }
    try {
      dispatch(
        forgotPassword({email}, cb => {
          console.log('checkEmail<<', email, cb);
          if (cb != false) {
            console.log('check', cb.responseCode);
            if (cb.responseCode == 200) {
              Alert.alert('Otp sent successfully');
              // Toast.show('Otp sent successfully',1000);
              navigation.navigate('VerifyEmail', {
                email: email,
                type: 'forgot',
              });
            }
          }
        }),
      );
    } catch (error) {
      // Toast.show('Mobile no. is invalid',10000);
      Alert.alert('Mobile no. is invalid');
    }
  };
  const [emailError, setEmailError] = useState(false);
  const handleSendButton = () => {
    if (email === '') {
      // Alert.alert("Email can not be blank")
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    //if (!emailError) {
    //   dispatch(
    //     loginUser({
    //       email: email,
    //       password: password,
    //       role: 1,
    //     }),
    //   );
    //   navigation.navigate('VerifyEmail');
    // }
  };
  const validateEmail = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      SetCheckEmail(true);
      setEmpty(false);
      // setEmailError(true);
    } else {
      setEmpty(false);
      // setEmailError(false);
      SetCheckEmail(false);
    }
  };
  const emailChange = text => {
    setEmail(text);
    validateEmail(text);
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setEmail('');
        setEmpty(false)
        SetCheckEmail(false)

      };
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={{flex: 1}}>
          <View style={styles.forgotPasswordImage}>
            <Image source={require('../../assets/assets/Forget1.png')} />
          </View>
          <View style={styles.viewForgot}>
            <Text style={styles.textForgot}>Forgot</Text>
            <Text style={styles.textPassword}>Password?</Text>
            <Text style={styles.sentence}>
              Don’t worry! It happens. Please enter the address associated with
              your account.
            </Text>
          </View>
          <View style={styles.emailView}>
            {/* <TextInput
              style={styles.emailInput}
              placeholder="Email ID"
              autoCapitalize="none"
              placeholderTextColor="grey"
              onChangeText={e => setEmail(e)}
              value={email}
            /> */}
            <MaterialTextInput
              placeholder="Email"
              mode="outlined"
              label={'Email'}
              outlineColor="grey"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              // error={emailError}
              value={email}
              onChangeText={emailChange}
              // onChange={() =>{emailChange()}}
            />
            {empty ? (
              <Text style={{color: 'red'}}>Email is required</Text>
            ) : null}
            {checkemail ? (
              <Text style={{color: 'red'}}>Email must be valid email address</Text>
            ) : null}
            {/* <HelperText type="error" visible={emailError}>             
            Please enter valid email address
            </HelperText>             */}
            <View style={styles.imageView}>
              <Image
                style={styles.emailIcon}
                source={require('../../assets/assets/emailicon.png')}
              />
            </View>
            <View style={styles.submitView}>
              <Button
                onPress={() => {
                  submitPressed();
                  // console.log("button")
                  // navigation.navigate('VerifyEmail')
                  handleSendButton();
                }}
                textStyle={styles.buttonText}
                cd
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
              }}>              
              <TouchableOpacity onPress={() => navigation.navigate('VerifyEmail')}
                style={{
                  backgroundColor: '#FE4D4D',
                  height: 50,
                  width: '100%',
                  borderRadius: 10,
                }}>                <Text
                  style={{
                    alignSelf: 'center',
                    color: 'white',
                    marginTop: 13,
                    fontSize: 16,
                    fontWeight: '800',
                  }}>                  
                  Send
                </Text>              
              </TouchableOpacity>            
              </View> */}
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
    // <KeyboardAwareScrollView
    //   style={{flex: 1, backgroundColor: globalColors.white}}
    //   contentContainerStyle={{flexGrow: 1}}
    //   showsVerticalScrollIndicator={false}
    //   keyboardShouldPersistTaps="handled"
    //   scrollEnabled={true}>    //   <View
    //     style={{
    //       position: 'relative',
    //       width: 375,
    //       height: 871,
    //       background: '#FFFFFF',
    //       borderRadius: 20,
    //     }}>    //     <Image
    //     source={require('../../assets/assets/login.png')}
    //       style={{
    //         position: 'absolute',
    //         width: 299,
    //         height: 224.28,
    //         left: 40,
    //         top: 65,
    //       }}
    //       // resizeMode="contain"
    //     />    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 201,
    //         height: 82,
    //         left: 20,
    //         top: 305,
    //       }}>    //       <Text
    //         style={{
    //           fontWeight: 700,
    //           fontSize: 36,
    //           lineHeight: 41,
    //           color: '#313131',
    //         }}>    //         Forget Password
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 294,
    //         height: 40,
    //         left: 20,
    //         top: 350,
    //         // backgroundColor:"red"
    //       }}>    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //         }}>    //         Don’t worry! It happens. Please enter
    //       </Text>    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //           marginTop: 15,
    //         }}>    //         the address associated with your account.
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 470,
    //         // backgroundColor:"red",
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //       source={require('../../assets/assets/emailicon.png')}
    //         style={{
    //           position: 'absolute',
    //           width: 25,
    //           height: 25,
    //           marginLeft: 300,
    //           marginTop: 10,
    //         }}
    //       />    //       <TextInput
    //         style={{}}
    //         placeholder="Email"
    //         onChangeText={e => setEmail(e)}
    //         value={email}
    //         autoCapitalize="none"
    //         inputmode="none"
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 540,
    //         backgroundColor: '#FE4D4D',
    //         borderRadius: 8,
    //       }}>    //       <Button
    //         // onPress={() => navigation.navigate('VerifyEmail')}
    //         // onPress={() => navigation.navigate("createNewPassword")}
    //         onPress={() => {
    //           submitPressed()
    //         }}
    //         textStyle={styles.buttonText}
    //         title={'Continue'}
    //         // isLoading={loginLoader}
    //         // disabled={loginLoader}
    //       />    //     </View>    //   </View>    // </KeyboardAwareScrollView>  );
  );
};
export default ForgetPassword;
