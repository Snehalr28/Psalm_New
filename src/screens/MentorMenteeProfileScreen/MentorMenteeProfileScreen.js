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
import {TextInput} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getUser} from '../../selectors/UserSelectors';
import {Button} from '../../components/Button';
// import {styles} from './MentorMenteeProfileScreen.styles';
// import {DateTimePickerModal} from 'react-native-modal-datetime-picker';
import {Dropdown} from 'react-native-element-dropdown';
import CustomDropdown from '../../components/customDropdown';
import CustomHeader from '../../components/customHeader';
import {FetchProfileData, updateMentor} from '../../actions/UserActions';
import {styles} from './MentorMenteeProfileScreen.styles';
import {TextInputComponent} from '../../components/textInputComponent/TextInputComponent';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import DatePicker from 'react-native-date-picker';
import {Alert, Modal, Pressable} from 'react-native';
import {setContentType} from '../../controllers/HttpClient';
import {baseURL} from '../../controllers/ApiList';

export const MentorMenteeProfile = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  

  const [skillImages, setSkillImages] = useState([{uri:"",type:"",name:""}]);
  const [number, setNumber] = useState('');
  const [gender, setGender] = useState('');
  const [bio, setBio] = useState('');
  const [Dob, setDob] = useState('');
  const [role, setRole] = useState('');
  const [verification, setVerification] = useState('');
  const [language, setLanguage] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [province, setProvince] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [skillName, setSkillName] = useState('');
  const [certificate, setCertificate] = useState('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [numberError, setNumberError] = useState(false);
  const [genderError, setGenderError] = useState(false);
  const [bioError, setBioError] = useState(false);
  const [DobError, setDobError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const [profileClick, setProfileClick] = useState(false);
  const [verifyImageClick, setVerifyImageClick] = useState(false);
  const [verifyCerificateClick, setverifyCerificateClick] = useState(false);

  const [response, setResponse] = useState(null);
  const [profileUri, setProfileUri] = useState(null);
  const [verifyresponse, setVerifyResponse] = useState(null);
  const [verifyName, setVerifyName] = useState(null);
  const [skillcertificateName, setskillcertificateName] = useState(null);
  console.log('verify image name', verifyName);
  const [skillresponse, setSkillResponse] = useState(null);

  const [file, setFilePath] = useState('');
  const [picture, setPicture] = useState({
    uri: 'file:///data/user/0/com.psalm/cache/rn_image_picker_lib_temp_adef412a-8380-4c9d-b8ad-60269f844f85.jpg',
    name: 'rn_image_picker_lib_temp_adef412a-8380-4c9d-b8ad-60269f844f85.jpg',
    type: 'image/jpeg',
  });
  console.log('Response of Image', response);
  console.log('Profile pictrure picked', response, profileClick);
  console.log('Verify pictrure picked', verifyresponse, verifyImageClick);
  console.log('Skill pictrure picked', skillresponse, verifyCerificateClick);
  // console.log("Response of Image --->", response.assets[0].uri)

  const actions = [
    {
      title: 'Take Image',
      type: 'capture',
      options: {
        saveToPhotos: true,
        mediaType: 'photo',
        includeBase64: false,
      },
    },
    {
      title: 'Select Image',
      type: 'library',
      options: {
        selectionLimit: 0,
        mediaType: 'photo',
        includeBase64: false,
      },
    },
  ];
  const navigation = useNavigation();
  const user = useSelector(getUser);
  console.log('mentor mentee data', user);
  let getuserData = useSelector(getUser);
  console.log('Mentor/mentee Id', getuserData.response.data._id);
  const dispatch = useDispatch();
  useEffect(() => {
    FetchAllData(getuserData.response.data._id);
    return () => {
      setFirstName('');
      setLastName('');
      setEmail('');
      setRole('');
      setNumber('');
      setGender('');
      setBio('');
      setDob('');
      setRole('');
      setVerification('');
      setLanguage('');
      setAddress('');
      setCity('');
      setProvince('');
      setPostalCode('');
      setCountry('');
      setSkillName('');
    };
  }, []);

  const FetchAllData = id_Param => {
    let DataOb = {user_id: id_Param};
    console.log('Fetch function call and ID', id_Param);
    dispatch(
      FetchProfileData(DataOb, cb => {
        console.log('Fetch Data response data', cb);
        if (cb != false) {
          console.log('First name is', cb.data.firstName);
          console.log('number name is', cb.data.phone);
          if (cb.messageID === 200) {
            setFirstName(cb.data.firstName);
            setLastName(cb.data.lastName);
            setEmail(cb.data.email);
            setRole(cb.data.role);
            setNumber(cb.data.phone);
            setBio(cb.data.bio);
            setLanguage(cb.data.language);
            setAddress(cb.data.address);
            setCity(cb.data.city);
            setProvince(cb.data.province);
            setPostalCode(cb.data.postalcode);
            setCountry(cb.data.country);
            setSkillName(cb.data.skillName);
            setProfileUri(baseURL + cb.data.image);
            
          }
        }
      }),
    );
  };

  const handleSubmitButton = () => {
    let file = response
      ? {
          uri: response?.assets[0]?.uri,
          name: response?.assets[0]?.fileName,
          type: response?.assets[0]?.type,
        }
      : null;

    // let file1 = {
    //   uri: verifyresponse?.assets[0]?.uri,
    //   name: verifyresponse?.assets[0]?.fileName,
    //   type: verifyresponse?.assets[0]?.type,
    // };

    let file2 = verifyresponse
      ? {
          uri: verifyresponse?.assets[0]?.uri,
          name: verifyresponse?.assets[0]?.fileName,
          type: verifyresponse?.assets[0]?.type,
        }
      : null;

    let file1 = skillresponse
      ? {
          uri: skillresponse?.assets[0]?.uri,
          name: skillresponse?.assets[0]?.fileName,
          type: skillresponse?.assets[0]?.type,
        }
      : null;





    let formdata = new FormData();

    if (file != null) {
      formdata.append('image', file);
    }

    if (file2 != null) {
      formdata.append('validationid', file2);
    }

    if (file1 != null) {
      formdata.append('skills', file1);
    }

    formdata.append('firstName', firstName);
    formdata.append('lastName', lastName);
    formdata.append('phone', number);
    formdata.append('status', 1);
    formdata.append('country_code', +91);
    formdata.append('gender', gender);
    formdata.append('bio', bio);
    formdata.append('city', city);
    formdata.append('postalcode', postalCode);
    formdata.append('address', address);
    formdata.append('language', language);
    formdata.append('date_of_birth', Dob);
    formdata.append('province', province);
    formdata.append('skillsdata',JSON.stringify(array))

    formdata.append('_id', getuserData.response.data._id);
    console.log('formdata._parts', formdata._parts);

    console.log('formdataobject', JSON.stringify(formdata));

    // if (firstName != '') {
    //   console.log('first name add');
    // } else if (email != '') {
    //   console.log('email add');
    // } else {
    //   console.log('else called');

      dispatch(
        updateMentor(formdata, cb => {
          console.log('update mentor data got');
          console.log('update mentor CB ', cb);
          if (cb != false) {
            if (cb.messageID == 200) {
              alert('Profile Updated successfully');
            }
          }
        }),
      );
    // }


   
  };

  const firstNameChange = text => {
    setFirstName(text);
  };

  const lastNameChange = text => {
    setLastName(text);
  };

  const emailChange = text => {
    setEmail(text);
  };

  const numberChange = text => {
    setNumber(text);
  };

  const setDobChange = text => {
    setDob(text);
  };

  const setBioChange = text => {
    setBio(text);
  };

  const setVerificationChange = text => {
    setVerification(text);
  };

  const setSelectLangChange = text => {
    setSelectLang(text);
  };

  const setAddressChange = text => {
    setAddress(text);
  };

  const setProvinceChange = text => {
    setProvince(text);
  };

  const setCityChange = text => {
    setCity(text);
  };
  const setPostalCodeChange = text => {
    setPostalCode(text);
  };

  const setCountryChange = text => {
    setCountry(text);
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


console.log("array value check",array)


  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedNewDate, setSelectedNewDate] = useState('');

  const handleDateChange = newDate => {
    setSelectedNewDate(newDate.toISOString().slice(0, 10));
    setOpen(false);
    setDate(newDate);
  };

  const data = [
    {label: 'Male', value: 'Male'},
    {label: 'Female', value: 'Female'},
    {label: 'Other', value: 'Other'},
  ];
  const [value, setValue] = useState(null);

  const LanguageData = [
    {label: 'English', value: 'English'},
    {label: 'Hindi', value: 'Hindi'},
    {label: 'Germani', value: 'Germani'},
    {label: 'French', value: 'French'},
    {label: 'Spanish', value: 'Spanish'},
    {label: 'Russian', value: 'Russian'},
    {label: 'Portuguese', value: 'Portuguese'},
    {label: 'Japanese', value: 'Japanese'},
    {label: 'Turkish', value: 'Turkish'},
    {label: 'Vietnamese', value: 'Vietnamese'},
    {label: 'Italian', value: 'Italian'},
  ];
  const [selectLang, setSelectLang] = useState(null);
  const locale = 'en-GB';
  const [inputDate, setInputDate] = React.useState(undefined);
  const dateFormatter = new Intl.DateTimeFormat(undefined, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Create Profile"
        leftIcon={require('../../assets/Icons/userProfile.png')}
        rightIcon={require('../../assets/Icons/Notification1.png')}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileStyle}>
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
              setVerifyImageClick(false);
              setProfileClick(true);
              setverifyCerificateClick(false);
            }}>
            <Image
              style={styles.profileImage}
              source={
                profileUri
                  ? {uri: profileUri}
                  // : require('../../assets/Icons/camera.png')
                  : null
              }
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textMentor}></View>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              console.log('Image clicked');
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                    }}></TouchableOpacity>

                  <TouchableOpacity
                    onPress={() =>
                      launchImageLibrary(actions[1].options, response => {
                        if (verifyImageClick) {
                          console.log('verification modal');
                          setVerifyResponse(response);
                          setVerifyName(response?.assets[0]?.fileName);
                        } else if (profileClick) {
                          console.log('profile modal');
                          setResponse(response);
                          setProfileUri(response?.assets[0]?.uri);
                        } else if (verifyCerificateClick) {
                          console.log('profile modal');
                          setSkillResponse(response)
                           // skillImages[0]={uri:""}
                          //  if (array.count == assets.count){
                          //   for (let arrayIndex = 0; arrayIndex < arrayIndex.length; index++) {
                          //     setskillcertificateName(response?.assets[arrayIndex]?.uri);
                          //   }

                          //  }
                        }
                        
                        else {
                          setModalVisible(false);
                        }
                      })
                    }>
                    <Text>Library</Text>
                  </TouchableOpacity>

                  {/* <TouchableOpacity
                      onPress={() =>
                        launchImageLibrary(actions[1].options, setVerifyResponse)
                      }>
                      <Text>Library</Text>
                    </TouchableOpacity> */}

                  {/* <TouchableOpacity
                      onPress={() =>
                        launchImageLibrary(actions[1].options, setSkillResponse)
                      }>
                      <Text>Library</Text>
                    </TouchableOpacity> */}
                </View>

                <Pressable onPress={() => setModalVisible(!modalVisible)}>
                  <Text
                    style={{
                      marginTop: 10,
                      backgroundColor: '#ECECEC',
                      paddingVertical: 10,
                      paddingHorizontal: 10,
                      borderRadius: 10,
                    }}>
                    Hide Modal
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
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
            marginRight: 10,
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
            emailView={{borderRadius: 10, width: '72%'}}
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

        {/* <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Date of Birth'}
          label={'Date of Birth'}
          onChangeText={setDobChange}
          value={Dob}
          emailIconView={styles.imageView}
          emailIcon={styles.image}
          source={require('../../assets/Icons/Calendar.png')}
          // onPress={showDatePicker}
        /> */}
        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Date of Birth'}
          label={'Date of Birth'}
          value={selectedNewDate}
          onFocus={() => setOpen(true)}
          onPress={() => setOpen(true)}
          emailIconView={styles.imageViewStyle}
          emailIcon={styles.imageIconStyle}
          source={require('../../assets/Icons/Calendar.png')}
        />
        <DatePicker
          mode="date"
          modal
          open={open}
          date={date}
          onConfirm={handleDateChange}
          onCancel={() => setOpen(false)}
        />
        <CustomDropdown
          data={data}
          value={value}
          labelField="label"
          valueField="value"
          placeholder="Gender"
          onChange={item => setValue(item.value)}
        />

        <View style={[styles.textInputView, {marginBottom: 20}]}>
          <TextInput
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
            onChangeText={setBioChange}
          />
        </View>

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Verification ID'}
          label={'Verification ID'}
          onChangeText={setVerificationChange}
          value={verifyName}
          emailIconView={styles.imageView}
          emailIcon={styles.image}
          source={require('../../assets/Icons/Group.png')}
          onPress={() => {
            setModalVisible(true), setVerifyImageClick(true);
            setProfileClick(false);
            setverifyCerificateClick(false);
          }}
        />

        <CustomDropdown
          data={LanguageData}
          value={selectLang}
          labelField="label"
          valueField="value"
          placeholder="Language"
          onChange={item => setSelectLangChange(item.value)}
        />

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Enter Your Address'}
          label={'Address'}
          onChangeText={setAddressChange}
          value={address}
        />

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Enter Your City'}
          label={'City'}
          onChangeText={setCityChange}
          value={city}
        />

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Enter Your Province'}
          label={'Province'}
          onChangeText={setProvinceChange}
          value={province}
        />

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Enter Your Postal Code'}
          label={'Postal Code'}
          onChangeText={setPostalCodeChange}
          value={postalCode}
        />

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Enter Your Country'}
          label={'Country'}
          onChangeText={setCountryChange}
          value={country}
        />

        <View style={styles.dynamicView}>
          <Text style={styles.addDocument}>Add Documents</Text>
          <Text style={styles.SkillText}>Skill Certification</Text>
        </View>

        <View>
          <FlatList
            data={array}
            renderItem={({item, index}) => {
              console.log("item data iss",item)
              return (
                <View>
                  <TextInputComponent
                    emailView={styles.textInputView}
                    placeholder={'Skill Type'}
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
                  <TextInputComponent
                    emailView={styles.textInputView}
                    placeholder={'Skill Name'}
                    label={'Skill Name'}
                    value={item.skillName}
                    onChangeText={text =>
                      setArray(
                        Object.assign([], array, {
                          [index]: {...item, skillName: text},
                        }),
                      )
                    }
                  />
                  <TextInputComponent
                    emailView={styles.textInputView}
                    placeholder={'"Upload Certificate"'}
                    label={'Upload Certificate'}
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
                    onPress={() => {
                      setModalVisible(true);
                      setVerifyImageClick(false);
                      setProfileClick(false);
                      setverifyCerificateClick(true);
                    }}
                  />

                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignSelf: 'flex-start',
                      marginTop: 20,
                    }}>
                    {item.isAdded ? (
                      <TouchableOpacity
                        style={{}}
                        onPress={() => RemoveMed(index)}>
                        <Text style={styles.remove}>Remove</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{}}
                        onPress={() => AddMed(item, index)}>
                        <Text style={styles.addMore}>Add More Skills</Text>
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              );
            }}
          />
        </View>
        <Button
          style={{marginBottom: 15, marginTop: 35}}
          onPress={() => {
            navigation.navigate('Add Bank Details');
            console.log('button');
          }}
          title={'Add Bank Account'}
        />
        <Button
          style={styles.button}
          onPress={() => {
            handleSubmitButton();
            console.log('button');
          }}
          textStyle={styles.buttonText}
          title={'Save'}
        />
        {/* </View> */}
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
