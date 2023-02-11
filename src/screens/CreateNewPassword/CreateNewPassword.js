/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
// import { loginUser } from '@/actions/UserActions';
import {lock, login, auth, backArrow} from '../../assets';
import {resetPassword} from '../../actions/UserActions';
import {Button, TextField} from '../../components';
import {NAVIGATION} from '../../navigation';
// import { InitiateNotification } from '@/test-utils/notificationManager';
// import * as regex from '@/test-utils/regex';
import {globalColors} from '../../theme/globalColors';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  Image,
  TextInput,
  ImageBackground,
  Platform,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-simple-toast';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../../screens/CreateNewPassword/CreateNewPassword.styles';
import {ScrollView} from 'react-native-gesture-handler';
import {TextInput as MaterialTextInput, HelperText} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';

// import {useNavigation} from '@react-navigation/native';
export const CreateNewPassword = ({route, navigation}) => {
  const [password, setPassword] = useState('');
  const [newpassword, setNewpassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [newPasswordError, setNewPasswordError] = useState(false);
  const [show, setShow] = useState(true);
  const [shownext, setShowNext] = useState(true);
  const [empty, setEmpty] = useState(false);

  const [checkPassword, setCheckPassword] = useState(false);
  const [checkNewPassword, setCheckNewPassword] = useState(false);
  // const {navigation, route} = props;
  // const navigation = useNavigation();
  const dispatch = useDispatch();
  let forgotUserId = useSelector(state => state.user.forgotUser);
  let passwordResetRequest = useSelector(
    state => state.user.passwordResetRequest,
  );
  const submitPressed = () => {
    if (password.length < 8) {
      // alert('Password must be of 8 or more characters');
      // Toast.show('Password must be of 8 or more characters',10000);
    } else if (newpassword.length < 8) {
      // alert('Confirm password must be of 8 or more characters');
      // Toast.show('Confirm password must be of 8 or more characters',10000);
    } else if (newpassword != password) {
      alert('Password & confirm password does not match');
      // Toast.show('Password & confirm password does not match',10000);
    } else {
      console.log('password, newpassword', password, newpassword);
      dispatch(
        resetPassword(
          {
            password: newpassword,
          },
          cb => {
            if (cb != false) {
              if (cb.responseCode == 200) {
                console.log('login called successfullly');
                // Toast.show('Password change successfully',10000);
                Alert.alert('Password change successfully');
                navigation.navigate('Login');
                // navigation.goBack();
                console.log('navigate to login');
              }
            }
          },
        ),
      );
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
  const passwordChange = text => {
    setPassword(text);
    validatePassword(text);
  };
  const validateNewPassword = password => {
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
    if (reg.test(password) === false) {
      setCheckNewPassword(true);
      setEmpty(false);
    } else {
      setEmpty(false);
      // setEmailError(false);
      setCheckNewPassword(false);
    }
  };
  const newPasswordChange = text => {
    setNewpassword(text);
    validateNewPassword(text);
  };
  const handleSavePassword = () => {
    if (password === '' && newpassword === '') {
      // Alert.alert("Email can not be blank")
      setEmpty(true);
    } else {
      setEmpty(false);
    }

    // if (password === '') {
    //   // Alert.alert("Password can not be blank")
    //   setPasswordError(true);
    // } else {
    //   setPasswordError(false);
    // }
    // if (newpassword === '') {
    //   // Alert.alert("Password can not be blank")
    //   setNewPasswordError(true);
    // } else {
    //   setNewPasswordError(false);
    // }
    // if (!emailError && !passwordError) {
    //   dispatch(
    //     loginUser({
    //       email: email,
    //       password: password,
    //       role: 1,
    //     }),
    //   );
    //   navigation.navigate('Temp');
    // }
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setNewpassword('');
        setPassword('');
        setShow(true)
        setShowNext(true)
        setEmpty(false)
        setCheckPassword(false)
        setCheckNewPassword(false)
      };
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View>
          <View style={styles.resetImageView}>
            <Image source={require('../../assets/assets/Reset1.png')} />
          </View>
          <View style={styles.resetView}>
            <Text style={styles.resetText}>Reset</Text>
            <Text style={styles.passwordText}>Password</Text>
            <Text style={styles.newPasswordText}>
              Your new password must be different
            </Text>
            <Text style={styles.newPasswordText}>
              from previous used passwords.
            </Text>
          </View>
          <View style={styles.inputfieldView}>
            {/* <TextInput
              style={styles.inputPassword}
              placeholder="*********"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              placeholderTextColor="grey"
              // autoFocus={true}
              maxLength={14}
              onChangeText={e => setPassword(e)} // set state : setPhone
              value={password} // set value : phone
            /> */}
            <MaterialTextInput
              placeholder="*********"
              mode="outlined"
              label={'Password'}
              outlineColor="grey"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              secureTextEntry={show}
              // error={passwordError}
              value={password}
              // onChangeText={e => emailChange(e)}
              onChangeText={passwordChange}
            />

            {empty ? (
              <Text style={{color: 'red'}}>Password is required</Text>
            ) : null}
            {checkPassword ? (
              <Text style={{color: 'red'}}>
                Password must contains Special Characters,[A-Z],[a-z],[0-9]
              </Text>
            ) : null}
            {/* <HelperText type="error" visible={passwordError}>           
             Must be at least 8 characters.
            </HelperText>  */}
            <View style={styles.eyeIconView}>
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

            {/* <View style={styles.eyeIconView}>              
            <Image
                style={styles.eyeIconImage}
                source={require('../../assets/assets/eyeicon.png')}
              />            
              </View>             */}
            {/* <Text style={styles.CharacterText}>              
              Must be at least 8 characters.
            </Text> */}
            {/* <View /> */}
          </View>
          <View style={styles.viewInputConfirm}>
            {/* <TextInput
              style={styles.inputConfirm}
              placeholder="Confirm Password"
              placeholderTextColor="grey"
              autoCapitalize="none"
              underlineColorAndroid="transparent"
              // autoFocus={true}
              maxLength={14}
              value={newpassword}
              onChangeText={text => {
                setNewpassword(text);
              }}
            /> */}
            <MaterialTextInput
              placeholder="*********"
              mode="outlined"
              label={'Confirm Password'}
              outlineColor="grey"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              // error={newPasswordError}
              secureTextEntry={shownext}
              value={newpassword}
              // onChangeText={e => emailChange(e)}
              onChangeText={newPasswordChange}
            />
            {empty ? (
              <Text style={{color: 'red'}}>Password is required</Text>
            ) : null}
            {checkNewPassword ? (
              <Text style={{color: 'red'}}>
                Password must contains Special Characters,[A-Z],[a-z],[0-9]
              </Text>
            ) : null}

            {/* <HelperText type="error" visible={newPasswordError}>            
            Both passwords must match.
            </HelperText>   */}

            <View style={styles.viewLockImage}>
              <TouchableOpacity onPress={() => setShowNext(!shownext)}>
                {shownext ? (
                  <Image
                    style={styles.lockImage}
                    source={require('../../assets/Icons/lock.png')}
                  />
                ) : (
                  <Image
                    style={styles.lockImage}
                    source={require('../../assets/Icons/lock.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            {/* <View style={styles.viewLockImage}>              
            <Image
                style={styles.lockImage}
                source={require('../../assets/Icons/lock.png')}
              />            
              </View>             */}
            {/* <Text style={styles.matchText}>Both passwords must match.</Text> */}
            {/* <View /> */}
          </View>
          <View style={styles.saveButton}>
            <Button
              onPress={() => {
                submitPressed();
                handleSavePassword();
                // console.log("button")
              }}
              textStyle={styles.buttonText}
              title={'Save Password'}
              // isLoading={loginLoader}
              // disabled={loginLoader}
            />
          </View>
          {/* <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 35,
            marginBottom: 35,
            marginLeft: '10%',
            marginRight: '10%',
          }}>          <TouchableOpacity
            onPress={() => navigation.navigate('VerifyEmail')}
            style={{
              backgroundColor: '#FE4D4D',
              height: 50,
              width: '100%',
              borderRadius: 10,
            }}>            <Text
              style={{
                alignSelf: 'center',
                color: 'white',
                marginTop: 13,
                fontSize: 16,
                fontWeight: '800',
              }}>              Save Password
            </Text>          
            </TouchableOpacity>        
            </View> */}
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
    // <KeyboardAwareScrollView
    //   style={{flex: 1, backgroundColor: globalColors.white}}
    //   showsVerticalScrollIndicator={false}
    //   keyboardShouldPersistTaps="handled"
    //   scrollEnabled={false}>    //   <View
    //     style={{
    //       position: 'relative',
    //       width: 375,
    //       height: 800,
    //       background: '#FFFFFF',
    //       borderRadius: 20,
    //     }}>    //     <Image
    //        source={require('../../assets/Icons/reset.png')}
    //       style={{
    //         position: 'absolute',
    //         width: 324,
    //         height: 242,
    //         left: 25,
    //         top: 5,
    //       }}
    //       // resizeMode="contain"
    //     />    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 182,
    //         height: 82,
    //         left: 20,
    //         top: 300,
    //       }}>    //       <Text
    //         style={{
    //           fontWeight: 700,
    //           fontSize: 36,
    //           lineHeight: 41,
    //           color: '#313131',
    //         }}>    //         Reset Password
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 310,
    //         height: 40,
    //         left: 20,
    //         top:320,
    //         // backgroundColor:"red"
    //       }}>    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //         }}>    //         Your new password must be different
    //       </Text>    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //           marginTop: 15,
    //         }}>    //         from previous used passwords.
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 430,
    //         // backgroundColor:"red",
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //       source={require('../../assets/assets/eyeicon.png')}
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
    //         onChangeText={e => setPassword(e)} // set state : setPhone
    //         value={password} // set value : phone
    //         autoCapitalize="none"
    //         // editable={passwordEditable} // stop editing if false
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 197,
    //         height: 20,
    //         left: 20,
    //         top: 435,
    //         // backgroundColor:"red"
    //       }}>    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //         }}>    //         Must be at least 8 characters.
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 530,
    //         // backgroundColor:"red",
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //        source={require('../../assets/Icons/lock.png')}
    //         style={{
    //           position: 'absolute',
    //           width: 25,
    //           height: 25,
    //           marginLeft: 300,
    //           marginTop: 10,
    //         }}
    //       />    //       <TextInput
    //         style={{}}
    //         placeholder="Confirm Password"
    //         onChangeText={e => setNewpassword(e)}
    //         value={newpassword}
    //         // editable={passwordEditable} // stop editing if false
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 191,
    //         height: 20,
    //         left: 20,
    //         top: 540,
    //         // backgroundColor:"red"
    //       }}>    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //         }}>    //         Both passwords must match.
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 650,
    //         backgroundColor: '#FE4D4D',
    //         borderRadius: 8,
    //       }}>    //       <Button
    //         // onPress={() => navigation.navigate('VerifyEmail')}
    //         // onPress={() => console.log(" Reset password called")}
    //         onPress={() => {
    //          submitPressed()
    //         }}
    //         style={{}}
    //         textStyle={styles.buttonText}
    //         title={'Save Password'}
    //         // isLoading={loginLoader}
    //         // disabled={loginLoader}
    //       />    //     </View>    //   </View>    // </KeyboardAwareScrollView>  );
  );
};
export default CreateNewPassword;
