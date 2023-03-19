import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Modal,
  Pressable,
  Alert,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import {TextInput, HelperText} from 'react-native-paper';
import COLORS from '../../../constants/color';
import FONTS from '../../../constants/fonts';
import {Button} from '../../../components';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {addSession} from '../../../actions/UserActions';
import {getUser} from '../../../selectors/UserSelectors';
import CustomHeader from '../../../components/customHeader';
import {useNavigation} from '@react-navigation/native';
import {useFocusEffect} from '@react-navigation/native';

// import {styles} from './addsession.styles';
const AddSession = ({route, navigation}) => {
  // const navigation = useNavigation();
  let getuserData = useSelector(getUser);
  console.log('Get userId for program list', getuserData.response.data._id);
  const [sessionName, setSessionName] = useState('');
  const [sessionLink, setSessionLink] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [verifyresponse, setVerifyResponse] = useState(null);
  const [verifyName, setVerifyName] = useState(null);
  const [verifyImageClick, setVerifyImageClick] = useState(false);
  const [setverifyURI, setVerifyURI] = useState('');
  const {Time} = route.params;
  const {ProID} = route.params;
  const {ProDate} = route.params;


  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSessionName('');
        setSessionLink('');
        setDuration('');
        setLocation('');
        setDescription('');
        setModalVisible(false);
        setVerifyResponse(null);
        setVerifyName(null);
        setVerifyImageClick(false);
        setVerifyURI('');

      };
    }, []),
  );



  console.log('program time isss', Time);
  console.log('program id iss', ProID);
  console.log('program date iss', ProDate);
  console.log('Verify response of session', verifyresponse);
  console.log("Session link isss",sessionLink)
  const dispatch = useDispatch();
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

  const handleSubmitButton = props => {
    let formdata = new FormData();
    let file2 = verifyresponse
      ? {
          uri: verifyresponse?.assets[0]?.uri,
          name: verifyresponse?.assets[0]?.fileName,
          type: verifyresponse?.assets[0]?.type,
        }
      : null;

    if (file2 != null) {
      formdata.append('image', file2);
    }

    // formdata.append('user_id', passId);

    formdata.append('program_id', ProID);
    formdata.append('session_name', sessionName);
    formdata.append('session_link', sessionLink);
    formdata.append('start_date', ProDate);
    formdata.append('time', Time);
    formdata.append('session_duration', duration);
    formdata.append('location', location);
    // formdata.append('user_id', '63dc8a0cc4322e1b39df0f54');
    formdata.append('user_id', getuserData.response.data._id);
    formdata.append('description', description);

    // formdata.append('program_id', getuserData.response.data._id);
    // formdata.append('session_name', sessionName);
    // formdata.append('session_link', sessionLink);
    // formdata.append('start_date', ProDate);
    // formdata.append('time', Time);
    // formdata.append('session_duration', duration);
    // formdata.append('location', location);
    // formdata.append('user_id', '63dc8a0cc4322e1b39df0f54');
    // formdata.append('description', description);

    // formdata.append('program_id', ProID);

    console.log('Add New session formdataobject', JSON.stringify(formdata));
    try {
      dispatch(
        addSession(formdata, cb => {
          console.log('add session cb response', cb);
          if (cb != false) {
            if (cb.messageID == 200) {
              alert('session Added Successfully');
              navigation.navigate('programs', {
                //   passId: passId,
                //   title: title,
                ProgramID: ProID,
              })
              // navigation.navigate('ProgramList', {
              //   passId: passId,
              //   title: title,
              // });
            }
          }
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };
  const [empty, setEmpty] = useState(false);
  const epmtyMessage = () => {
    if (
      !sessionName ||
      // sessionLink === '' ||
      sessionLink === '' ||
      // !sessionLink.match(regex) ||
      duration === '' ||
      location === '' ||
      description === ''
    ) {
      setEmpty(true);
      setSessionLinkRegex(false)
    } else {
      console.log('Form submitted!');
      setEmpty(false);
      setSessionLinkRegex(false)
    }
  };
  const [sessionLinkRegex, setSessionLinkRegex] = useState(false);
  const validateSessionLink = () => {
    // const regex = '((http|https)://)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)'
    // const regex = /^(https?:\/\/)?(www\.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._\\+~#?&//=]*)$/;
  //   if (!sessionLink.match(regex)) {
  //     setSessionLinkRegex(true);
  //   } else {
  //     setSessionLinkRegex(false);
  //   }
  };  

  const linkChange = text => {
    setSessionLink(text)
    validateSessionLink(text);
  };
  const navigateBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <CustomHeader
        title="Add New Session"
        leftIcon={require('../../../assets/Icons/BackIcon.png')}
        onPressLeftIcon={navigateBack}
        rightIcon={require('../../../assets/Icons/Notification1.png')}
      /> */}
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        {verifyresponse == null ? (
          <View style={styles.textInputMianView}>
            <TouchableOpacity
              onPress={() => {
                setModalVisible(true);
                setVerifyImageClick(true);
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
                uri: setverifyURI,
                // uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
            />
          </View>
          // <View style={styles.textInputMianView}>
          //   <TouchableOpacity
          //     onPress={() => {
          //       setModalVisible(true);
          //       setVerifyImageClick(true);
          //     }}>
          //     <Image style={styles.imageStyle} source={{uri: setverifyURI}} />
          //     <Text style={styles.uploadText}>Upload Program Thumbnail</Text>
          //   </TouchableOpacity>
          // </View>
        )}

        <View style={styles.textMentor}></View>
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
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 22,
              }}>
              <View
                style={{
                  margin: 20,
                  backgroundColor: '#f1fdf9',
                  borderRadius: 20,
                  padding: 35,
                  alignItems: 'center',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}>
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
                        if (verifyImageClick) {
                          console.log('verification modal');
                          setVerifyResponse(response);
                          setVerifyName(response?.assets[0]?.fileName);
                          setVerifyURI(response?.assets[0]?.uri);
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
          placeholder={'Session Name'}
          label={'Session Name'}
          value={sessionName}
          onChangeText={e => setSessionName(e)}
          styleInput={styles.styleInput}
          empty={empty && !sessionName}
          error={false}
          TextMessage={'Session Name is required'}
          condtionText={{color: 'red'}}
        />
        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Session Link'}
          label={'Session Link'}
          value={sessionLink}
          onChangeText={linkChange}
          styleInput={styles.styleInput}
          empty={empty && !sessionLink}
          error={false}
          TextMessage={'Session Link is required'}
          TextMessageAlert={'Session Link is invalid'}
          checkCondtion={sessionLinkRegex}
          condtionText={{color: 'red'}}
        />

        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Session duration'}
          label={'Session duration'}
          value={duration}
          keyboardType="numeric"
          onChangeText={e => setDuration(e)}
          styleInput={styles.styleInput}
          empty={empty && !duration}
          error={false}
          TextMessage={'Session duration is required'}
          condtionText={{color: 'red'}}
        />
        <TextInputComponent
          emailView={styles.textInputView}
          placeholder={'Location'}
          label={'Location'}
          value={location}
          onChangeText={e => setLocation(e)}
          styleInput={styles.styleInput}
          empty={empty && !location}
          error={false}
          TextMessage={'Session location is required'}
          condtionText={{color: 'red'}}
        />

        <View style={[styles.textInputView, {marginBottom: '10%'}]}>
          <TextInput
            multiline={true}
            placeholder="Session Description"
            mode="outlined"
            label={'Session Description'}
            outlineColor="#E5E4E2"
            activeOutlineColor="black"
            height={150}
            autoCapitalize="none"
            autoCorrect={false}
            value={description}
            onChangeText={e => setDescription(e)}
            // empty={empty && !description}
            // error={false}
            // TextMessage={'Program description is required'}
            // condtionText={{color: 'red'}}
          />
          {!description && (
  <Text style={{ color: 'red' }}>Program Name is required</Text>
)}
 {/* {empty ? (
        <Text style={{ color: 'red' }}>
         Program Name is required
        </Text>)} */}
      
          <View style={{marginTop: '20%', marginBottom: '-10%'}}>
            <Button
            
              onPress={() => {
                epmtyMessage();
                handleSubmitButton();
                // navigation.navigate('programs')
                // navigation.navigate('programs', {
                // //   passId: passId,
                // //   title: title,
                // ProgramID: ProID,
                // });
                console.log('pressed');
                console.log('button Clicked');
              }}
              title={'Add Session'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    backgroundColor: '#fff',
  },
  textInputMianView: {
    flex: 1,
    // height: '50%',
    height: 130,
    width: '100%',
    borderWidth: 1,
    justifyContent: 'center',
    marginBottom: 10,
    borderRadius: 10,
    backgroundColor: COLORS.WHITE,
    // marginBottom: 15,
    borderColor: COLORS.HIGHLIGHT,
    elevation: 1,
  },
  imageStyle: {height: 45, width: 45, alignSelf: 'center'},
  uploadText: {alignSelf: 'center', fontFamily: FONTS.REGULAR, fontSize: 14},
  textInputView: {
    marginTop: 10,
  },
  styleInput: {fontFamily: FONTS.REGULAR, color: COLORS.BLACK},
});


export default AddSession