import {useTheme} from '@react-navigation/native';
import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Config} from 'react-native-config';
import {useSelector} from 'react-redux';
import {strings} from '../../localization';
import {getUser} from '../../selectors/UserSelectors';
import {styles} from './Dashboard.styles';
import {typography} from '../../theme';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/UserActions';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../components';
// import { strings } from '../../localization';
export const Dashboard = props => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {colors} = useTheme();
  // const user = useSelector(getUser);

  const logoutUser = () => {
    dispatch(logout());
  };
  return (
    <>
      <View style={{marginBottom: '15%', marginTop: 10, marginRight: 150}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MentorMenteeProfileScreen')}
          style={
            {
              marginTop:20
             
            }
          }
          >
          <Text
            style={{
              color: 'white',
              fontWeight: '400',
              alignSelf: 'center',
              fontSize: 17,
              color: 'black',
            }}>
            Hello, Username
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={[typography.title, {color: colors.text}]}>Dashboard</Text>
        <View
          style={{
            flex: 1,
            marginTop: '5%',
          }}>
          <TouchableOpacity
            onPress={logoutUser}
            style={{
              paddingHorizontal: 20,
              height: '10%',
              width: '150%',
              backgroundColor: '#FE4D4D',
              justifyContent: 'center',
             
              borderColor: '#FE4D4D',
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>

        {/* <Text style={[typography.title, { color: colors.text }]}>
        {strings.home.message} {user?.username}
      </Text>
      <Text style={[typography.text, { color: colors.text }]}>
      {strings.home.variant} {Config.BUILD_VARIANT}
      </Text> */}
      </View>
    </>
  );
};

// //import liraries
// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   SafeAreaView,
//   Image,
//   TouchableOpacity,
//   Button,
// } from 'react-native';
// import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
// import SwitchToggle from 'react-native-switch-toggle';
// import CommonTextInput from '../../components/CommonTextInput';
// import {TextInput, HelperText} from 'react-native-paper';

// // create a component
// const Temp = () => {
//   const [on, off] = useState(false);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [number, setNumber] = useState('');
//   const [gender, setGender] = useState('');
//   const [bio, setBio] = useState('');
//   const [Dob, setDob] = useState('');
//   const [verification, setVerification] = useState('');
//   const [language, setLanguage] = useState('');
//   const [address, setAddress] = useState('');
//   const [city, setCity] = useState('');
//   const [province, setProvince] = useState('');
//   const [postalCode, setPostalCode] = useState('');
//   const [country, setCountry] = useState('');
//   const [skillType, setSkillType] = useState('');
//   const [skillName, setSkillName] = useState('');
//   const [certificate, setCertificate] = useState('');

//   const [firstNameError, setFirstNameError] = useState(false);
//   const [lastNameError, setLastNameError] = useState(false);
//   const [emailError, setEmailError] = useState(false);
//   const [numberError, setNumberError] = useState(false);
//   const [genderError, setGenderError] = useState(false);
//   const [bioError, setBioError] = useState(false);
//   const [DobError, setDobError] = useState(false);
//   const [verificationError, setVerificationError] = useState(false);
//   const [languageError, setLanguageError] = useState(false);
//   const [addressError, setAddressError] = useState(false);
//   const [cityError, setCityError] = useState(false);
//   const [provinceError, setProvinceError] = useState(false);
//   const [postalCodeError, setPostalCodeError] = useState(false);
//   const [countryError, setCountryError] = useState(false);
//   const [skillTypeError, setSkillTypeError] = useState(false);
//   const [skillNameError, setSkillNameError] = useState(false);
//   const [certificateError, setCertificateError] = useState(false);

//   const handleSubmitButton = () => {
//     if (firstName === '') {
//       // Alert.alert("Email can not be blank")
//       setFirstNameError(true);
//     } else {
//       setFirstNameError(false);
//     }
//     if (lastName === '') {
//       // Alert.alert("Password can not be blank")
//       setLastNameError(true);
//     } else {
//       setLastNameError(false);
//     }
//     if (email === '') {
//       // Alert.alert("Email can not be blank")
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//     if (number === '') {
//       // Alert.alert("Password can not be blank")
//       setNumberError(true);
//     } else {
//       setNumberError(false);
//     }
//     if (Dob === '') {
//       // Alert.alert("Password can not be blank")
//       setDobError(true);
//     } else {
//       setDobError(false);
//     }
//     if (gender === '') {
//       // Alert.alert("Password can not be blank")
//       setGenderError(true);
//     } else {
//       setGenderError(false);
//     }
//     if (bio === '') {
//       // Alert.alert("Email can not be blank")
//       setBioError(true);
//     } else {
//       setBioError(false);
//     }
//     if (verification === '') {
//       // Alert.alert("Password can not be blank")
//       setVerificationError(true);
//     } else {
//       setVerificationError(false);
//     }
//     if (language === '') {
//       // Alert.alert("Email can not be blank")
//       setLanguageError(true);
//     } else {
//       setLanguageError(false);
//     }
//     if (address === '') {
//       // Alert.alert("Password can not be blank")
//       setLanguageError(true);
//     } else {
//       setLanguageError(false);
//     }
//     if (city === '') {
//       // Alert.alert("Password can not be blank")
//       setCityError(true);
//     } else {
//       setCityError(false);
//     }
//     if (province === '') {
//       // Alert.alert("Password can not be blank")
//       setProvinceError(true);
//     } else {
//       setProvinceError(false);
//     }
//     if (postalCode === '') {
//       // Alert.alert("Password can not be blank")
//       setPostalCodeError(true);
//     } else {
//       setPostalCodeError(false);
//     }
//     if (country === '') {
//       // Alert.alert("Password can not be blank")
//       setCountryError(true);
//     } else {
//       setCountryError(false);
//     }
//     if (skillName === '') {
//       // Alert.alert("Password can not be blank")
//       setSkillNameError(true);
//     } else {
//       setSkillNameError(false);
//     }
//     // if (!emailError && !passwordError) {
//     //   dispatch(
//     //     loginUser({
//     //       email: email,
//     //       password: password,
//     //       role: 1,
//     //     }),
//     //   );
//     //   navigation.navigate('Temp');
//     // }
//   };

//   const validateName = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setFirstNameError(true);
//     } else {
//       setFirstNameError(false);
//     }
//   };
//   const firstNameChange = text => {
//     setFirstName(text);
//     validateName(text);
//   };

//   const validateLastName = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setLastNameError(true);
//     } else {
//       setLastNameError(false);
//     }
//   };
//   const lastNameChange = text => {
//     setLastNameError(text);
//     validateLastName(text);
//   };

//   const validateEmail = email => {
//     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
//     if (reg.test(email) === false) {
//       setEmailError(true);
//     } else {
//       setEmailError(false);
//     }
//   };
//   const emailChange = text => {
//     setEmail(text);
//     validateEmail(text);
//   };

//   const validatePassword = password => {
//     let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/;
//     if (reg.test(password) === false) {
//       setPasswordError(true);
//     } else {
//       setPasswordError(false);
//     }
//   };
//   const passwordChange = text => {
//     setPassword(text);
//     validatePassword(text);
//   };

//   const validateNumber = password => {
//     let reg = /^\d{10}$/;
//     if (reg.test(password) === false) {
//       setMobileNumberError(true);
//     } else {
//       setMobileNumberError(false);
//     }
//   };
//   const numberChange = text => {
//     setMobileNumber(text);
//     validateNumber(text);
//   };

//   const validateGender = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setGenderError(true);
//     } else {
//       setGenderError(false);
//     }
//   };
//   const genderChange = text => {
//     setGender(text);
//     validateGender(text);
//   };

//   const validateBio = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setBioError(true);
//     } else {
//       setBioError(false);
//     }
//   };
//   const bioChange = text => {
//     setBio(text);
//     validateBio(text);
//   };

//   const validateVerification = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setVerificationError(true);
//     } else {
//       setVerificationError(false);
//     }
//   };
//   const verificationChange = text => {
//     setVerification(text);
//     validateVerification(text);
//   };

//   const validateLanguage = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setLanguageError(true);
//     } else {
//       setLanguageError(false);
//     }
//   };
//   const languageChange = text => {
//     setLanguage(text);
//     validateLanguage(text);
//   };

//   const validateAddress = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setAddressError(true);
//     } else {
//       setAddressError(false);
//     }
//   };
//   const addressChange = text => {
//     setAddress(text);
//     validateAddress(text);
//   };

//   const validateCity = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setCityError(true);
//     } else {
//       setCityError(false);
//     }
//   };
//   const cityChange = text => {
//     setCity(text);
//     validateCity(text);
//   };

//   const validateProvince = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setProvinceError(true);
//     } else {
//       setProvinceError(false);
//     }
//   };
//   const changeProvince = text => {
//     setProvince(text);
//     validateProvince(text);
//   };

//   const validatePostalCode = password => {
//     let reg = /^\d{10}$/;
//     if (reg.test(password) === false) {
//       setPostalCodeError(true);
//     } else {
//       setPostalCodeError(false);
//     }
//   };
//   const postalCodeChange = text => {
//     setPostalCode(text);
//     validatePostalCode(text);
//   };

//   const validateCountry = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setCountryError(true);
//     } else {
//       setCountryError(false);
//     }
//   };
//   const countryChnage = text => {
//     setCountry(text);
//     validateCountry(text);
//   };

//   const validateSkillName = firstName => {
//     let reg = /^[a-zA-Z]+$/;
//     if (reg.test(firstName) === false) {
//       setSkillNameError(true);
//     } else {
//       setSkillNameError(false);
//     }
//   };
//   const skillNameChange = text => {
//     setSkillName(text);
//     validateSkillName(text);
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: 'white', }}>
//       <KeyboardAwareScrollView>
//         <View
//           style={{
//             marginTop: 15,
//             marginLeft: 18,
//             marginRight: 20,
//           }}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//             }}>
//             <Image
//               style={{height: 25, width: 25}}
//               source={require('../../assets/Icons/user.png')}
//             />
//             <Text
//               style={{
//                 fontSize: 14,
//                 fontWeight: 'bold',
//                 marginLeft: '-55%',
//                 marginTop: 3,
//               }}>
//               Create Profile
//             </Text>
//             <Image
//               style={{height: 25, width: 25}}
//               source={require('../../assets/Icons/Notification.png')}
//             />
//           </View>

