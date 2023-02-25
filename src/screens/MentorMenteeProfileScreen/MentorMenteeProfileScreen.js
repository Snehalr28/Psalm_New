import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
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
import {Button} from '../../components/Button';
// import {styles} from './MentorMenteeProfileScreen.styles';
// import {DateTimePickerModal} from 'react-native-modal-datetime-picker';
import {Dropdown} from 'react-native-element-dropdown';
import CustomDropdown from '../../components/customDropdown';
import CustomHeader from '../../components/customHeader';
import {FetchProfileData, updateMentor} from '../../actions/UserActions';
import {styles} from './MentorMenteeProfileScreen.styles';
import {TextInputComponent} from '../../components/textInputComponent/TextInputComponent';
export const MentorMenteeProfile = props => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
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

          if (cb.messageID === 200) {
            setFirstName(cb.data.firstName);
            setLastName(cb.data.lastName);
            setEmail(cb.data.email);
            setRole(cb.data.role);
            setNumber(cb.data.number);
            // navigation.navigate('ProgramList');
          }
        }
      }),
    );
  };

  const handleSubmitButton = () => {
    let updateMentorOb = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      role: role,
      phone: number,
      bio: bio,
      language: language,
      address: address,
      city: city,
      province: province,
      postalcode: postalCode,
      image: '',
      country_code: '+91',
      _id: getuserData.response.data._id,
    };

    console.log('updateMentorOb', updateMentorOb);
    dispatch(
      updateMentor(updateMentorOb, cb => {
        console.log('update mentor data got');
        console.log('update mentor CB ', cb);
        if (cb != false) {
          if (cb.messageID == 200) {
            alert('Profile Updated successfully');
          }
        }
      }),
    );
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

  // const [date, setDate] = useState('');
  // const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  // console.log('is datepicker open', isDatePickerVisible);

  // const showDatePicker = () => {
  //   setDatePickerVisibility(true);
  // };

  // const hideDatePicker = () => {
  //   setDatePickerVisibility(false);
  // };

  // const handleConfirm = date => {
  //   console.log('datettttvyvyuvu', date);
  //   setDob(date);
  //   hideDatePicker();
  // };

  // const getDate = () => {
  //   let tempDate = Dob.toString().split(' ');
  //   return Dob !== '' ? `${tempDate[2]} ${tempDate[1]} ${tempDate[3]}` : '';
  // };

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
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Create Profile"
        leftIcon={require('../../assets/Icons/userProfile.png')}
        rightIcon={require('../../assets/Icons/Notification1.png')}
      />
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.profileStyle}>
          <TouchableOpacity>
            <Image
              style={styles.profileImage}
              source={require('../../assets/Icons/camera.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.textMentor}>
          {/* {userData.response.data.role == 1 ? (
              <Text style={styles.MentorTextStyle}>Mentor</Text>
            ) : (
              <Text style={styles.MentorTextStyle}>Mentee</Text>
            )} */}
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

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Date of Birth'}
          label={'Date of Birth'}
          onChangeText={setDob}
          value={Dob}
          emailIconView={styles.imageView}
          emailIcon={styles.image}
          source={require('../../assets/Icons/Calendar.png')}
          // onPress={showDatePicker}
        />

        {/* <View>
            <TouchableOpacity onPress={showDatePicker}>
              <Image
                // style={styles.image}
                source={require('../../assets/Icons/Calendar.png')}
              />
              <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                display={'inline'}
              />
            </TouchableOpacity>
          </View> */}

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
            onChangeText={e => setBio(e)}
          />
        </View>

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Verification ID'}
          label={'Verification ID'}
          onChangeText={setVerification}
          value={verification}
          emailIconView={styles.imageView}
          emailIcon={styles.image}
          source={require('../../assets/Icons/Group.png')}
        />

        <CustomDropdown
          data={LanguageData}
          value={selectLang}
          labelField="label"
          valueField="value"
          placeholder="Language"
          onChange={item => setSelectLang(item.value)}
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

        <View style={styles.dynamicView}>
          <Text style={styles.addDocument}>Add Documents</Text>
          <Text style={styles.SkillText}>Skill Certification</Text>
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
                  <TextInputComponent
                    emailView={styles.textInputView}
                    placeholder={'"Skill Name"'}
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
                  />

                  <View
                    style={{
                      justifyContent: 'center',
                      alignContent: 'center',
                      alignSelf: 'flex-start',
                      marginTop: 2,
                    }}>
                    {item.isAdded ? (
                      <TouchableOpacity
                        style={{}}
                        onPress={() => RemoveMed(index)}>
                        <Text style={{color: 'red', fontSize: 18}}>Remove</Text>
                      </TouchableOpacity>
                    ) : (
                      <TouchableOpacity
                        style={{}}
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
        <Button
          style={{marginBottom: 15, marginTop: 5}}
          onPress={() => {
            handleSubmitButton();
            // navigation.navigate('Add Bank Details');
            console.log('button');
          }}
          title={'Add Bank Account'}
        />
        <Button
          style={{marginBottom: 35, marginTop: 5}}
          // style={styles.button}
          onPress={() => {
            handleSubmitButton();
            navigation.navigate('AddProgram');
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
