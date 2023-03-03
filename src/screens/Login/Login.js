import {loginUser} from '../../actions/UserActions';
import {Button} from '../../components';
import * as regex from '../../test-utils/regex';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './Login.styles';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {TextInputComponent} from '../../components/textInputComponent/TextInputComponent';

export const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [emptyPassword,setEmptyPassword]=useState(false);
  const[ emptyEmail ,  setEmptyEmail]=useState(false);
  const [checkemail, SetCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);

  console.log('login data isss', email, password, show, empty);

  const [toggleCheckBox, setToggleCheckBox] = useState(false);

  const navigation = useNavigation();

  const dispatch = useDispatch();
  let loginLoader = useSelector(state => state.loaders.loading);
  console.log('loginloaderstate is', loginLoader);

  const submitLogin = () => {
    console.log('Done', email, password);
    if (!regex.validateEmail(email)) {
      console.log('invalid email');
    } else if (password.length < 8) {
      console.log('invalid password');
    } else {
      console.log('else called');

      dispatch(
        loginUser({
          email: email,
          password: password,
        }),
      );
    }
  };
  const colors = {
    true: 'green',
    false: '#959593',
  };

  const loginButtonPressed = () => {
    if (email === '' && password === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
    // if (email != '' && password === '') {
    //   setEmptyPassword(true);
    // } else {
    //   setEmpty(false);
    // }
    // if (email === '' && password != '') {
    //   setEmptyEmail(true)

    // } else {
    //   setEmpty(false);
    // }
    // if (email === '' && password === '') {
    //   setEmpty(true);
    // } if else(email != '' && password === '') {
    //   setEmpty(true);
    // }if else(email === '' && password != '') {
    //   setEmpty(true);
    // }
    // else {
    //   setEmpty(false);
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
    } else {
      setEmpty(false);
      SetCheckEmail(false);
    }
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

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setEmail('');
        setPassword('');
        setShow(true);
        setEmpty(false);
        SetCheckEmail(false);
        setCheckPassword(false);
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
            <Text style={styles.welcome}>
              Welcome Back, you’ve been missed!
            </Text>
          </View>

          <TextInputComponent
            emailView={styles.emailView}
            placeholder={'Email'}
            label={'Email ID'}
            onChangeText={emailChange}
            value={email}
            empty={empty}
            error={empty}
            TextMessageAlert={'Email must be valid email address'}
            TextMessage={'Email is required'}
            condtionText={{color: 'red'}}
            checkCondtion={checkemail}
            emailIconView={styles.emailIconView}
            emailIcon={styles.emailIcon}
            source={require('../../assets/assets/emailicon.png')}
          />
          <View>
            <TextInputComponent
              emailView={styles.passwordView}
              placeholder={'Password'}
              label={'Password'}
              styleInput={styles.materialView}
              onChangeText={passwordChange}
              value={password}
              empty={empty}
              secureTextEntry={show}
              TextMessageAlert={'Password must be at least 6 characters'}
              TextMessage={'Password is required'}
              condtionText={{color: 'red'}}
              checkCondtion={checkPassword}
              checkemail={checkemail}
              error={empty}
              emailIconView={styles.emailIconView}
            />

            <View style={[styles.emailIconView, {marginLeft: '13%'}]}>
              <TouchableOpacity onPress={() => setShow(!show)}>
                {show ? (
                  <Image
                    style={styles.imageIcon}
                    source={require('../../assets/assets/eyeicon.png')}
                  />
                ) : (
                  <Image
                    style={styles.imageIcon}
                    source={require('../../assets/assets/eye.png')}
                  />
                )}
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.checkboxView}>
            <View
              style={styles.middleView}>
              <CheckBox
                style={styles.checkStyle}
                disabled={false}
                tintColors={colors}
                value={toggleCheckBox}
                onValueChange={newValue => setToggleCheckBox(newValue)}
              />
              <View style={styles.keepMeStyle}>
                <Text style={styles.keepMeText}>Keep me signed in</Text>
              </View>
            </View>

            <View style={{marginRight:-15}}>
              <Text
                onPress={() => navigation.navigate('ForgetPassword')}
                style={styles.forgotText}>
                Forgot Password?
              </Text>
            </View>
          </View>

          <View style={styles.bottomButton}>
            <View style={styles.buttonView}>
              <Button
                onPress={() => {
                  loginButtonPressed();
                  submitLogin();
                  console.log('button');
                }}
                title={'Login'}
              />
            </View>

            <View style={styles.textBottom}>
              <Text style={styles.dontHaveText}>Don't have an account yet? {""}</Text>
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
  );
};
export default Login;