//           <View
//             style={{
//               backgroundColor: '#ced4da',
//               justifyContent: 'center',
//               alignItems: 'center',
//               height: 80,
//               width: 80,
//               borderRadius: 50,
//               flex: 1,
//               marginTop: 30,
//               marginLeft: 20,
//             }}>
//             <TouchableOpacity>
//               <Image
//                 style={{height: 30, width: 30, marginRight: 10, marginLeft: 10}}
//                 source={require('../../assets/Icons/camera.png')}
//               />
//             </TouchableOpacity>
//           </View>

//           <View style={{flexDirection: 'row', marginTop: 25, marginBottom: 15}}>
//             <Text style={styles.MentorTextStyle}>Mentor</Text>
//             <View style={{marginTop: 5, marginBottom: 5}}>
//               <SwitchToggle
//                 style={styles.switchStyle}
//                 switchOn={on}
//                 onPress={() => off(!on)}
//                 backgroundColorOn="#FF0000"
//                 circleColorOff="#FF0000"
//                 backgroundColorOff="#F0EFF3"
//                 containerStyle={{
//                   width: 37,
//                   height: 18,
//                   borderRadius: 25,
//                   padding: 5,
//                 }}
//                 circleStyle={{
//                   width: 12,
//                   height: 12,
//                   borderRadius: 20,
//                 }}
//               />
//             </View>
//             <Text style={styles.MenteeTextStyle}>Mentee</Text>
//           </View>

