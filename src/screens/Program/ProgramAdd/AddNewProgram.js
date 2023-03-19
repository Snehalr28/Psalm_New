import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addMentor, logout, updateMentor} from '../../../actions/UserActions';
import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Pressable,
  Modal,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import {Button} from '../../../components/Button';
import {styles} from './AddNewProgram.styles';
import CustomHeader from '../../../components/customHeader';
import CustomDropdown from '../../../components/customDropdown';
import DatePicker from 'react-native-date-picker';
import {useFocusEffect} from '@react-navigation/native';
import {getUser} from '../../../selectors/UserSelectors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ImageViewing from 'react-native-image-viewing';
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
const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export function AddNewProgram({route}) {
  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setProgramName('');
        setPrice('');
        setAllow('');
        setCertificate('');
        setDescription('');
        setNewStartDate(new Date());
        setOpenStart(false);
        setSelectedNewStartDate('');
        setSelectedEndDate('');
        setEndDate(new Date());
        setOpenEnd(false);
        setFrom(new Date());
        setOpenTimeFrom(false);
        setSelectedFromTime('');
        setTo(new Date());
        setOpenTo(false);
        setSelectedToTime('');
        setModalVisible(false);
        setthumbnailImageClick(false);
        setThumbnailResponse(null);
        setthumbnailName(null);
        setthumbnailuri(null);
        setCerificateClick(false);
        setSkillCertificateresponse(null);
        setSkillResponseName(null);
        setSkillResponseURI(null);
        setEmpty(false);
      };
    }, []),
  );

  const dispatch = useDispatch();
  const {passId} = route.params;
  const {title} = route.params;

  console.log('program Id for add new', passId);
  console.log('Title for add new ', title);
  console.log('Title for add new ');
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

  const [newStartDate, setNewStartDate] = useState(new Date());
  const [openStart, setOpenStart] = useState(false);
  const [selectedNewStartDate, setSelectedNewStartDate] = useState('');
  const [selectedEndDate, setSelectedEndDate] = useState('');
  console.log('New start date', selectedNewStartDate);
  console.log('New end date', selectedEndDate);

  const [endDate, setEndDate] = useState(new Date());
  // const [endDate, setEndDate] = useState();
  const [openEnd, setOpenEnd] = useState(false);

  console.log('Date check', endDate, openEnd);
  console.log('Date check//', openEnd);

  const [from, setFrom] = useState(new Date());
  const [openTimeFrom, setOpenTimeFrom] = useState(false);
  const [selectedFromTime, setSelectedFromTime] = useState('');
  console.log('selectedFromTime from ---->>>', selectedFromTime);
  const [to, setTo] = useState(new Date());
  const [openTo, setOpenTo] = useState(false);
  const [selectedToTime, setSelectedToTime] = useState('');
  console.log('selectedFromTime TO--->>>', selectedToTime);
  const [modalVisible, setModalVisible] = useState(false);
  const [thubnailImageClick, setthumbnailImageClick] = useState(false);
  const [thumbnailresponse, setThumbnailResponse] = useState(null);
  const [thumbnailName, setthumbnailName] = useState(null);
  const [thumbnailuri, setthumbnailuri] = useState(null);
  console.log('thumbnail', thumbnailresponse);
  console.log('verify image click response check', thubnailImageClick);
  console.log('Verify image name check', thumbnailName);

  const [skillcerificateClick, setCerificateClick] = useState(false);
  const [skillCertificateresponse, setSkillCertificateresponse] =
    useState(null);
  const [skillresponseName, setSkillResponseName] = useState(null);
  const [skillresponseuri, setSkillResponseURI] = useState(null);

  console.log('Skill Certificate of add program', skillcerificateClick);
  console.log('skill image click response check', skillCertificateresponse);
  console.log('skill image name check', skillresponseName);

  console.log('thumbnail response', thumbnailresponse);
  console.log('skill response', skillCertificateresponse);

  const handleStartChange = newDate => {
    setSelectedNewStartDate(newDate.toISOString().slice(0, 10));
    setOpenStart(false);
    setNewStartDate(newDate);
  };

  const handleEndChange = newDate => {
    setSelectedEndDate(newDate.toISOString().slice(0, 10));
    setOpenEnd(false);
    setEndDate(newDate);
  };

  const handleFromChange = newDate => {
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;

    setSelectedFromTime(formattedTime);
    setOpenTimeFrom(false);
    setFrom(newDate);
  };

  const handleToChange = newDate => {
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
    setSelectedToTime(formattedTime);
    setOpenTo(false);
    setTo(newDate);
  };

  const navigation = useNavigation();
  let getuserData = useSelector(getUser);
  console.log('Add New Program User ID', getuserData.response.data._id);

  const handleSubmitButton = props => {
    let file = thumbnailresponse
      ? {
          uri: thumbnailresponse?.assets[0]?.uri,
          name: thumbnailresponse?.assets[0]?.fileName,
          type: thumbnailresponse?.assets[0]?.type,
        }
      : null;

    let file1 = skillCertificateresponse
      ? {
          uri: skillCertificateresponse?.assets[0]?.uri,
          name: skillCertificateresponse?.assets[0]?.fileName,
          type: skillCertificateresponse?.assets[0]?.type,
        }
      : null;

    let formdata = new FormData();

    if (file != null) {
      formdata.append('image', file);
    }

    console.log('check file1', file);

    if (file1 != null) {
      formdata.append('skills', file1);
    }

    console.log('check file12', file1);

    formdata.append('category_id', passId);
    // formdata.append('category_id', '63c936090a9a959d9ed369d3');
    formdata.append('mentorship_name', programName);
    formdata.append('description', description);
    formdata.append('mentorship_mode', value);
    formdata.append('start_date', selectedNewStartDate);
    formdata.append('expiry_date', selectedEndDate);
    formdata.append('experience', exp);
    formdata.append('price', price);
    formdata.append('mentee_limit', allow);
    formdata.append('user_id', getuserData.response.data._id);
    formdata.append('availibility_from', selectedFromTime);
    formdata.append('availibility_to', selectedToTime);

    console.log('Add New Program formdataobject', JSON.stringify(formdata));
    try {
      dispatch(
        addMentor(formdata, cb => {
          console.log('Add program cb response', cb);
          if (cb != false) {
            if (cb.messageID == 200) {
              alert('Program Added Successfully');
              navigation.navigate('ProgramList', {
                passId: passId,
                title: title,
              });
            }
          }
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };

  const data = [
    {label: 'Online', value: '1'},
    {label: 'Offline', value: '2'},
    // {label: 'Other', value: 'Other'},
  ];
  const [value, setValue] = useState(null);

  const year = [
    {label: '0-1 Month', value: '0-1 Month'},
    {label: '6 Months', value: '6 Months'},
    {label: '1 Year', value: '1 Year'},
    {label: '2 Year', value: '2 Year'},
    {label: '3 Year', value: '3 Year'},
    {label: '4 Year', value: '4 Year'},
    {label: '5 Year', value: '5 Year'},
    {label: '6 Year', value: '6 Year'},
    {label: '7 Year', value: '7 Year'},
    {label: '8 Year', value: '8 Year'},
    {label: '9 Year', value: '9 Year'},
    {label: '10 Year', value: '10 Year'},
    // {label: 'Other', value: 'Other'},
  ];
  const [exp, setExp] = useState(null);

  const navigateBack = () => {
    navigation.goBack();
  };

  const handleImageLibrary = clickType => {
    launchImageLibrary(actions[1].options, response => {
      if (clickType === 'thumbnail') {
        setThumbnailResponse(response);
        setthumbnailName(response?.assets[0]?.fileName);
        setthumbnailuri(response?.assets[0]?.uri);
      } else if (clickType === 'certificate') {
        setSkillCertificateresponse(response);
        setSkillResponseName(response?.assets[0]?.fileName);
        setSkillResponseURI(response?.assets[0]?.uri);
      }
    });
  };

  // const loginButtonPressed = () => {
  //   if (programName === '' || price === '' || ) {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  // };
  // const loginButtonPressed = () => {
  //   if (programName ==="" && value ===""  && exp ===""  && price ===""  && allow ===""  && selectedNewStartDate ===""  &&!selectedFromTime  ===""  && !selectedToTime ===""  && !selectedEndDate ==="" ) {
  //     // setEmpty(true);
  //   } else {
  //     console.log('Form submitted!');
  //     // setEmpty(false);
  //   }
  // };
  const [formErrors, setFormErrors] = useState({
    programName: false,
    value: false,
    exp: false,
    price: false,
    allow: false,
    selectedNewStartDate: false,
    selectedFromTime: false,
    selectedToTime: false,
    selectedEndDate: false,
  });
  // const [empty, setEmpty] = useState(false);

  // const loginButtonPressed = () => {
  //   if (!programName) {
  //     // errors.programName = true;
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  //   if (value === '') {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  //   if (exp === '') {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  //   if (price === '') {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  //   if (allow === '') {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  //   if (selectedNewStartDate === '') {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  //   if (!selectedFromTime) {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  //   if (!selectedToTime) {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  //   if (!selectedEndDate) {
  //     setEmpty(true);
  //   } else {
  //     setEmpty(false);
  //   }
  // };

  const [empty, setEmpty] = useState(false);

  const loginButtonPressed = () => {
    if (
      !programName ||
      value === '' ||
      exp === '' ||
      price === '' ||
      allow === '' ||
      selectedNewStartDate === '' ||
      !selectedFromTime ||
      !selectedToTime ||
      !selectedEndDate
    ) {
      setEmpty(true);
    } else {
      console.log('Form submitted!');
      setEmpty(false);
    }
  };

  // const [validLink, setValidLink] = useState(false)
  // const validatePassword = password => {
  //   let reg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,50}$/;
  //   if (reg.test(password) === false) {
  //     setCheckPassword(true);
  //     setEmpty(false);
  //   } else {
  //     setEmpty(false);
  //     setCheckPassword(false);
  //   }
  // };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          marginLeft: 18,
          marginRight: 20,
          marginTop: 10,
        }}>
        <CustomHeader
          title="Add New Program"
          // textStyle={{marginLeft:1}}
          leftIcon={require('../../../assets/Icons/BackIcon.png')}
          rightIcon={require('../../../assets/Icons/Notification1.png')}
          // onPress={(e) => {console.log("press on user ");}}
        />
      </View>

      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            marginTop: 15,
            marginLeft: 18,
            marginRight: 20,
            marginBottom: '20%',
          }}>
          {thumbnailresponse == null ? (
            <View style={styles.textInputMianView}>
              <TouchableOpacity
                onPress={() => {
                  setModalVisible(true);
                  setCerificateClick(false);
                  setthumbnailImageClick(true);
                }}>
                <Image
                  style={styles.imageStyle}
                  source={require('../../../assets/Icons/addProgram.png')}
                />
                <Text style={styles.uploadText}>Upload Program Thumbnail</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
            // style={styles.textInputMianView}
            >
              <Image
                style={{height: 100, width: 100, alignSelf: 'center'}}
                source={{
                  uri: thumbnailuri,
                  // uri: 'https://reactnative.dev/img/tiny_logo.png',
                }}
              />
            </View>
          )}

          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 22,
            }}>
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
                    <Text
                      style={{
                        fontSize: 17,
                        color: 'black',
                        fontWeight: 'bold',
                      }}>
                      Add Image
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        setModalVisible(false);
                      }}></TouchableOpacity>

                    <TouchableOpacity
                      onPress={() =>
                        launchImageLibrary(actions[1].options, response => {
                          if (thubnailImageClick) {
                            setThumbnailResponse(response);
                            setthumbnailName(response?.assets[0]?.fileName);
                            setthumbnailuri(response?.assets[0]?.uri);
                          } else if (skillcerificateClick) {
                            setSkillCertificateresponse(response);
                            setSkillResponseName(response?.assets[0]?.fileName);
                          } else {
                            setModalVisible(false);
                          }
                        })
                      }>
                      <Text style={{fontSize: 15, color: 'black'}}>
                        Choose image
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <Pressable onPress={() => setModalVisible(!modalVisible)}>
                    <Text
                      style={{
                        color: 'black',
                        marginTop: 10,
                        backgroundColor: 'lightgrey',
                        paddingVertical: 12,
                        paddingHorizontal: 10,
                        borderRadius: 10,
                        fontSize: 10,
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
            placeholder={'Program Name'}
            label={'Program Name*'}
            value={programName}
            onChangeText={e => setProgramName(e)}
            styleInput={styles.styleInput}
            empty={empty && !programName}
            error={false}
            TextMessage={'Program Name is required'}
            condtionText={{color: 'red'}}
          />

          <CustomDropdown
            data={data}
            value={value}
            labelField="label"
            valueField="value"
            placeholder="Mentorship Mode*"
            onChange={item => setValue(item.value)}
            empty={empty && !value}
            error={false}
            TextMessage={'Program Name is required'}
            condtionText={{color: 'red'}}
          />

          {/* <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Year of Exprience'}
            label={'Year of Exprience'}
            value={mentorshipMode}
            onChangeText={e => setMentorshipMode(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Vector.png')}
          /> */}
          <CustomDropdown
            data={year}
            value={exp}
            labelField="label"
            valueField="value"
            placeholder="Year of Exprience*"
            onChange={item => setExp(item.value)}
            empty={empty && !year}
            error={false}
            TextMessage={'Program Name is required'}
            condtionText={{color: 'red'}}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Price'}
            label={'Price*'}
            value={price}
            onChangeText={e => setPrice(e)}
            keyboardType="numeric"
            empty={empty && !price}
            error={false}
            TextMessage={'Price is required'}
            condtionText={{color: 'red'}}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentee Allowed'}
            label={'Mentee Allowed*'}
            value={allow}
            onChangeText={e => setAllow(e)}
            keyboardType="numeric"
            empty={empty && !allow}
            error={false}
            TextMessage={'Number of Mentee is required'}
            condtionText={{color: 'red'}}
          />

          <View>
            <TextInputComponent
              emailView={styles.textInputView}
              placeholder={'Start Date'}
              label={'Start Date*'}
              value={selectedNewStartDate}
              onFocus={() => setOpenStart(true)}
              onPress={() => setOpenStart(true)}
              emailIconView={styles.imageViewStyle}
              emailIcon={styles.imageIconStyle}
              source={require('../../../assets/Icons/Calendar.png')}
              empty={empty && !selectedNewStartDate}
              error={false}
              TextMessage={'Start date is required'}
              condtionText={{color: 'red'}}
            />
            <DatePicker
              mode="date"
              modal
              open={openStart}
              date={newStartDate}
              onConfirm={handleStartChange}
              onCancel={() => setOpenStart(false)}
              minimumDate={new Date()}
              // maximumDate={new Date('2023-12-31')}
            />
          </View>

          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextInputComponent
              styleInput={{width: 180}}
              emailView={styles.textInputView}
              placeholder={'Availability From'}
              label={'Availability From'}
              // value={available}
              // onChangeText={e => setAvailable(e)}
              value={selectedFromTime}
              onFocus={() => setOpenTimeFrom(true)}
              onPress={() => setOpenTimeFrom(true)}
              emailIconView={styles.imageViewStyle}
              emailIcon={[
                styles.imageIconStyle,
                {height: 15, width: 15, marginTop: 15, marginRight: 5},
              ]}
              source={require('../../../assets/Icons/timeClock.png')}
            />

            <DatePicker
              mode="time"
              modal
              open={openTimeFrom}
              date={from}
              onConfirm={handleFromChange}
              onCancel={() => setOpenTimeFrom(false)}
              // minimumDate={new Date()}
            />

            <TextInputComponent
              styleInput={{width: 180}}
              emailView={styles.textInputView}
              placeholder={'Availability To'}
              label={'Availability To'}
              // value={available}
              // onChangeText={e => setAvailable(e)}
              value={selectedToTime}
              onFocus={() => setOpenTo(true)}
              onPress={() => setOpenTo(true)}
              emailIconView={styles.imageViewStyle}
              emailIcon={[
                styles.imageIconStyle,
                {height: 15, width: 15, marginTop: 15, marginRight: 5},
              ]}
              source={require('../../../assets/Icons/timeClock.png')}
            />

            <DatePicker
              mode="time"
              modal
              open={openTo}
              date={to}
              onConfirm={handleToChange}
              onCancel={() => setOpenTo(false)}
            />
          </View>

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Pgrogram Expiry Date'}
            label={'Program Expiry Date*'}
            value={selectedEndDate}
            onFocus={() => setOpenEnd(true)}
            onPress={() => setOpenEnd(true)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Calendar.png')}
            empty={empty && !selectedEndDate}
            error={false}
            TextMessage={'Program expiry date is required'}
            condtionText={{color: 'red'}}
          />
          <DatePicker
            mode="date"
            modal
            open={openEnd}
            date={endDate}
            onConfirm={handleEndChange}
            onCancel={() => setOpenEnd(false)}
            minimumDate={newStartDate}
            // maximumDate={new Date('2023-12-31')}
          />
          {/* <TextInputComponent
              editable={false}
              emailView={styles.textInputView}
              // styleInput={{width: 300}}
              placeholder={'Upload Skill Certificate'}
              label={'Upload Skill Certificate'}
              value={skillresponseuri}
              // value={certificate}
              onChangeText={e => setCertificate(e)}
              emailIconView={[styles.imageViewStyle, {alignSelf: 'flex-end'}]}
              emailIcon={[styles.imageIconStyle]}
              source={require('../../../assets/Icons/Group.png')}
              // onPress={() => {
              //   setModalVisible(true);
              //   setCerificateClick(true);
              //   setthumbnailImageClick(false);
              // }}
              onPress={() => handleImageLibrary('certificate')}
            />
          <View style={{flexDirection: 'row', marginRight:30, justifyContent:"space-between"}}>
            <TextInputComponent
              editable={false}
              emailView={styles.textInputView}
              styleInput={{width: 300}}
              placeholder={'Upload Skill Certificate'}
              label={'Upload Skill Certificate'}
              value={skillresponseuri}
              // value={certificate}
              onChangeText={e => setCertificate(e)}
              emailIconView={[styles.imageViewStyle, {alignSelf: 'flex-end'}]}
              emailIcon={[styles.imageIconStyle]}
              source={require('../../../assets/Icons/Group.png')}
              // onPress={() => {
              //   setModalVisible(true);
              //   setCerificateClick(true);
              //   setthumbnailImageClick(false);
              // }}
              onPress={() => handleImageLibrary('certificate')}
            />
            <View style={{marginTop: 30, marginLeft: 15}}>
              <TouchableOpacity
                onPress={() => {
                  // handlePdfPress(item);
                  setModalVisible(true);
                }}>
                <Image
                  style={{height: 25, width: 25, borderRadius: 5}}
                  source={{
                    uri: skillresponseuri,
                    // uri: 'https://reactnative.dev/img/tiny_logo.png',
                  }}
                />
              </TouchableOpacity>
            </View>
            <ImageViewing
              images={[{uri: skillresponseuri}]}
              visible={modalVisible}
              onRequestClose={() => setModalVisible(false)}
            />
          </View> */}
          {skillresponseuri ? (
            <View
              style={{
                flexDirection: 'row',
                marginRight: 30,
                justifyContent: 'space-between',
              }}>
              <TextInputComponent
                editable={false}
                emailView={styles.textInputView}
                styleInput={{width: 300}}
                placeholder={'Upload Skill Certificate'}
                label={'Upload Skill Certificate'}
                // value={skillresponseuri}
                onChangeText={e => setCertificate(e)}
                emailIconView={[styles.imageViewStyle, {alignSelf: 'flex-end'}]}
                emailIcon={[styles.imageIconStyle]}
                source={require('../../../assets/Icons/Group.png')}
                onPress={() => handleImageLibrary('certificate')}
              />
              <View style={{marginTop: 30, marginLeft: 15}}>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                  }}>
                  <Image
                    style={{height: 25, width: 25, borderRadius: 5}}
                    source={{
                      uri: skillresponseuri,
                    }}
                  />
                </TouchableOpacity>
              </View>
              <ImageViewing
                images={[{uri: skillresponseuri}]}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
              />
            </View>
          ) : (
            <TextInputComponent
              editable={false}
              emailView={styles.textInputView}
              // styleInput={{width: 300}}
              placeholder={'Upload Skill Certificate'}
              label={'Upload Skill Certificate'}
              // value={skillresponseuri}
              onChangeText={e => setCertificate(e)}
              emailIconView={[styles.imageViewStyle, {alignSelf: 'flex-end'}]}
              emailIcon={[styles.imageIconStyle]}
              source={require('../../../assets/Icons/Group.png')}
              onPress={() => handleImageLibrary('certificate')}
            />
          )}

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
              value={description}
              onChangeText={e => setDescription(e)}
            />
          </View>
          <Button
            onPress={() => {
              loginButtonPressed();
              handleSubmitButton();
              // navigation.navigate('programs', {passId: passId, title: title});
              // navigation.navigate('programs');
              console.log('button Clicked');
            }}
            title={'Add Program'}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
}
