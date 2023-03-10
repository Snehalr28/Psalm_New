import {resetPassword} from '../../actions/UserActions';
import {Button, TextField} from '../../components';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Image, Text, TouchableOpacity, View,Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from '../../screens/CreateNewPassword/CreateNewPassword.styles';
import {useFocusEffect} from '@react-navigation/native';
import {TextInputComponent} from '../../components/textInputComponent/TextInputComponent';

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
    if (newpassword.length < 6) {
      // console.log('check password validation');
    } else if (newpassword != password){
      alert('Password & confirm password does not match');

    }else {
      console.log('password, newpassword', password, newpassword);
      try {
        dispatch(
          resetPassword(
            {
              password: newpassword,
            },
            cb => {
              if (cb != false) {
                if (cb.responseCode == 200) {
                  console.log('login called successfullly');
                  alert('Password changed successfully');
                  navigation.navigate('Login');
                  // navigation.goBack();
                  console.log('navigate to login');
                }
              }
            },
          ),
        );
      } catch (error) {
        // alert('Check - Invalid password ');
        console("reset password error",error)
      }
    }

    // else if (newpassword.length < 6) {
    // } else if (newpassword != password) {
    //   alert('Password & confirm password does not match');
    // } else if(!validatePassword(password)){
    //   alert('please enter valid password');
    // }
  };
  const validatePassword = password => {
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
    if (reg.test(password) === false) {
      setCheckPassword(true);
      setEmpty(false);
    } else {
      setEmpty(false);
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
      setCheckNewPassword(false);
    }
  };
  const newPasswordChange = text => {
    setNewpassword(text);
    validateNewPassword(text);
  };
  const handleSavePassword = () => {
    if (password === '' && newpassword === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setNewpassword('');
        setPassword('');
        setShow(true);
        setShowNext(true);
        setEmpty(false);
        setCheckPassword(false);
        setCheckNewPassword(false);
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
              from the previously used passwords.
            </Text>
          </View>
          <View style={styles.inputfieldView}>
            <TextInputComponent
              emailView={styles.inputTextView}
              placeholder={'********'}
              label={'Password'}
              onChangeText={passwordChange}
              value={password}
              empty={empty}
              secureTextEntry={show}
              TextMessageAlert={
                'Password must be at least 6 characters'
              }
              TextMessage={'Password is required'}
              condtionText={{color: 'red'}}
              checkCondtion={checkPassword}
              error={empty}
            />
            <View style={styles.eyeIconView}>
              <TouchableOpacity onPress={() => setShow(!show)}>
                {show ? (
                  <Image
                    style={styles.eyeIconImage}
                    source={require('../../assets/assets/eyeicon.png')}
                  />
                ) : (
                  <Image
                    style={styles.eyeIconImage}
                    // style={{height: 20, width: 20, marginTop: 20}}
                    source={require('../../assets/assets/eye.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.viewInputConfirm}>
            <TextInputComponent
              placeholder={'********'}
              label={'Password'}
              onChangeText={newPasswordChange}
              value={newpassword}
              empty={empty}
              secureTextEntry={shownext}
              TextMessageAlert={
                'Password must be at least 6 characters'
              }
              TextMessage={'Password is required'}
              condtionText={{color: 'red'}}
              checkCondtion={checkNewPassword}
              error={empty}
            />
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
                    source={require('../../assets/Icons/unLock.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
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
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default CreateNewPassword;