//           <View style={styles.textInputView}>
//             {/* <View style={styles.requiredView}>
//               <Text style={styles.requiredText}>*</Text>
//             </View> */}
//             <TextInput
//               placeholder="Enter Your First Name"
//               mode="outlined"
//               label={'First Name'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={firstNameError}
//               value={firstName}
//               onChangeText={e => firstNameChange(e)}
//             />
//             <HelperText type="error" visible={firstNameError}>
//               Enter Your First Name
//             </HelperText>
//           </View>

//           <View style={styles.textInputView}>
//             {/* <View style={styles.requiredView}>
//               <Text style={styles.requiredText}>*</Text>
//             </View> */}
//             <TextInput
//               placeholder="Enter Your Last Name"
//               mode="outlined"
//               label={'Last Name'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={lastNameError}
//               value={lastName}
//               onChangeText={e => lastNameChange(e)}
//             />
//             <HelperText type="error" visible={lastNameError}>
//               Enter Your Last Name
//             </HelperText>
//           </View>

//           <View style={styles.textInputView}>
//             {/* <View style={styles.requiredView}>
//               <Text style={styles.requiredText}>*</Text>
//             </View> */}
//             <TextInput
//               placeholder="Enter Your Email ID"
//               mode="outlined"
//               label={'Email ID'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={emailError}
//               value={email}
//               onChangeText={e => emailChange(e)}
//             />
//             <HelperText type="error" visible={emailError}>
//               Enter Your Last Name
//             </HelperText>
//           </View>

