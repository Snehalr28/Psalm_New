import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {addMentor, logout} from '../../../actions/UserActions';
// import {Button} from '../../components';
import {strings} from '../../../localization';
// import {styles} from './Program.styles';
import {typography} from '../../../theme';
//import liraries
import React, {useState, useCallback} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
// import ImagePicker from 'react-native-image-picker';
import DateTimePickerModal from 'react-native-modal-datetime-picker';

// create a component

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export function AddNewProgram() {
  const {colors} = useTheme();
  const dispatch = useDispatch();

  const logoutUser = () => {
    dispatch(logout());
  };

  const [programName, setProgramName] = useState('');
  const [mentorshipMode, setMentorshipMode] = useState('');
  const [exprience, setExprience] = useState('');
  const [startDate, setStartDate] = useState('');
  const [price, setPrice] = useState('');
  const [allow, setAllow] = useState('');
  const [available, setAvailable] = useState('');
  const [programExpir, setProgramExpir] = useState('');
  const [certificate, setCertificate] = useState('');
  const [description, setDescription] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [programNameError, setProgramNameError] = useState(false);
  const [mentorshipModeError, setMentorshipModeError] = useState(false);
  const [exprienceError, setExprienceError] = useState(false);
  const [startDateError, setStartDateError] = useState(false);
  const [priceError, setPriceError] = useState(false);
  const [allowError, setAllowError] = useState(false);
  const [availableError, setAvailableError] = useState(false);
  const [programExpirError, setProgramExpirError] = useState(false);
  const navigation = useNavigation();

  console.log('add program data');

  const handleSubmitButton = ({navigation}) => {
    if (programName === '') {
      // Alert.alert("Email can not be blank")
      setProgramNameError(true);
    } else {
      setProgramNameError(false);
    }
    if (mentorshipMode === '') {
      // Alert.alert("Password can not be blank")
      setMentorshipModeError(true);
    } else {
      setMentorshipModeError(false);
    }
    if (exprience === '') {
      // Alert.alert("Password can not be blank")
      setExprienceError(true);
    } else {
      setExprienceError(false);
    }
    // if (startDate === '') {
    //   // Alert.alert("Password can not be blank")
    //   setStartDateError(true);
    // } else {
    //   setStartDateError(false);
    // }
    if (price === '') {
      // Alert.alert("Password can not be blank")
      setPriceError(true);
    } else {
      setPriceError(false);
    }
    if (allow === '') {
      // Alert.alert("Password can not be blank")
      setAllowError(true);
    } else {
      setAllowError(false);
    }
    if (available === '') {
      // Alert.alert("Password can not be blank")
      setAvailableError(true);
    } else {
      setAvailableError(false);
    }
    if (programExpir === '') {
      // Alert.alert("Password can not be blank")
      setProgramExpirError(true);
    } else {
      setProgramExpirError(false);
    }

    const addMentorObj = {
      category_id: "63ce4cb8655d803c9fdb5df7",
      mentorship_name: "Java Script",
      description: "java script classes",
      mentorship_mode: 1,
      start_date: "12/11/1981",
      expiry_date: "12/11/1991",
      duration: "1",
      experience: "10",
      price: "1500",
      payment_mode: "card",
      mentee_limit: "20",
      user_id: "63c7bff0ec3143ab8ae9af7c"
    };

    dispatch(
      addMentor(addMentorObj, cb => {
        console.log('CB', cb);
        if (cb != false) {
          if (cb.messageID == 200) {
          }
        }
      }),
    );

  };

  const validateProgramName = programName => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(programName) === false) {
      setProgramNameError(true);
    } else {
      setProgramNameError(false);
    }
  };
  const programNameChange = text => {
    setProgramName(text);
    validateProgramName(text);
  };

  const validateMentorshipMode = mentorship => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(mentorship) === false) {
      setMentorshipModeError(true);
    } else {
      setMentorshipModeError(false);
    }
  };
  const mentorshipModeChange = text => {
    setMentorshipMode(text);
    validateMentorshipMode(text);
  };

  const validatePrice = price => {
    let reg = /^\d{0,50}$/;
    if (reg.test(price) === false) {
      setPriceError(true);
    } else {
      setPriceError(false);
    }
  };
  const priceChange = text => {
    setPrice(text);
    validatePrice(text);
  };

  const validateAllow = allow => {
    let reg = /^\d{1,5000}$/;
    if (reg.test(allow) === false) {
      setAllowError(true);
    } else {
      setAllowError(false);
    }
  };
  const allowChange = text => {
    setAllow(text);
    validateAllow(text);
  };

  const validateAvailable = available => {
    let reg = /^\d{1,10}$/;
    if (reg.test(available) === false) {
      setAvailableError(true);
    } else {
      setAvailableError(false);
    }
  };
  const availableChange = text => {
    setAvailable(text);
    validateAvailable(text);
  };

  const validateProgramExpir = mentorship => {
    let reg = /^[a-zA-Z]+$/;
    if (reg.test(mentorship) === false) {
      setProgramExpirError(true);
    } else {
      setProgramExpirError(false);
    }
  };
  const programExpirChange = text => {
    setProgramExpir(text);
    validateProgramExpir(text);
  };
  const validateExprience = password => {
    let reg = /^\d{0,3}$/;
    if (reg.test(password) === false) {
      setExprienceError(true);
    } else {
      setExprienceError(false);
    }
  };
  const exprienceChange = text => {
    setExprience(text);
    validateExprience(text);
  };

  // //------------------------Image picker------------------------  */
  // const [hasGallaryPermission, setHasGallaryPermission] = useState(null);
  // const [image, setImage] = useState(null);
  // useEffect(() => {
  //   (async () => {
  //     const gallaryStatus =
  //       await ImagePicker.requestMediaLibraryPermissionsAsync();
  //     setHasGallaryPermission(gallaryStatus.status === 'granted');
  //   })();
  // }, []);

  // const pickImage = async () => {
  //   // No permissions request is necessary for launching the image library
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });
  //   console.log('********image********', result.uri);
  //   setImage(result.uri);
  //   // if (result) {
  //   //   console.log(result);
  //   // setImage({uri: result.assets[0].uri});
  //   // }
  //   // setImage(result);
  //   // console.log(result);
  //   // Alert.alert("image path", result);

  //   // if (!result.canceled) {
  //   //   setImage(result.assets[0].uri);
  //   // }
  // };

  // const handleChooseImage = useCallback(() => {
  //   ImagePicker.showImagePicker(
  //     {
  //       title: 'Select Image',
  //       storageOptions: {
  //         skipBackup: true,
  //         path: 'images',
  //       },
  //     },
  //     response => {
  //       if (response.didCancel) {
  //         console.log('User cancelled image picker');
  //       } else if (response.error) {
  //         console.log('ImagePicker Error: ', response.error);
  //       } else {
  //         setSelectedImage({uri: response.uri});
  //       }
  //     },
  //   );
  // }, []);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const selectedDateStr = selectedDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(date);
    hideDatePicker();
  };

  return (
    // <View style={styles.container}>
    //   <Text style={[typography.title, styles.title, {color: colors.text}]}>
    //     Program Screen
    //   </Text>
    //   {/* <Text style={[typography.title, styles.title, { color: colors.text }]}>
    //     {strings.profile.message}
    //   </Text> */}
    //   {/* <Button title={strings.profile.logout} onPress={logoutUser} /> */}
    //   <View style={{backgroundColor: '#FE4D4D'}}>
    //     <Button title="Logout" onPress={logoutUser} />
    //   </View>
    // </View>

    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <KeyboardAwareScrollView>
        <View
          style={{
            flex: 1,
            marginTop: 15,
            marginLeft: 18,
            marginRight: 20,
            marginBottom: '20%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginBottom: 10,
            }}>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../../assets/Icons/Notification.png')}></Image>
          </View>

          <View
            style={{
              height: '12%',
              width: '100%',
              borderWidth: 1,
              justifyContent: 'center',
              marginBottom: 10,
              borderRadius: 10,
              backgroundColor: 'white',
              marginBottom: 15,
              borderColor: '#E5E4E2',
            }}>
            <TouchableOpacity
              onPress={e => {
                console.log('select image');
                // selectImage();
              }}>
              <Image
                style={{height: 45, width: 45, alignSelf: 'center'}}
                source={require('../../../assets/Icons/addProgram.png')}
              />
              <Text style={{alignSelf: 'center', fontWeight: '400'}}>
                Upload Program Thumbnail
              </Text>
            </TouchableOpacity>

            {/* <View
            style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Button title="Choose Image" onPress={handleChooseImage} />
            {selectedImage && (
              // <Text>@</Text>
              <Image
                source={selectedImage}
                style={{width: 200, height: 200}}
              />
            )}
          </View> */}
          </View>

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Program Name'}
            label={'Program Name'}
            value={programName}
            onChangeText={e => setProgramName(e)}
          />
          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentorship Mode'}
            label={'Mentorship Mode'}
            value={exprience}
            onChangeText={e => setExprience(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Vector.png')}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Year of Exprience'}
            label={'Year of Exprience'}
            value={mentorshipMode}
            onChangeText={e => setMentorshipMode(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Vector.png')}
          />

          <View>
            <TextInputComponent
              emailView={styles.textInputView}
              placeholder={'Start Date'}
              label={'Start Date'}
              value={selectedDateStr}
              onChangeText={e => selectedDate(e)}
              onFocus={showDatePicker}
              emailIconView={styles.imageViewStyle}
              emailIcon={styles.imageIconStyle}
              source={require('../../../assets/Icons/Calendar.png')}
              // onPress={() => {
              //   // showDatePicker();
              //   console.log("show");
              // }}
              onPress={showDatePicker}
            />
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
              date={selectedDate}
              format="DD-MM-YYYY"
            />

            <TextInputComponent
              emailView={styles.textInputView}
              placeholder={'Price'}
              label={'Price'}
              value={price}
              onChangeText={e => setPrice(e)}
            />
          </View>

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentee Allowed'}
            label={'Mentee Allowed'}
            value={allow}
            onChangeText={e => setAllow(e)}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentor Availability'}
            label={'Mentor Availability'}
            value={available}
            onChangeText={e => setAvailable(e)}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Pgrogram Expiry Date'}
            label={'Pgrogram Expiry Date'}
            value={programExpir}
            onChangeText={e => setProgramExpir(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Calendar.png')}
            onPress={() => {
              console.log('press on Icon');
            }}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Upload Skill Certificate'}
            label={'Upload Skill Certificate'}
            value={certificate}
            onChangeText={e => setCertificate(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Group.png')}
            onPress={() => {
              console.log('press on Icon');
            }}
          />

          <View style={[styles.textInputView, {marginBottom: '10%'}]}>
            <TextInput
              multiline={true}
              placeholder="Program Description"
              mode="outlined"
              label={'Program Description'}
              outlineColor="#E5E4E2"
              activeOutlineColor="black"
              height={150}
              autoCapitalize="none"
              autoCorrect={false}
              // error={}
              value={description}
              onChangeText={e => setDescription(e)}
            />
          </View>

          <View style={[styles.buttonView, {marginBottom: 20, marginTop: 20}]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('programs')}
              // onPress={e => {
              //   handleSubmitButton(e);
              // }}
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
                Add Program
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}

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
  textInputView: {marginTop: 15},
  requiredView: {marginBottom: '-8%', marginTop: 5},
  requiredText: {marginLeft: '21%', color: '#FF0000'},
  textInputField: {borderWidth: 1, borderRadius: 10, borderColor: '#313131'},
  imageViewStyle: {
    alignSelf: 'flex-end',
    marginTop: 9,
    marginRight: '8%',
    position: 'absolute',
  },
  imageIconStyle: {height: 17, width: 19, marginTop: 13},
  imageView: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginRight: '10%',
    position: 'absolute',
  },
  image: {height: 20, width: 20, marginTop: 12},
  addDocument: {
    fontWeight: '500',
    fontSize: 16,
    marginBottom: 20,
    color: 'black',
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
