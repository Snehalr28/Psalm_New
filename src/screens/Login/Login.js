import {loginUser} from '../../actions/UserActions';
import {Button} from '../../components';
import * as regex from '../../test-utils/regex';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './Login.styles';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';
import {TextInput as MaterialTextInput} from 'react-native-paper';
import {TextInputComponent} from '../../components/TextInputComponent';

export const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [checkemail, SetCheckEmail] = useState(false);
  const [checkPassword, setCheckPassword] = useState(false);
  const [menteementor, setMenteeMentor] = useState('1');
  const [change, setChange] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const navigation = useNavigation();
  console.log(props, 'props');
  const dispatch = useDispatch();
  let loginLoader = useSelector(state => state.loaders.loading);
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
          role: menteementor,
        }),
      );
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

  //To clear the textinput data
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
                <Text style={change ? styles.menteeText1 : styles.menteeText}>
                  Mentee
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* <View style={styles.emailView}>
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
            {empty ? (
              <Text style={{color: 'red'}}>Email is required</Text>
            ) : null}
            {checkemail ? (
              <Text style={{color: 'red'}}>
                Email must be a valid email address
              </Text>
            ) : null}
            <View style={styles.emailIconView}>
              <Image
                style={styles.emailIcon}
                source={require('../../assets/assets/emailicon.png')}
              />
            </View>
          </View> */}
          <TextInputComponent
            emailView={styles.emailView}
            placeholder={''}
            label={''}
            styleInput={{borderRadius: 10}}
            onChange={emailChange}
            value={''}
            empty={empty}
            TextMessageAlert={''}
          />
          <View style={styles.passwordView}>
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
          <View style={styles.bottomButton}>
            <View style={styles.buttonView}>
              <Button
                onPress={() => {
                  loginButtonPressed();
                  submitLogin();
                }}
                textStyle={styles.buttonText}
                title={'Log in'}
              />
            </View>
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
  );
};
export default Login;