//           <View
//             style={{
//               flexDirection: 'row',
//               marginTop: 5,
//               justifyContent: 'flex-start',
//               // marginBottom:10
//             }}>
//             <View>
//               <TextInput
//                 style={{marginRight: 20, width: 65}}
//                 placeholder="+1"
//                 mode="outlined"
//                 // label={'Number'}
//                 outlineColor="black"
//                 activeOutlineColor="black"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 error={numberError}
//                 value={number}
//                 onChangeText={e => numberChange(e)}
//               />
//             </View>

//             <View>
//               <TextInput
//                 style={{borderRadius: 10, width: '224%'}}
//                 placeholder="450 1450 1885"
//                 mode="outlined"
//                 label={'Number'}
//                 outlineColor="black"
//                 activeOutlineColor="black"
//                 autoCapitalize="none"
//                 autoCorrect={false}
//                 error={numberError}
//                 value={number}
//                 onChangeText={e => numberChange(e)}
//               />
//               <HelperText type="error" visible={numberError}>
//                 Enter Your Number
//               </HelperText>
//             </View>
//             {/* </View> */}
//           </View>

//           <View style={styles.textInputView}>
//             {/* <View style={styles.requiredView}>
//               <Text style={styles.requiredText}>*</Text>
//             </View> */}
//             <TextInput
//               placeholder="Enter Your Date of Birth"
//               mode="outlined"
//               label={'Date of Birth'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={DobError}
//               value={Dob}
//               onChangeText={e => e}
//             />
//             <HelperText type="error" visible={emailError}>
//               Enter Your Last Name
//             </HelperText>

//             <View style={styles.imageView}>
//               <Image
//                 style={styles.image}
//                 source={require('../../assets/Icons/Calendar.png')}
//               />
//             </View>
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               // style={{borderRadius: 10, width: '224%'}}
//               placeholder="Select Gender"
//               mode="outlined"
//               label={'Gender'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={genderError}
//               value={gender}
//               onChangeText={e => genderChange(e)}
//             />
//             <HelperText type="error" visible={genderError}>
//               Select Your Gender
//             </HelperText>

//             <View style={styles.imageViewStyle}>
//               <Image
//                 style={styles.imageIconStyle}
//                 source={require('../../assets/Icons/Vector.png')}
//               />
//             </View>
//           </View>

