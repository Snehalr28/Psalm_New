/* eslint-disable react-native-a11y/has-valid-accessibility-ignores-invert-colors */
import {getLocationFromInput, registerUser} from '../../actions/UserActions';
import {backArrow, lock, login, auth, logo, mail, settings} from '../../assets';
import {Button, TextField} from '../../components';
import {NAVIGATION} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styles} from '../../screens/Register/Register.styles';
import * as regex from '../../test-utils/regex';
import {isEmpty} from '../../test-utils/validation';
import {useDispatch, useSelector} from 'react-redux';
import {globalColors} from '../../theme/globalColors';
import React, {useState, useRef} from 'react';
import {
  Image,
  ImageBackground,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {background} from '../../assets';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import {forgotPassword} from '../../actions/UserActions';
import {TextInput as MaterialTextInput, HelperText} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
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
  const navigation = useNavigation();
  const dispatch = useDispatch();
  let isSignUpRequest = useSelector(state => state.user.isSignUpRequest);
  const submitPressed = async () => {
    console.log('signup');
    if (isEmpty(firstName)) {
      // alert('First Name cannot be empty');
      return;
    }
    if (isEmpty(lastName)) {
      // alert('Lastname cannot be empty');
      return;
    }
    if (isEmpty(email)) {
      // alert('Email cannot be empty');
      return;
    }
    if (!regex.validateEmail(email)) {
      // alert('Please enter a valid email id.');
      return;
    }
    if (!regex.validatePassword(password)) {
      // alert('Password must be 8 or more character long.');
      return;
    }
    if (isEmpty(mobileNumber)) {
      // alert('Mobile no. cannot be empty');
      return;
    }
    if (!regex.validateMobile(mobileNumber)) {
      // alert('Please enter a Valid mobile number.');
    }
    let signupObject = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      role:menteementor,
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
                      // Toast.show('Otp sent successfully',1000);
                      navigation.navigate('VerifyEmail', {
                        email: email,
                        // type:"forgot"
                      });
                    }
                  }
                }),
              );
            } catch (error) {
              // Toast.show('Mobile no. is invalid',10000);
              Alert.alert('Mobile no. is invalid');
            }
            'User Register successfully', 1000;
            // navigation.goBack();
            // navigation.navigate('VerifyEmail', {
            //   email: email,
            // });
            // navigation.navigate('VerifyEmail');
            //  navigation.navigate('Login');
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
      // Alert.alert("Email can not be blank")
      setEmpty(true);
    } else {
      setEmpty(false);
    }

    // if (email === '') {
    //   // Alert.alert("Email can not be blank")
    //   setEmailError(true);
    // } else {
    //   setEmailError(false);
    // }
    // if (password === '') {
    //   // Alert.alert("Password can not be blank")
    //   setPasswordError(true);
    // } else {
    //   setPasswordError(false);
    // }
    // if (firstName === '') {
    //   // Alert.alert("Email can not be blank")
    //   setFirstNameError(true);
    // } else {
    //   setFirstNameError(false);
    // }
    // if (lastName === '') {
    //   // Alert.alert("Password can not be blank")
    //   setLastNameError(true);
    // } else {
    //   setLastNameError(false);
    // }
    // if (mobileNumber === '') {
    //   // Alert.alert("Password can not be blank")
    //   setMobileNumberError(true);
    // } else {
    //   setMobileNumberError(false);
    // }
    // if (refcode === '') {
    //   // Alert.alert("Password can not be blank")
    //   setRefcodeError(false);
    // } else {
    //   setRefcodeError(false);
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
        setEmpty(false)
        setChange(false)

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
          {/* <View style={styles.mainImage}>
            <Image source={require('../../assets/assets/Register1.png')} />
          </View> */}

          <View style={styles.signUpTextView}>
            <Text style={styles.signupText}>Sign up</Text>
            {/* <View style={{marginRight:1}}> */}
            <Text style={styles.text}>
              Hello, I guess you are new around here.
            </Text>
            {/* </View> */}
           
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
                {/* onPress={() => navigation.navigate('RegisterM')}> */}
                <Text style={change ? styles.menteeText1 : styles.menteeText}>
                  Mentee
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.referalView}>
            {/* <TextInput
            style={styles.inputField}
            placeholder="Enter a referral code"
            placeholderTextColor="grey"
            keyboardType="email-address"
            maxLength={60}
            onChangeText={e => setRefcode(e)}
            value={refcode}
          /> */}
            <MaterialTextInput
              placeholder="Enter a referral code"
              mode="outlined"
              label={'Referral Code'}
              outlineColor="grey"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              error={refcodeError}
              value={refcode}
              onChangeText={e => setRefcode(e)}
            />
            <HelperText type="error" visible={refcodeError}>
              Please enter Referal code
            </HelperText>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require('../../assets/Icons/pad.png')}
              />
            </View>
            {/* <View /> */}
          </View>
          <View style={styles.inputTextView}>
            {/* <TextInput
              style={styles.inputField}
              placeholder="Email"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              onChangeText={e => setEmail(e)}
              value={email}
              autoCapitalize="none"
              inputmode="none"
            /> */}
            <MaterialTextInput
              placeholder="Email ID"
              mode="outlined"
              label={'Email ID'}
              outlineColor="grey"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              // error={emailError}
              value={email}
              // onChangeText={e => emailChange(e)}
              onChangeText={emailChange}
            />
            {empty ? (
              <Text style={{color: 'red'}}>Email is required</Text>
            ) : null}
            {emailError ? (
              <Text style={{color: 'red'}}>Email must be valid email address</Text>
            ) : null}
            {/* <HelperText type="error" visible={emailError}>             
             Please enter valid email address
            </HelperText>             */}
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require('../../assets/assets/emailicon.png')}
              />
            </View>
            {/* <View /> */}
          </View>
          <View style={styles.inputTextView}>
            {/* <TextInput
              style={styles.inputField}
              placeholder="First Name"
              placeholderTextColor="grey"
              keyboardType="email-address"
              maxLength={60}
              onChangeText={e => setFirstName(e)}
              value={firstName}
            /> */}
            <MaterialTextInput
              placeholder="First Name"
              mode="outlined"
              label={'First Name'}
              outlineColor="grey"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              // error={firstNameError}
              value={firstName}
              // onChangeText={e => emailChange(e)}
              onChangeText={nameChange}
            />
            {empty ? (
              <Text style={{color: 'red'}}>First name is required </Text>
            ) : null}
            {/* {firstNameError?(<Text style={{color:"red"}}>Please Use Characters</Text>):null}                    */}
            {/* <HelperText type="error" visible={firstNameError}>              
            Please enter first name
            </HelperText>             */}
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require('../../assets/Icons/person.png')}
              />
            </View>
            {/* <View /> */}
          </View>
          <View style={styles.inputTextView}>
            {/* <TextInput
              style={styles.inputField}
              placeholder="Last Name"
              placeholderTextColor="grey"
              keyboardType="email-address"
              maxLength={60}
              onChangeText={e => setLastName(e)}
              value={lastName}
            /> */}
            <MaterialTextInput
              placeholder="Last Name"
              mode="outlined"
              label={'Last Name'}
              outlineColor="grey"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              error={lastNameError}
              value={lastName}
              // onChangeText={e => emailChange(e)}

              onChangeText={lastNameChange}
            />
            {empty ? (
              <Text style={{color: 'red'}}>Last name is required</Text>
            ) : null}
            {/* <HelperText type="error" visible={lastNameError}>              
             please enter last name
            </HelperText>             */}
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require('../../assets/Icons/person.png')}
              />
            </View>
            {/* <View /> */}
          </View>

          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                flex: 3,
                // marginTop: '5%',
                marginLeft: '10%',
                // marginRight: '10%',
                marginBottom: '6%',
              }}>
              <MaterialTextInput
                placeholder="+1"
                mode="outlined"
                // label={'+1'}
                outlineColor="grey"
                activeOutlineColor="black"
                style={{borderRadius: 10}}
                autoCapitalize="none"
              />
            </View>

            <View
              style={{
                flex: 3,
                // marginTop: '5%',
                marginLeft: '3%',
                // width:'200%'
                marginRight: '58%',
                marginBottom: '6%',
              }}>
              {/* <TextInput
              style={styles.inputField}
              placeholder="Mobile Number"
              placeholderTextColor="grey"
              keyboardType="email-address"
              maxLength={60}
              onChangeText={e => setMobileNumber(e)}
              value={mobileNumber}
            /> */}
              <MaterialTextInput
                placeholder="Mobile No."
                mode="outlined"
                label={'Mobile Number'}
                outlineColor="grey"
                activeOutlineColor="black"
                style={{borderRadius: 10, width: '430%'}}
                autoCapitalize="none"
                autoCorrect={false}
                error={mobileNumberError}
                value={mobileNumber}
                // onChangeText={e => emailChange(e)}
                onChangeText={numberChange}
              />
              {empty ? (
                <Text style={{color: 'red',marginRight:-80}}>Mobile no. is required</Text>
              ) : null}
              {mobileNumberError ? (
                <Text style={{color: 'red',marginRight:-80}}>
                  Please enter valid mobile number
                </Text>
              ) : null}
              {/* <HelperText type="error" visible={mobileNumberError}>              
            Please enter mobile number
            </HelperText>             */}
              <View
                style={{
                  // alignSelf: 'flex-end',
                  marginTop: 9,
                  // marginLeft:'60%',
                  // marginRight: '60%',
                  position: 'absolute',
                  paddingRight:10,
                  
                  marginLeft: 190,
                }}>
                <Image
                  style={styles.image}
                  source={require('../../assets/Icons/call.png')}
                />
              </View>
              {/* <View /> */}
            </View>
          </View>

          <View style={styles.inputTextView}>
            {/* <TextInput
              style={styles.inputField}
              placeholder="Password"
              placeholderTextColor="grey"
              underlineColorAndroid="transparent"
              onChangeText={e => setPassword(e)}
              value={password}
              secureTextEntry={true}
              inputmode="none"
            /> */}
            <MaterialTextInput
              placeholder="Enter Your Password"
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
            {passwordError ? (
              <Text style={{color: 'red'}}>
                Password must contains Special Characters,[A-Z],[a-z],[0-9]
              </Text>
            ) : null}
            {/* <HelperText type="error" visible={passwordError}>              
            Password is Not Strong 
            </HelperText>             */}
            <View style={styles.imageView}>
              <TouchableOpacity onPress={() => setShow(!show)}>
                {show ? (
                  <Image
                    style={{height: 20, width: 20, marginTop: 15}}
                    source={require('../../assets/assets/eyeicon.png')}
                  />
                ) : (
                  <Image
                    style={{height: 20, width: 20, marginTop: 15}}
                    source={require('../../assets/assets/eye.png')}
                  />
                )}
              </TouchableOpacity>
            </View>

            {/* <View /> */}
            <View style={{}}>
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
          </View>
          <View style={styles.ContinueButton}>
            <Button
              onPress={() => {
                // submitLogin();
                submitPressed();
                // handleSubmit();
                handleSubmitButton();
              }}
              style={{}}
              textStyle={styles.buttonText}
              title={'Continue'}
              // isLoading={loginLoader}
              // disabled={loginLoader}
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
          {/* <View
          style={{
            flex: 4,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 30,
            marginBottom: 35,
            marginLeft: '10%',
            marginRight: '10%',
          }}>          <TouchableOpacity
            onPress={() => {
              submitPressed();
            }}
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
              }}>              
              Save Password
            </Text>          
            </TouchableOpacity>         
             <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: '3%',
            }}>            
            <Text style={{color: 'black'}}>Joined us before? </Text>            
            <Text style={{color: 'black', fontWeight: '600'}}>Login</Text>          
            </View>       
             </View> */}
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
    //       height: 1055,
    //       background: '#FFFFFF',
    //       borderRadius: 20,
    //     }}>    //     {/* {change === 'true' ? (<Image
    // //         // source={auth}
    // //         source={require('../../../assets/13Signupasmentor.png')}
    // //         style={styles.logoImage}
    // //         resizeMode="contain"
    // //       />):
    // //       (<Image
    // //         // source={auth}
    // //         source={require('../../../assets/mentee.png')}
    // //         style={styles.logoImage}
    // //         resizeMode="contain"
    // //       />)} */}
    //     <Image
    //     source={require('../../assets/assets/13Signupasmentor.png')}
    //       style={{
    //         position: 'absolute',
    //         width: 301,
    //         height: 224.28,
    //         left: 37,
    //         top: 50,
    //       }}
    //       // resizeMode="contain"
    //     />    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 136,
    //         height: 41,
    //         left: 20,
    //         top: 280,
    //       }}>    //       <Text
    //         style={{
    //           fontWeight: 700,
    //           fontSize: 36,
    //           lineHeight: 41,
    //           color: '#313131',
    //         }}>    //         Sign up
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 310,
    //         height: 20,
    //         left: 20,
    //         top: 285,
    //       }}>    //       <Text
    //         style={{
    //           position: 'absolute',
    //           fontWeight: 400,
    //           fontSize: 14,
    //           lineHeight: 143,
    //           color: '#313131',
    //           opacity: 0.8,
    //         }}>    //         Hello, I guess you are new around here.
    //       </Text>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 184,
    //         height: 40,
    //         left: 20,
    //         top: 390,
    //         flexDirection: 'row',
    //       }}>    //       <TouchableOpacity
    //         style={{
    //           alignItems: 'center',
    //           // backgroundColor: change === 'false' ? 'black' : '#DDDDDD',
    //           backgroundColor: 'black',
    //           padding: 13,
    //           borderTopLeftRadius: 20,
    //           borderBottomLeftRadius: 20,
    //         }}
    //         onPress={() => setChange(true)}>    //         {/* onPress={setChange(true)}> */}
    //         <Text style={{color: 'white'}}>Mentor</Text>    //       </TouchableOpacity>    //       <TouchableOpacity
    //         style={{
    //           alignItems: 'center',
    //           backgroundColor: '#DDDDDD',
    //           // backgroundColor: change === 'true' ? 'black' : '#DDDDDD',
    //           padding: 13,
    //           borderTopRightRadius: 20,
    //           borderBottomRightRadius: 20,
    //         }}
    //         // onPress={setChange(false)}>    //         onPress={() => setChange(true)}>    //         {/* <Text style={{color: 'white'}}>mentee</Text> */}
    //         <Text>mentee</Text>    //       </TouchableOpacity>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 450,
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //        source={require('../../assets/Icons/pad.png')}
    //         style={{
    //           position: 'absolute',
    //           width: 25,
    //           height: 25,
    //           marginLeft: 300,
    //           marginTop: 10,
    //         }}
    //       />    //       <TextInput
    //         placeholder="Enter a referral code"
    //         keyboardType="email-address"
    //         maxLength={60}
    //         onChangeText={e => setRefcode(e)}
    //         value={refcode}
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 510,
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //        source={require('../../assets/assets/emailicon.png')}
    //         style={{
    //           position: 'absolute',
    //           width: 25,
    //           height: 25,
    //           marginLeft: 300,
    //           marginTop: 10,
    //         }}
    //       />    //       <TextInput
    //         placeholder="Email"
    //         underlineColorAndroid="transparent"
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
    //         top: 570,
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //        source={require('../../assets/Icons/person.png')}
    //         style={{
    //           position: 'absolute',
    //           width: 25,
    //           height: 25,
    //           marginLeft: 300,
    //           marginTop: 10,
    //         }}
    //       />    //       <TextInput
    //         style={styles.Inputstyle}
    //         placeholder="First Name"
    //         keyboardType="email-address"
    //         maxLength={60}
    //         onChangeText={e => setFirstName(e)}
    //         value={firstName}
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 630,
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //          source={require('../../assets/Icons/person.png')}
    //         style={{
    //           position: 'absolute',
    //           width: 25,
    //           height: 25,
    //           marginLeft: 300,
    //           marginTop: 10,
    //         }}
    //       />    //       <TextInput
    //         style={styles.Inputstyle}
    //         placeholder="Last Name"
    //         keyboardType="email-address"
    //         maxLength={60}
    //         onChangeText={e => setLastName(e)}
    //         value={lastName}
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 690,
    //         // backgroundColor:"red",
    //         borderWidth: 1,
    //         borderColor: 'black',
    //         // opacity: 0.15,
    //         borderRadius: 10,
    //       }}>    //       <Image
    //         source={require('../../assets/Icons/call.png')}
    //         style={{
    //           position: 'absolute',
    //           width: 25,
    //           height: 25,
    //           marginLeft: 300,
    //           marginTop: 10,
    //         }}
    //       />    //       <TextInput
    //         style={styles.Inputstyle}
    //         placeholder="Mobile Number"
    //         keyboardType="email-address"
    //         maxLength={60}
    //         onChangeText={e => setMobileNumber(e)}
    //         value={mobileNumber}
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 750,
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
    //         placeholder="Password"
    //         underlineColorAndroid="transparent"
    //         onChangeText={e => setPassword(e)}
    //         value={password}
    //         secureTextEntry={true}
    //         inputmode="none"
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         left: 20,
    //         top: 800,
    //         marginTop: 10,
    //       }}>    //       <Text style={{marginRight: 30, fontWeight: 400, fontSize: 14}}>    //         By signing up, you're agree to our
    //       </Text>    //       <TouchableOpacity
    //         onPress={() => navigation.navigate('ForgetPassword')}>    //         {/* onPress={() => setSelection(!isSelected)}>  */}
    //         <Text
    //           style={{
    //             // marginLeft: 30,
    //             // margin: 7,
    //             fontSize: 14,
    //             fontWeight: 400,
    //             color: 'black',
    //           }}>    //           Terms & Conditions and Privacy Policy
    //         </Text>    //       </TouchableOpacity>    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 335,
    //         height: 46,
    //         left: 20,
    //         top: 880,
    //         backgroundColor: '#FE4D4D',
    //         borderRadius: 8,
    //       }}>    //       <Button
    //         onPress={() => {
    //           // submitLogin();
    //           submitPressed();
    //         }}
    //         style={{}}
    //         textStyle={styles.buttonText}
    //         title={'Continue'}
    //         // isLoading={loginLoader}
    //         // disabled={loginLoader}
    //       />    //     </View>    //     <View
    //       style={{
    //         position: 'absolute',
    //         width: 239,
    //         height: 22,
    //         left: 67,
    //         top: 930,
    //         flexDirection: 'row',
    //       }}>    //       <Text style={styles.accountText}>Joined us before? </Text>    //       <TouchableOpacity onPress={() => navigation.navigate('Login')}>    //         <Text style={styles.signUpText}>Login</Text>    //       </TouchableOpacity>    //     </View>    //   </View>    // </KeyboardAwareScrollView>  );
  );
};
export default Register;
