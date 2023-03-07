import {useTheme} from '@react-navigation/native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch,useSelector} from 'react-redux';
import {addMentor, logout, updateMentor} from '../../../actions/UserActions';
import React, {useState, useCallback} from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import {Button} from '../../../components/Button';
import {styles} from './AddNewProgram.styles';
import CustomHeader from '../../../components/customHeader';
import CustomDropdown from '../../../components/customDropdown';
import DatePicker from 'react-native-date-picker';
import { getUser } from '../../../selectors/UserSelectors';

const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export function AddNewProgram({route}) {
  const dispatch = useDispatch();

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
  console.log("New start date",selectedNewStartDate)
  console.log("New end date",selectedEndDate)

  

  const [endDate, setEndDate] = useState(new Date());
  const [openEnd, setOpenEnd] = useState(false);
  
  console.log("Date check",endDate,openEnd)
  console.log("Date check//",openEnd)

  const [from, setFrom] = useState(new Date());
  const [openTimeFrom, setOpenTimeFrom] = useState(false);
  const [selectedFromTime, setSelectedFromTime] = useState('');

  const [to, setTo] = useState(new Date());
  const [openTo, setOpenTo] = useState(false);
  const [selectedToTime, setSelectedToTime] = useState('');

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
    setSelectedFromTime(newDate.toLocaleTimeString());
    setOpenTimeFrom(false);
    setFrom(newDate);
  };

  const handleToChange = newDate => {
    setSelectedToTime(newDate.toLocaleTimeString());
    setOpenTo(false);
    setTo(newDate);
  };

  const navigation = useNavigation();
  let getuserData = useSelector(getUser);
  console.log('Add New Program User ID', getuserData.response.data._id);

  const {passId} = route.params;
  console.log("Add New Program Category ID", passId)

  const handleSubmitButton = props => {
    const addMentorObj = {
      category_id: passId,
      mentorship_name: programName,
      description: description,
      mentorship_mode: value,
      start_date: selectedNewStartDate,
      expiry_date: selectedEndDate,
      duration: '1',
      experience: exp,
      price: price,
      payment_mode: 'card',
      mentee_limit: allow,
      availibility_from: "01:15",
      availibility_to: "05:15",
      image: " ",
      skills: " ",
      user_id: getuserData.response.data._id,
     
    };

    console.log('Add new program all data', addMentorObj);
    try {
    dispatch(
      addMentor(addMentorObj, cb => {
        console.log('Add program cb response', cb);
        if (cb != false) {
          if (cb.messageID == 200) {
            alert("Program Added Successfully")
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
              onPress={e => {
                console.log('select image');
                // selectImage();
              }}>
              <Image
                style={styles.imageStyle}
                source={require('../../../assets/Icons/addProgram.png')}
              />
              <Text style={styles.uploadText}>Upload Program Thumbnail</Text>
            </TouchableOpacity>
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
          <Button
            onPress={() => {
              handleSubmitButton();
              navigation.navigate('programs',{passId:passId});
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