//           <View style={[styles.textInputView, {marginBottom: 20}]}>
//             <TextInput
//               // style={{borderRadius: 10, width: '224%', height:"200%"}}
//               multiline={true}
//               placeholder="Write Your Bio"
//               mode="outlined"
//               label={'Bio'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               height={160}
//               autoCapitalize="none"
//               autoCorrect={false}
//               // error={bioError}
//               value={bio}
//               onChangeText={e => setBio(e)}
//             />
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               placeholder="Verification ID"
//               mode="outlined"
//               label={'Verification ID'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={verificationError}
//               value={verification}
//               onChangeText={e => verificationChange(e)}
//             />
//             <HelperText type="error" visible={verificationError}>
//               Verification ID is Required
//             </HelperText>
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               style={{borderRadius: 10, width: '224%'}}
//               placeholder="Select Language"
//               mode="outlined"
//               label={'Language'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={languageError}
//               value={language}
//               onChangeText={e => languageChange(e)}
//             />
//             <HelperText type="error" visible={languageError}>
//               Select Your Language
//             </HelperText>

//             <View style={styles.imageViewStyle}>
//               <Image
//                 style={styles.imageIconStyle}
//                 source={require('../../assets/Icons/Vector.png')}
//               />
//             </View>
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               placeholder="Enter Your Address"
//               mode="outlined"
//               label={'Province'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={addressError}
//               value={address}
//               onChangeText={e => addressChange(e)}
//             />
//             <HelperText type="error" visible={addressError}>
//               Enter Your Address
//             </HelperText>
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               placeholder="Enter Your City"
//               mode="outlined"
//               label={'City'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={cityError}
//               value={city}
//               onChangeText={e => cityChange(e)}
//             />
//             <HelperText type="error" visible={cityError}>
//               Enter Your City
//             </HelperText>
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               style={{borderRadius: 10, width: '224%'}}
//               placeholder="Enter Your Province"
//               mode="outlined"
//               label={'Province'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={provinceError}
//               value={province}
//               onChangeText={e => changeProvince(e)}
//             />
//             <HelperText type="error" visible={provinceError}>
//               Enter Your Lasprovincee
//             </HelperText>
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               style={{borderRadius: 10, width: '224%'}}
//               placeholder="Enter Your Postal Code"
//               mode="outlined"
//               label={'Postal Code'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={postalCodeError}
//               value={postalCode}
//               onChangeText={e => postalCodeChange(e)}
//             />
//             <HelperText type="error" visible={postalCodeError}>
//               Enter Your Postal Code
//             </HelperText>
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               style={{borderRadius: 10, width: '224%'}}
//               placeholder="Enter Your Country"
//               mode="outlined"
//               label={'Country'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={countryError}
//               value={country}
//               onChangeText={e => countryChnage(e)}
//             />
//             <HelperText type="error" visible={countryError}>
//               Enter Country
//             </HelperText>
//           </View>

//           <View style={{marginTop: -15, marginBottom: 13}}>
//             <Text style={styles.addDocument}>Add Documents</Text>
//             <Text style={{fontWeight: '500', fontSize: 20, color: 'black'}}>
//               Skill Certification
//             </Text>
//           </View>

//           <View style={[styles.textInputView, {marginBottom: 15}]}>
//             <TextInput
//               placeholder="Enter Skill Type"
//               mode="outlined"
//               label={'Skill Type'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={skillTypeError}
//               value={skillType}
//               onChangeText={e => setSkillType(e)}
//             />
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               placeholder="Enter Skill Name"
//               mode="outlined"
//               label={'Skill Name'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               error={skillNameError}
//               value={skillName}
//               onChangeText={e => skillNameChange(e)}
//             />
//             <HelperText type="error" visible={skillNameError}>
//               Enter Skill Name
//             </HelperText>
//           </View>

