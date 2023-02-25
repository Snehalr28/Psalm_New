import {registerUser} from '../../actions/UserActions';
import {Button} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../../screens/Register/Register.styles';
import * as regex from '../../test-utils/regex';
import {isEmpty} from '../../test-utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import React, {useState, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, Text, TouchableOpacity, View, Alert} from 'react-native';
import {forgotPassword} from '../../actions/UserActions';
import {TextInput as MaterialTextInput, HelperText} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import {TextInputComponent} from '../../components/textInputComponent/TextInputComponent';

export const Register = props => {
  const [role, setRole] = useState('');
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [refcode, setRefcode] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [refcodeError, setRefcodeError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);
  const [show, setShow] = useState(true);
  const [menteementor, setMenteeMentor] = useState('1');
  console.log('menteementor value', menteementor);
  const [empty, setEmpty] = useState(false);
  const [change, setChange] = useState(false);
  const navigation = useNavigation();
  console.log();

  console.log(
    'Register Screen Data',
    firstName,
    lastName,
    password,
    mobileNumber,
    menteementor,
    change,
  );
  // let { navigation } = props;

  const dispatch = useDispatch();
  let isSignUpRequest = useSelector(state => state.user.isSignUpRequest);
  const submitPressed = async () => {
    console.log('signup');
    if (isEmpty(firstName)) {
      return;
    }
    if (isEmpty(lastName)) {
      return;
    }
    if (isEmpty(email)) {
      return;
    }
    if (!regex.validateEmail(email)) {
      return;
    }
    if (!regex.validatePassword(password)) {
      return;
    }
    if (isEmpty(mobileNumber)) {
    }
    if (!regex.validateMobile(mobileNumber)) {
    }
    let signupObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role: menteementor,
      // role: '1', //this should change after mentor mentee options available
      phone: mobileNumber,
      image: '',
      country_code: '+91',
    };
    console.log('signupObject<<<', signupObject);
    dispatch(
      registerUser(signupObject, cb => {
        console.log('CB', cb);
        if (cb != false) {
          if (cb.messageID == 200) {
            try {
              dispatch(
                forgotPassword({email}, cb => {
                  console.log('checkEmail<<', email, cb);
                  if (cb != false) {
                    console.log('check', cb.responseCode);
                    if (cb.responseCode == 200) {
                      Alert.alert('Otp sent successfully');
                      navigation.navigate('VerifyEmail', {
                        email: email,
                      });
                    }
                  }
                }),
              );
            } catch (error) {
              Alert.alert('Mobile no. is invalid');
            }
            'User Register successfully', 1000;
          }
        }
      }),
    );
  };
  const handleSubmitButton = () => {
    if (
      email === '' &&
      password === '' &&
      firstName === '' &&
      lastName === '' &&
      mobileNumber === ''
    ) {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };
  const validateName = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setFirstNameError(true);

      setEmpty(false);
    } else {
      setFirstNameError(false);
      setEmpty(false);
    }
  };
  const nameChange = text => {
    setFirstName(text);
    validateName(text);
  };
  const validateLastName = lastName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setLastNameError(true);
      setEmpty(false);
    } else {
      setLastNameError(false);
      setEmpty(false);
    }
  };
  const lastNameChange = text => {
    setLastName(text);

    validateLastName(text);
  };
  const validateEmail = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmpty(false);
      setEmailError(true);
    } else {
      setEmpty(false);
      setEmailError(false);
    }
  };
  const emailChange = text => {
    setEmail(text);
    validateEmail(text);
  };
  const validatePassword = password => {
    let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
    if (reg.test(password) === false) {
      setEmpty(false);
      setPasswordError(true);
    } else {
      setEmpty(false);
      setPasswordError(false);
    }
  };
  const passwordChange = text => {
    setPassword(text);
    validatePassword(text);
  };
  const validateNumber = password => {
    let reg = /^\d{10}$/;
    if (reg.test(password) === false) {
      setEmpty(false);
      setMobileNumberError(true);
    } else {
      setEmpty(false);
      setMobileNumberError(false);
    }
  };
  const numberChange = text => {
    setMobileNumber(text);
    validateNumber(text);
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setEmail('');
        setFirstName('');
        setLastName('');
        setRefcode('');
        setPassword('');
        setMobileNumber('');
        setEmailError(false);
        setFirstNameError(false);
        setLastNameError(false);
        setRefcodeError(false);
        setPasswordError(false);
        setMobileNumberError(false);
        setShow(true);
        setMenteeMentor('1');
        setEmpty(false);
        setChange(false);
      };
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View>
          {change ? (
            <View style={styles.mainImage}>
              <Image source={require('../../assets/assets/Register2.png')} />
            </View>
          ) : (
            <View style={styles.mainImage}>
              <Image source={require('../../assets/assets/Register1.png')} />
            </View>
          )}
          <View style={styles.signUpTextView}>
            <Text style={styles.signupText}>Sign up</Text>
            <Text style={styles.text}>
              Hello, I guess you are new around here.
            </Text>

            <View style={styles.buttonView}>
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

          <TextInputComponent
            emailView={styles.referalView}
            placeholder={'Enter a referral code'}
            label={'Referral Code'}
            onChangeText={setRefcode}
            value={refcode}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/Icons/pad.png')}
          />
          <TextInputComponent
            emailView={styles.inputTextView}
            placeholder={'Email'}
            label={'Email ID'}
            styleInput={styles.materialView}
            onChangeText={emailChange}
            value={email}
            empty={empty}
            error={empty}
            TextMessageAlert={'Email must be valid email address'}
            TextMessage={'Email is required'}
            condtionText={{color: 'red'}}
            checkCondtion={emailError}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/assets/emailicon.png')}
          />
          <TextInputComponent
            emailView={styles.inputTextView}
            placeholder={'First Name'}
            label={'First Name'}
            onChangeText={nameChange}
            value={firstName}
            empty={empty}
            error={empty}
            TextMessage={'First Name is required'}
            condtionText={{color: 'red'}}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/Icons/person.png')}
          />
          <TextInputComponent
            emailView={styles.inputTextView}
            placeholder={'Last Name'}
            label={'Last Name'}
            onChangeText={lastNameChange}
            value={lastName}
            empty={empty}
            error={empty}
            TextMessage={'Last Name is required'}
            condtionText={{color: 'red'}}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/Icons/person.png')}
          />
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 3,
                marginLeft: '10%',
                marginBottom: '6%',
              }}>
              <MaterialTextInput
                placeholder="+1"
                mode="outlined"
                outlineColor="#E5E4E2"
                activeOutlineColor="black"
                style={{borderRadius: 10}}
                autoCapitalize="none"
              />
            </View>

            <View
              style={{
                flex: 3,
                marginLeft: '3%',
                marginRight: '58%',
                marginBottom: '6%',
              }}>
              <TextInputComponent
                emailView={{width: 225}}
                placeholder={'Mobile No.'}
                label={'Mobile Number'}
                onChangeText={numberChange}
                value={mobileNumber}
                empty={empty}
                error={empty}
                TextMessageAlert={'Please enter valid mobile number'}
                TextMessage={'Mobile no. is required'}
                condtionText={{color: 'red'}}
                checkCondtion={mobileNumberError}
                emailIconView={[styles.imageView, {marginRight: '15%',}]}
                emailIcon={styles.image}
                source={require('../../assets/Icons/call.png')}
              />
            </View>
          </View>

          <TextInputComponent
            emailView={styles.inputTextView}
            placeholder={'Password'}
            label={'Password'}
            onChangeText={passwordChange}
            value={password}
            empty={empty}
            secureTextEntry={show}
            TextMessageAlert={'Password must be at least 6 characters'}
            TextMessage={'Password is required'}
            condtionText={{color: 'red'}}
            checkCondtion={passwordError}
            error={empty}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/assets/eyeicon.png')}
            eyeImageView={props.eyeImageView}
          />


          

          <View style={styles.inputTextView}>
            <Text style={styles.bottomText}>
              By signing up, you're agree to our
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                onPress={() => navigation.navigate('Terms & Conditions')}
                style={{color: 'black'}}>
                Terms & Conditions
              </Text>
              <Text style={{color: 'grey', marginLeft: 2}}>and</Text>
              <Text style={{color: 'black', marginLeft: 2}}>
                Privacy Policy
              </Text>
            </View>
          </View>
          <View style={styles.ContinueButton}>
            <Button
              onPress={() => {
                submitPressed();
                handleSubmitButton();
              }}
              style={{}}
              textStyle={styles.buttonText}
              title={'Continue'}
            />
          </View>
          <View style={styles.logInText}>
            <Text style={styles.joinText}>Joined us before? </Text>
            <Text
              onPress={() => navigation.navigate('Login')}
              style={styles.login}>
              Login
            </Text>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default Register;
