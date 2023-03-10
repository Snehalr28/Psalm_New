import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {addMentor, logout, updateMentor} from '../../../actions/UserActions';
import React, {useState, useCallback} from 'react';
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
import {getUser} from '../../../selectors/UserSelectors';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
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
  const dispatch = useDispatch();
  const {passId} = route.params;
  const {title} = route.params;

  console.log('program Id for add new', passId);
  console.log("Title for add new ",title);
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
  const [openEnd, setOpenEnd] = useState(false);

  console.log('Date check', endDate, openEnd);
  console.log('Date check//', openEnd);

  const [from, setFrom] = useState(new Date());
  const [openTimeFrom, setOpenTimeFrom] = useState(false);
  const [selectedFromTime, setSelectedFromTime] = useState('');
console.log("selectedFromTime from ---->>>",selectedFromTime)
  const [to, setTo] = useState(new Date());
  const [openTo, setOpenTo] = useState(false);
  const [selectedToTime, setSelectedToTime] = useState('');
  console.log("selectedFromTime TO--->>>",selectedToTime)
  const [modalVisible, setModalVisible] = useState(false);
  const [thubnailImageClick, setthumbnailImageClick] = useState(false);
  const [thumbnailresponse, setThumbnailResponse] = useState(null)
  const [thumbnailName, setthumbnailName] = useState(null);

  console.log('thumbnail', thumbnailresponse);
  console.log('verify image click response check', thubnailImageClick);
  console.log('Verify image name check', thumbnailName);

  const [skillcerificateClick, setCerificateClick] = useState(false);
  const [skillCertificateresponse,setSkillCertificateresponse] = useState(null)
  const [skillresponseName, setSkillResponseName] = useState(null);

  console.log("Skill Certificate of add program",skillcerificateClick)
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

    console.log("check file1",file)
   
    if (file1 != null) {
      formdata.append('skills', file1);
    }

    console.log("check file12",file1)

    formdata.append('category_id', passId);
    // formdata.append('category_id', '63c936090a9a959d9ed369d3');
    formdata.append('mentorship_name', programName);
    formdata.append('description', description);
    formdata.append('mentorship_mode', 1);
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
            }
          }
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };

  const data = [
    {label: 'Online', value: 'Online'},
    {label: 'Offline', value: 'Offline'},
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
    // {label: 'Other', value: 'Other'},
  ];
  const [exp, setExp] = useState(null);

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
          />
          <CustomDropdown
            data={data}
            value={value}
            labelField="label"
            valueField="value"
            placeholder="Mentorship Mode*"
            onChange={item => setValue(item.value)}
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
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Price'}
            label={'Price*'}
            value={price}
            onChangeText={e => setPrice(e)}
            keyboardType="numeric"
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Mentee Allowed'}
            label={'Mentee Allowed*'}
            value={allow}
            onChangeText={e => setAllow(e)}
            keyboardType="numeric"
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
          />
          <DatePicker
            mode="date"
            modal
            open={openEnd}
            date={endDate}
            onConfirm={handleEndChange}
            onCancel={() => setOpenEnd(false)}
            minimumDate={new Date()}
            // maximumDate={new Date('2023-12-31')}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Upload Skill Certificate'}
            label={'Upload Skill Certificate'}
            value={skillresponseName}
            // value={certificate}
            onChangeText={e => setCertificate(e)}
            emailIconView={styles.imageViewStyle}
            emailIcon={styles.imageIconStyle}
            source={require('../../../assets/Icons/Group.png')}
            onPress={() => {
              setModalVisible(true);
              setCerificateClick(true);
              setthumbnailImageClick(false);
            
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
          <Button
            onPress={() => {
              handleSubmitButton();
              navigation.navigate('programs', {passId: passId, title:title});
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
