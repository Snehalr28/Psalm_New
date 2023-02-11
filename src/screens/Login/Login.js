import {loginUser} from '../../actions/UserActions';
// import {lock, login, auth, forget, mail} from '../../assets';
import {Button, TextField} from '../../components';
import {NAVIGATION} from '../../constants';
// import { InitiateNotification } from '@/test-utils/notificationManager';
import * as regex from '../../test-utils/regex';
import {globalColors} from '../../theme/globalColors';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Alert,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './Login.styles';
import Toast from 'react-native-simple-toast';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';

// import CommonTextInput from '../../components/CommonTextInput';
import {TextInput as MaterialTextInput, HelperText} from 'react-native-paper';
export const Login = props => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [show, setShow] = useState(true);
  const [passwordErrorEmpty, setPasswordErrorEmpty] = useState(false);
  const [emailErrorEmpty, setEmailErrorEmpty] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [checkemail, SetCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [menteementor, setMenteeMentor] = useState('1');
  const [change, setChange] = useState(false);
console.log("login data isss",email, password,show,empty,menteementor)
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // const [show, setShow] = useState(true);
  // let { navigation } = props;
  const navigation = useNavigation();
  console.log(props, 'props');
  const dispatch = useDispatch();
  let loginLoader = useSelector(state => state.loaders.loading);
  console.log('loginloaderstate is', loginLoader);
  // const fcmToken = useSelector((state) => state.user.fcmToken);
  // const fcmToken1 = useSelector((state) => state.user);
  // const fetchToken = async (response) => {
  //   await InitiateNotification((fcmToken) => {
  //     response(fcmToken);
  //   });
  // };
  const submitLogin = () => {
    console.log('Done', email, password);
    if (!regex.validateEmail(email)) {
      console.log('invalid email');
      // alert('Please enter a valid email id.');
      // Toast.show('Please enter a valid email id.',10000);
    } else if (password.length < 8) {
      console.log('invalid password');
      // alert('Password must be of 8 or more characters.');
      // Toast.show('Password must be of 8 or more characters.',10000);
    } else {
      console.log('else called');
      // fetchToken((response) => {
      // navigation.navigate('Dashboard')
      dispatch(
        loginUser({
          email: email,
          password: password,
          role: menteementor,
          // email: 'aamit@yopmail.com',
          // password:'12345678'
        }),
      );
      // });
    }
  };
  const colors = {
    true: 'green',
    false: 'black',
  };

  const loginButtonPressed = () => {
    if (email === '' && password === '') {
      // Alert.alert("Email can not be blank")
      setEmpty(true);
    } else {
      setEmpty(false);
    }

    // if (email === '') {
    //   // Alert.alert("Email can not be blank")
    //   setEmailErrorEmpty(true);
    // } else {
    //   setEmailErrorEmpty(false);
    // }
    // if (password === '') {
    //   // Alert.alert("Password can not be blank")
    //   setPasswordErrorEmpty(true);
    // } else {
    //   setPasswordErrorEmpty(false);
    // }
    // if (!emailError && !passwordError) {

    //             dispatch(
    //               loginUser({
    //                 email: email,
    //                 password: password,
    //                 role: 1,
    //                 // email: 'aamit@yopmail.com',
    //                 // password:'12345678'
    //               }),
    //             );

    //   // navigation.navigate('Register');
    // }
  };

  const emailChange = text => {
    setEmail(text);
    validateEmail(text);
  };
  const passwordChange = text => {
    setPassword(text);
    validatePassword(text);
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

  const validatePassword = password => {
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
    if (reg.test(password) === false) {
      setCheckPassword(true);
      setEmpty(false);
      // setEmailError(true);
    } else {
      setEmpty(false);
      // setEmailError(false);
      setCheckPassword(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setEmail('')
        setPassword('')
        setShow(true)
        setEmpty(false)
        SetCheckEmail(false)
        setCheckPassword(false)
      };
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={{flex: 1}}>
          <View style={styles.loginImage}>
            <Image source={require('../../assets/assets/Login1.png')} />
          </View>
          <View style={styles.textView}>
            <Text style={styles.loginText}>Let’s Log in</Text>
            <Text style={{color: 'black'}}>
              Welcome Back, you’ve been missed!
            </Text>
            <View style={styles.buttonViewnew}>
              <TouchableOpacity
                onPress={() => {
                  setChange(false);
                  setMenteeMentor('1');
                }}
                style={change ? styles.mentorButton1 : styles.mentorButton}>
                <Text style={change ? styles.mentorText1 : styles.mentorText}>
                  Mentor
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={change ? styles.menteeButton1 : styles.menteeButton}
                onPress={() => {
                  setChange(true);
                  setMenteeMentor('2');
                }}>
                {/* onPress={() => navigation.navigate('RegisterM')}> */}
                <Text style={change ? styles.menteeText1 : styles.menteeText}>
                  Mentee
                </Text>
              </TouchableOpacity>
            </View>
          </View>
         
          <View style={styles.emailView}>
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
            />
            {/* {(empty=="true" && emailError=="false" )? (<Text>empty</Text>):(<Text>Not Valid email</Text>)} */}
            {empty ? (
              <Text style={{color: 'red'}}>Email is required</Text>
            ) : null}
            {checkemail ? (
              <Text style={{color: 'red'}}>Email must be a valid email address</Text>
            ) : null}
            {/* {empty ? (<HelperText type="error" visible={emailError}>
              Please enter valid email address!
            </HelperText>):
            (<HelperText type="error" visible={emailErrorEmpty}>
              Empty Email!
            </HelperText>)} */}
            <View style={styles.emailIconView}>
              <Image
                style={styles.emailIcon}
                source={require('../../assets/assets/emailicon.png')}
              />
            </View>
            {/* <View /> */}
          </View>
          <View style={styles.passwordView}>
            {/* <CommonTextInput
              placeholder=" Password"
              placeholderTextColor="grey"
              onChangeText={e => setPassword(e)}
              value={password}
              secureTextEntry={true}
              // secureTextEntry={show}
            /> */}
            <MaterialTextInput
              style={{borderRadius: 10}}
              placeholder="Password"
              mode="outlined"
              label={'Password'}
              autoCapitalize="none"
              outlineColor="grey"
              activeOutlineColor="black"
              autoCorrect={false}
              secureTextEntry={show}
              // error={passwordError}
              value={password}
              onChangeText={passwordChange}
            />
            {empty ? (
              <Text style={{color: 'red'}}>Password is required</Text>
            ) : null}
            {checkPassword ? (
              <Text style={{color: 'red'}}>
                Password must be at least 6 characters
              </Text>
            ) : null}

            {/* {passwordError?( <HelperText type="error" visible={passwordError}>
                 Password Must Contain Letter !
               </HelperText>):( <HelperText type="error" visible={passwordErrorEmpty}>
              Empty Password
             </HelperText>)} */}

            <View style={styles.eyeImageView}>
              <TouchableOpacity onPress={() => setShow(!show)}>
                {show ? (
                  <Image
                    style={{height: 20, width: 20, marginTop: 20}}
                    source={require('../../assets/assets/eyeicon.png')}
                  />
                ) : (
                  <Image
                    style={{height: 20, width: 20, marginTop: 20}}
                    source={require('../../assets/assets/eye.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
            {/* <View style={styles.eyeImageView}> */}
            {/* <TouchableOpacity≥
            //  onPress={() => setShow(!show)}> */}
            {/* <Image
                style={{height: 20, width: 20, marginTop: 15}}
                source={require('../../assets/assets/eyeicon.png')}
              /> */}
            {/* </TouchableOpacity> */}
            {/* </View> */}
            {/* <View /> */}
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginBottom: 20,
              marginTop: 20,
              justifyContent: 'space-around',
              marginLeft: '7%',
              marginRight: '8%',
            }}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <CheckBox
                style={{
                  color: 'black',
                  borderWidth: 5,
                  borderColor: 'red',
                  marginTop: -5,
                }}
                disabled={false}
                tintColors={colors}
                // thickness={2}
                // disabled={false}
                // checkBoxColor={"red"}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <View style={{marginLeft: -7}}>
                <Text
                  style={{color: 'black', paddingHorizontal: 6, fontSize: 10}}>
                  keep me signed in
                </Text>
              </View>
            </View>

            <View style={{}}>
              <Text
                onPress={() => navigation.navigate('ForgetPassword')}
                style={{
                  color: 'black',
                  paddingHorizontal: 6,
                  fontSize: 10,
                  fontWeight: 'bold',
                }}>
                Forgot Password?
              </Text>
            </View>
          </View>

          {/* <View style={styles.bottomTextView}>
            <View style={styles.CheckBoxView}>
              <CheckBox
                // style={{color:"black", borderWidth:5, borderColor:"red"}}
                disabled={false}
                tintColors={colors}
                // thickness={2}
                // disabled={false}
                // checkBoxColor={"red"}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <Text style={styles.textSigned}>Keep me signed in</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('ForgetPassword')}>
              <Text style={styles.fgtPassword}> Forgot Password?</Text>
            </TouchableOpacity>
          </View> */}

          <View style={styles.bottomButton}>
            <View style={styles.buttonView}>
              <Button
                //  onPress={() => {
                //   navigation.navigate('Register', {
                //     itemId: 86,
                //     otherParam: 'anything you want here',
                //   });
                // }}
                onPress={() => {
                  loginButtonPressed();
                  // navigation.navigate('Temp');
                  submitLogin();
                  console.log('button');
                }}
                textStyle={styles.buttonText}
                title={'Log in'}
                // isLoading={loginLoader}
                // disabled={loginLoader}
              />
            </View>
            {/* <TouchableOpacity onPress={() => {
            submitLogin();
            console.log("button")
          }}
            style={{
              backgroundColor: '#FE4D4D',
              height: 50,
              width: '80%',
              borderRadius: 10,
            }}>            <Text
              style={{
                color: 'black',
                alignSelf: 'center',
                fontSize: 20,
                fontWeight: '800',
                color: 'white',
                marginTop: '2%',
              }}>              Log In
            </Text>          </TouchableOpacity> */}
            <View style={styles.textBottom}>
              <Text style={{color: 'black'}}>Don't have an account yet?</Text>
              <Text
                style={styles.signupText}
                onPress={() => navigation.navigate('Register')}>
                Sign up
              </Text>
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>

    // <KeyboardAwareScrollView
    //   style={{flex: 1, backgroundColor: globalColors.white}}>    //   <View
    //     style={{
    //       position: 'relative',
    //       width: 375,
    //       height: 812,
    //       background: '#FFFFFF',
    //       borderRadius: 20,
    //     }}>    //     <Image
    //       source={require('../../assets/assets/login.png')}
    //       style={{
    //         position: 'absolute',
    //         width: 301,
    //         height: 224.28,
    //         left: 37,
    //         top: 110.53,
    //       }}
    //       // resizeMode="contain"
    //     />    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 207,
    //         height: 41,
    //         left: 20,
    //         top: 385,
    //       }}>    //       <Text
    //         style={{
    //           fontWeight: 700,
    //           fontSize: 36,
    //           lineHeight: 41,
    //           color: '#313131',
    //         }}>    //         Let’s Log in
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 310,
    //         height: 20,
    //         left: 20,
    //         top: 370,
    //         // backgroundColor:"red"
    //       }}>    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //         }}>    //         Welcome Back, you’ve been missed!
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 481,
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
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 542,
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //        source={require('../../assets/assets/eyeicon.png')}
    //         style={{
    //           position: 'absolute',
    //           width: 25,
    //           height: 25,
    //           marginLeft: 300,
    //           marginTop: 10,
    //         }}
    //       />    //       <TextInput
    //         style={{}}
    //         placeholder="Password"
    //         onChangeText={e => setPassword(e)}
    //         value={password}
    //         secureTextEntry={true}
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         left: 20,
    //         top: 606,
    //         flexDirection: 'row',
    //       }}>    //       <CheckBox
    //         disabled={false}
    //         value={toggleCheckBox}
    //         onValueChange={newValue => setToggleCheckBox(newValue)}
    //       />    //       <Text
    //         style={{marginRight: 30, margin: 7, fontWeight: 400, fontSize: 14}}>    //         Keep me signed in
    //       </Text>    //       <TouchableOpacity
    //         onPress={() => navigation.navigate('ForgetPassword')}>    //         {/* onPress={() => setSelection(!isSelected)}>  */}
    //         <Text
    //           style={{
    //             marginLeft: 30,
    //             margin: 7,
    //             fontSize: 14,
    //             fontWeight: 500,
    //             color: 'black',
    //           }}>    //           Forgot Password?
    //         </Text>    //       </TouchableOpacity>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 714,
    //         backgroundColor: '#FE4D4D',
    //         borderRadius: 8,
    //       }}>    //         <Button
    //          onPress={() => {
    //           submitLogin();
    //           // console.log("button")
    //         }}
    //         textStyle={styles.buttonText}cd
    //         title={'Log in'}
    //         isLoading={loginLoader}
    //         // disabled={loginLoader}
    //         />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 239,
    //         height: 22,
    //         left: 67,
    //         top: 770,
    //         flexDirection: 'row',
    //       }}>    //       <Text style={styles.accountText}>Don't have an account yet? </Text>    //       <TouchableOpacity
    //        onPress={() => navigation.navigate('Register')}>    //         <Text style={styles.signUpText}>Sign up</Text>    //       </TouchableOpacity>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 239,
    //         height: 22,
    //         left: 67,
    //         top: 790,
    //         alignItems:"center"
    //       }}>    //     <TouchableOpacity
    //       onPress={() => navigation.navigate('BiometricLogin')}>    //         <Text style={styles.signUpText}>Login With Biometric</Text>    //       </TouchableOpacity>    //       </View>    //   </View>    //  </KeyboardAwareScrollView>  );
  );
};
export default Login;