//           <View style={styles.textInputView}>
//             <TextInput
//               style={{borderRadius: 10, width: '224%'}}
//               placeholder="Enter Your Certificate"
//               mode="outlined"
//               label={'Upload Certificate'}
//               outlineColor="black"
//               activeOutlineColor="black"
//               style={{borderRadius: 10}}
//               autoCapitalize="none"
//               autoCorrect={false}
//               // error={emailError}
//               value={email}
//               onChangeText={e => setCertificate(e)}
//             />

//             <View style={styles.imageViewStyle}>
//               <Image
//                 style={styles.imageIconStyle}
//                 source={require('../../assets/Icons/Group.png')}
//               />
//             </View>
//           </View>

//           <View style={{marginTop: 15,}}>
//             <Text style={styles.addDocument}>Add More Skills</Text>

//             <View style={[styles.buttonView, { marginBottom:20, marginTop: 10}]}>
//               {/* <Button
//               title='Save'
//                 textStyle={styles.buttonText}
//               /> */}
//               <TouchableOpacity
//                 style={{
//                   height: 50,
//                   width: '125%',
//                   backgroundColor: '#FE4D4D',
//                   justifyContent: 'center',
//                   alignItems: 'center',
//                   borderColor: '#FE4D4D',
//                   borderRadius:10,
//                   marginBottom:20,

//                 }}>
//                 <Text
//                   style={{
//                     color: 'white',
//                     fontWeight: '700',
//                     fontSize: 16,
//                     alignSelf: 'center',
//                   }}>
//                    Add Bank Account
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </View>

//           <View style={{marginBottom: '15%'}}>
//             <TouchableOpacity
//               style={{
//                 borderWidth:1,
//                 height: '15%',
//                 width: '100%',
//                 borderRadius: 10,
//                 backgroundColor: 'white',
//                 justifyContent: 'center',
//                 alignItems: 'center',
//                 borderColor:"#FE4D4D"
//               }}>
//               <Text
//                 style={{
//                   color: 'white',
//                   fontWeight: '700',
//                   alignSelf: 'center',
//                   fontSize: 16,
//                   color:"#FE4D4D"
//                 }}>
//                 Save
//               </Text>
//             </TouchableOpacity>
//           </View>

//         </View>

//         {/* <View style={{flex: 2, marginBottom: 30}}>

//         </View> */}
//       </KeyboardAwareScrollView>
//     </SafeAreaView>
//   );
// };

// // define your styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff',
//   },
//   MentorTextStyle: {
//     fontWeight: 'bold',
//     fontSize: 15,
//     marginRight: 25,
//   },
//   MenteeTextStyle: {
//     fontWeight: 'bold',
//     fontSize: 15,
//     marginLeft: 25,
//   },
//   switchStyle: {
//     // marginTop:
//   },
//   textInputView: {marginTop: -3},
//   requiredView: {marginBottom: '-8%', marginTop: 5},
//   requiredText: {marginLeft: '21%', color: '#FF0000'},
//   textInputField: {borderWidth: 1, borderRadius: 10, borderColor: '#313131'},
//   imageViewStyle: {
//     alignSelf: 'flex-end',
//     marginTop: 5,
//     marginRight: '8%',
//     position: 'absolute',
//   },
//   imageIconStyle: {height: 20, width: 20, marginTop: 13},
//   imageView: {
//     alignSelf: 'flex-end',
//     marginTop: 12,
//     marginRight: '10%',
//     position: 'absolute',
//   },
//   image: {height: 20, width: 20, marginTop: 10},
//   addDocument: {
//     fontWeight: '500',
//     fontSize: 16,
//     marginBottom: 20,
//     color: 'black',
//   },
//   buttonView: {
//     backgroundColor: 'white',
//     height: 50,
//     width: '80%',
//     borderRadius: 10,
//   },
//   buttonText: {
//     fontWeight: 'bold',
//     fontSize: 16,
//     color: '#FE4D4D',
//     fontWeight: '700',
//   },
// });

// //make this component available to the app
// export default Temp;
