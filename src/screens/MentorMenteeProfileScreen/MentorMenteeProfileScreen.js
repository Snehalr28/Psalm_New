import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../selectors/UserSelectors';
import {updateMentor} from '../../actions/UserActions';
import {TextInputComponent} from '../../components/textInputComponent/TextInputComponent';
export const MentorMenteeProfile = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [Dob, setDob] = useState('');
  const [verification, setVerification] = useState('');
  const [language, setLanguage] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [skillType, setSkillType] = useState('');
  const [skillName, setSkillName] = useState('');
  const [certificate, setCertificate] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [bioError, setBioError] = useState(false);
  const [DobError, setDobError] = useState(false);
  const [verificationError, setVerificationError] = useState(false);
  const [languageError, setLanguageError] = useState(false);
  const [addressError, setAddressError] = useState(false);
  const [cityError, setCityError] = useState(false);
  const [provinceError, setProvinceError] = useState(false);
  const [postalCodeError, setPostalCodeError] = useState(false);
  const [countryError, setCountryError] = useState(false);
  const [skillTypeError, setSkillTypeError] = useState(false);
  const [skillNameError, setSkillNameError] = useState(false);
  const [certificateError, setCertificateError] = useState(false);

  const navigation = useNavigation();
  let userData = useSelector(getUser);
  const dispatch = useDispatch();

  useEffect(() => {
    setFirstName(userData.response.data.name);
    setLastName(userData.response.data.name);
    setEmail(userData.response.data.email);
  }, []);

  const handleSubmitButton = () => {
 
    let updateMentorOb = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: userData.response.data.role,
      phone: number,
      bio: bio,
      // role: '1', //this should change after mentor mentee options available
      language: language,
      address: address,
      city: city,
      province: province,
      postalcode: postalCode,
      image: '',
      country_code: '+91',
      _id: userData.response.data._id,
    };
    // if (!emailError && !passwordError) {
    // dispatch(
    console.log('updateMentorOb', updateMentorOb);
    dispatch(
      updateMentor(updateMentorOb, cb => {
        console.log('CB', cb);
        if (cb != false) {
          if (cb.messageID == 200) {
          }
        }
      }),
    );
  };

  const validateName = firstName => {
    let reg = /^[a-z A-Z]+$/;
    if (reg.test(firstName) === false) {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
  };
  const firstNameChange = text => {
    setFirstName(text);
    validateName(text);
  };

  const validateLastName = firstName => {
    let reg = /^[a-z A-Z]+$/;
    if (reg.test(firstName) === false) {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
  };
  const lastNameChange = text => {
    setLastName(text);
    validateLastName(text);
  };

  const validateEmail = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };
  const emailChange = text => {
    setEmail(text);
    validateEmail(text);
  };

  const validateNumber = password => {
    let reg = /^\d{10}$/;
    if (reg.test(password) === false) {
      setNumberError(true);
    } else {
      setNumberError(false);
    }
  };
  const numberChange = text => {
    setNumber(text);
    validateNumber(text);
  };

  const validateGender = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setGenderError(true);
    } else {
      setGenderError(false);
    }
  };
  const genderChange = text => {
    setGender(text);
    validateGender(text);
  };

  const validateBio = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setBioError(true);
    } else {
      setBioError(false);
    }
  };
  const bioChange = text => {
    setBio(text);
    validateBio(text);
  };

  const validateVerification = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setVerificationError(true);
    } else {
      setVerificationError(false);
    }
  };
  const verificationChange = text => {
    setVerification(text);
    validateVerification(text);
  };

  const validateLanguage = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setLanguageError(true);
    } else {
      setLanguageError(false);
    }
  };
  const languageChange = text => {
    setLanguage(text);
    validateLanguage(text);
  };

  const validateAddress = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setAddressError(true);
    } else {
      setAddressError(false);
    }
  };
  const addressChange = text => {
    setAddress(text);
    validateAddress(text);
  };

  const validateCity = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setCityError(true);
    } else {
      setCityError(false);
    }
  };
  const cityChange = text => {
    setCity(text);
    validateCity(text);
  };

  const validateProvince = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setProvinceError(true);
    } else {
      setProvinceError(false);
    }
  };
  const changeProvince = text => {
    setProvince(text);
    validateProvince(text);
  };

  const validatePostalCode = password => {
    let reg = /^\d{10}$/;
    if (reg.test(password) === false) {
      setPostalCodeError(true);
    } else {
      setPostalCodeError(false);
    }
  };
  const postalCodeChange = text => {
    setPostalCode(text);
    validatePostalCode(text);
  };

  const validateCountry = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setCountryError(true);
    } else {
      setCountryError(false);
    }
  };
  const countryChnage = text => {
    setCountry(text);
    validateCountry(text);
  };

  const validateSkillName = firstName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(firstName) === false) {
      setSkillNameError(true);
    } else {
      setSkillNameError(false);
    }
  };
  const skillNameChange = text => {
    setSkillName(text);
    validateSkillName(text);
  };

  const [array, setArray] = useState([
    {skillType: '', skillName: '', certificate: '', isAdded: false},
  ]);
  const AddMed = (item, index) => {
    let temp = Object.assign([], array, {
      [index]: {...item, isAdded: true},
    });
    temp.push({
      skillType: '',
      skillName: '',
      certificate: '',
      isAdded: false,
    });
    setArray(temp);
  };
  const RemoveMed = index => {
    array.splice(index, 1);
    let temp = Object.assign([], array);
    setArray(temp);
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: 'column',
        padding: 25,
        backgroundColor: '#fff',
      }}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={{}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Icons/user.png')}
            />
            <Text
              style={{
                fontSize: 14,
                fontWeight: 'bold',
                marginLeft: '-55%',
                marginTop: 3,
              }}>
              Create Profile
            </Text>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/Icons/Notification.png')}
            />
          </View>

          <View
            style={{
              backgroundColor: '#ced4da',
              justifyContent: 'center',
              alignItems: 'center',
              height: 80,
              width: 80,
              borderRadius: 50,
              flex: 1,
              marginTop: 30,
              marginLeft: 20,
            }}>
            <TouchableOpacity>
              <Image
                style={{height: 30, width: 30, marginRight: 10, marginLeft: 10}}
                source={require('../../assets/Icons/camera.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', marginTop: 25, marginBottom: 15}}>
          {userData.response.data.role==1?(<Text style={styles.MentorTextStyle}>Mentor</Text>):(<Text style={styles.MentorTextStyle}>Mentee</Text>)}  
          </View>

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Enter Your First Namel'}
            label={'First Name'}
            onChangeText={firstNameChange}
            value={firstName}
            error={firstNameError}
            TextMessageAlert={'Enter your First Name'}
            condtionText={{color: 'red'}}
            checkCondtion={firstNameError}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Enter Your Last Namel'}
            label={'Last Name'}
            onChangeText={lastNameChange}
            value={lastName}
            error={lastNameError}
            TextMessageAlert={'Enter your Last Name'}
            condtionText={{color: 'red'}}
            checkCondtion={lastNameError}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Email'}
            label={'Email ID'}
            onChangeText={emailChange}
            value={email}
            // empty={empty}
            error={emailError}
            TextMessageAlert={'Email must be valid email address'}
            condtionText={{color: 'red'}}
            checkCondtion={emailError}
          />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              justifyContent: 'flex-start',
              // marginBottom:10
            }}>
            <View>
              <TextInput
                style={{marginRight: 20, width: 65}}
                placeholder="+1"
                mode="outlined"
                outlineColor="#E5E4E2"
                activeOutlineColor="black"
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>

            <TextInputComponent
              emailView={{borderRadius: 10, width: '76%'}}
              placeholder={'450 1450 1885'}
              label={'Number'}
              onChangeText={numberChange}
              value={number}
              error={numberError}
              TextMessageAlert={'Enter Your Number'}
              condtionText={{color: 'red'}}
              checkCondtion={numberError}
            />
          </View>

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Date of Birth'}
            label={'Date of Birth'}
            onChangeText={setDob}
            value={Dob}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/Icons/Calendar.png')}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Select Gender'}
            label={'Gender'}
            onChangeText={setGender}
            value={gender}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/Icons/Vector.png')}
          />

          <View style={[styles.textInputView, {marginBottom: 20}]}>
            {/* <TextInputComponent
            placeholder={'Write Your Bio'}
            label={'Bio'}
            onChangeText={setBio}
            value={bio}
            height={160}
            // height={160}
          /> */}
            <TextInput
              // style={{borderRadius: 10, width: '224%', height:"200%"}}
              multiline={true}
              placeholder="Write Your Bio"
              mode="outlined"
              label={'Bio'}
              outlineColor="#E5E4E2"
              activeOutlineColor="black"
              height={160}
              autoCapitalize="none"
              autoCorrect={false}
              value={bio}
              onChangeText={e => setBio(e)}
            />
          </View>

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Verification ID'}
            label={'Verification ID'}
            onChangeText={setVerification}
            value={verification}
          />

          {/* <View style={styles.textInputView}>
            <TextInput
              placeholder="Verification ID"
              mode="outlined"
              label={'Verification ID'}
              outlineColor="black"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              error={verificationError}
              value={verification}
              onChangeText={e => verificationChange(e)}
            />
            <HelperText type="error" visible={verificationError}>
              Verification ID is Required
            </HelperText>
          </View> */}

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Select Language'}
            label={'Language'}
            onChangeText={setLanguage}
            value={language}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/Icons/Vector.png')}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Enter Your Address'}
            label={'Address'}
            onChangeText={setAddress}
            value={address}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Enter Your City'}
            label={'City'}
            onChangeText={setCity}
            value={city}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Enter Your Province'}
            label={'Province'}
            onChangeText={setProvince}
            value={province}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Enter Your Postal Code'}
            label={'Postal Code'}
            onChangeText={setPostalCode}
            value={postalCode}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Enter Your Country'}
            label={'Country'}
            onChangeText={setCountry}
            value={country}
          />

          <View style={{marginTop: -15, marginBottom: 13}}>
            <Text style={styles.addDocument}>Add Documents</Text>
            <Text style={{fontWeight: '500', fontSize: 20, color: 'black'}}>
              Skill Certification
            </Text>
          </View>

          <View>
            <FlatList
              data={array}
              renderItem={({item, index}) => {
                return (
                  <View>
                    <TextInputComponent
                      emailView={styles.textInputView}
                      placeholder={'"Skill Type"'}
                      label={'Skill Type'}
                      value={item.skillType}
                      onChangeText={text =>
                        setArray(
                          Object.assign([], array, {
                            [index]: {...item, skillType: text},
                          }),
                        )
                      }
                    />
                    {/* <TextInput
                      label="Skill Type"
                      error={false}
                      autoCorrect={false}
                      autoCapitalize="none"
                      selectionColor={'red'}
                      activeOutlineColor={'black'}
                      mode="outlined"
                      style={styles.TextInputStyle}
                      placeholder="Skill Type"
                      value={item.skillType}
                      onChangeText={text =>
                        setArray(
                          Object.assign([], array, {
                            [index]: {...item, skillType: text},
                          }),
                        )
                      }
                    /> */}


<TextInputComponent
            emailView={styles.textInputView}
            placeholder={'"Skill Name"'}
            label={"Skill Name"}
            value={item.skillName}
            onChangeText={text =>
              setArray(
                Object.assign([], array, {
                  [index]: {...item, skillName: text},
                }),
              )
            }
            
          />
                    {/* <TextInput
                      label="Skill Name"
                      error={false}
                      autoCorrect={false}
                      autoCapitalize="none"
                      selectionColor={'red'}
                      activeOutlineColor={'black'}
                      mode="outlined"
                      style={styles.TextInputStyle}
                      placeholder="Skill Name"
                      value={item.skillName}
                      onChangeText={text =>
                        setArray(
                          Object.assign([], array, {
                            [index]: {...item, skillName: text},
                          }),
                        )
                      }
                    /> */}

<TextInputComponent
            emailView={styles.textInputView}
            placeholder={'"Upload Certificate"'}
            label={"Upload Certificate"}
            value={item.certificate}
            onChangeText={text =>
              setArray(
                Object.assign([], array, {
                  [index]: {...item, certificate: text},
                }),
              )
            }
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../assets/Icons/Group.png')}
            
          />
                    {/* <TextInput
                      label="Upload Certificate"
                      error={false}
                      autoCorrect={false}
                      autoCapitalize="none"
                      selectionColor={'red'}
                      activeOutlineColor={'black'}
                      mode="outlined"
                      style={styles.TextInputStyle}
                      keyboardType="numeric"
                      placeholder="Upload Certificate"
                      value={item.certificate}
                      keyboardType="numeric"
                      onChangeText={text =>
                        setArray(
                          Object.assign([], array, {
                            [index]: {...item, certificate: text},
                          }),
                        )
                      }
                    /> */}

                    <View
                      style={{
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignSelf: 'flex-start',
                        // paddingRight: 20,
                        marginTop: 20,
                      }}>
                      {item.isAdded ? (
                        <TouchableOpacity
                          style={{
                            // height: 30,
                            // width: 100,
                            // borderRadius: 20,
                            // borderWidth: 1,
                            // backgroundColor: 'black',
                            // alignItems: 'center',
                            // marginTop: 10,
                            // marginRight: 10,
                          }}
                          onPress={() => RemoveMed(index)}>
                          <Text style={{color: 'red', fontSize: 18}}>
                            Remove
                          </Text>
                        </TouchableOpacity>
                      ) : (
                        <TouchableOpacity
                          style={
                            {
                              // height: 35,
                              // width: 100,
                              // borderRadius: 20,
                              // borderWidth: 1,
                              // backgroundColor: "black",
                              // alignItems: "center",
                              // marginTop: 10,
                              // marginRight: 10,
                            }
                          }
                          onPress={() => AddMed(item, index)}>
                          <Text
                            style={{
                              color: 'black',
                              fontSize: 18,
                              fontWeight: '400',
                            }}>
                            Add More Skills
                          </Text>
                        </TouchableOpacity>
                      )}
                    </View>
                  </View>
                );
              }}
            />
          </View>

          {/* <View style={[styles.textInputView, {marginBottom: 15}]}>
            <TextInput
              placeholder="Enter Skill Type"
              mode="outlined"
              label={'Skill Type'}
              outlineColor="black"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              error={skillTypeError}
              value={skillType}
              onChangeText={e => setSkillType(e)}
            />
          </View> */}

          {/* <View style={styles.textInputView}>
            <TextInput
              placeholder="Enter Skill Name"
              mode="outlined"
              label={'Skill Name'}
              outlineColor="black"
              activeOutlineColor="black"
              style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              error={skillNameError}
              value={skillName}
              onChangeText={e => skillNameChange(e)}
            />
            <HelperText type="error" visible={skillNameError}>
              Enter Skill Name
            </HelperText>
          </View> */}

          {/* <View style={styles.textInputView}>
            <TextInput
              style={{borderRadius: 10}}
              placeholder="Enter Your Certificate"
              mode="outlined"
              label={'Upload Certificate'}
              outlineColor="black"
              activeOutlineColor="black"
              // style={{borderRadius: 10}}
              autoCapitalize="none"
              autoCorrect={false}
              // error={emailError}
              value={email}
              onChangeText={e => setCertificate(e)}
            />

            <View style={styles.imageViewStyle}>
              <Image
                style={styles.imageIconStyle}
                source={require('../../assets/Icons/Group.png')}
              />
            </View>
          </View> */}

          <View style={{marginTop: 15}}>
            {/* <Text style={styles.addDocument}>Add More Skills</Text> */}

            <View
              style={[styles.buttonView, {marginBottom: 20, marginTop: 10}]}>
              {/* <Button
            title='Save'
              textStyle={styles.buttonText}
            /> */}
              <TouchableOpacity
                onPress={() => navigation.navigate('Add Bank Details')}
                style={{
                  height: 50,
                  width: '125%',
                  backgroundColor: '#FE4D4D',
                  justifyContent: 'center',
                  alignItems: 'center',
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
                  Add Bank Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginBottom: '15%'}}>
            <TouchableOpacity
              onPress={() => handleSubmitButton()}
              //  onPress={() => navigation.navigate('AddProgram')}
              style={{
                borderWidth: 1,
                height: '15%',
                width: '100%',
                borderRadius: 10,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#FE4D4D',
              }}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '700',
                  alignSelf: 'center',
                  fontSize: 16,
                  color: '#FE4D4D',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* <View style={{flex: 2, marginBottom: 30}}>
      
      </View> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  MentorTextStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginRight: 25,
  },
  MenteeTextStyle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginLeft: 25,
  },
  switchStyle: {
    // marginTop:
  },
  textInputView: {
    marginTop: '5%',
    // marginLeft: '10%',
    // marginRight: '10%',
    // marginBottom: 10,
  },
  requiredView: {marginBottom: '-8%', marginTop: 5},
  requiredText: {marginLeft: '21%', color: '#FF0000'},
  textInputField: {borderWidth: 1, borderRadius: 10, borderColor: '#313131'},
  imageViewStyle: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: '8%',
    position: 'absolute',
  },
  imageIconStyle: {height: 20, width: 20, marginTop: 13},
  imageView: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginRight: '10%',
    position: 'absolute',
  },
  image: {height: 20, width: 20, marginTop: 10},
  addDocument: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
    marginTop: 30,
  },
  buttonView: {
    backgroundColor: 'white',
    height: 50,
    width: '80%',
    borderRadius: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FE4D4D',
    fontWeight: '700',
  },
});

