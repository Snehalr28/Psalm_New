import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  // TextInput,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import {TextInput, HelperText} from 'react-native-paper';
import {Button} from '../../../components/Button';
import {DatePickerInput} from 'react-native-paper-dates';
import DatePicker from 'react-native-date-picker';

const EditSession = () => {
  const [sessionName, setSessionName] = useState('');
  const [sessionLink, setSessionLink] = useState('');
  const [sessionDuration, setSessionDuration] = useState('');
  const [location, setLocation] = useState('');
  const [sessionDesc, setSessionDesc] = useState('');

  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedNewDate, setSelectedNewDate] = useState('');

  const [time, setTime] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const [selectedNewTime, setSelectedNewTime] = useState('');

  const handleDateChange = newDate => {
    setSelectedNewDate(newDate.toISOString().slice(0, 10));
    setOpen(false);
    setDate(newDate);
  };

  const handleTimeChange = newDate => {
    const hours = newDate.getHours();
    const minutes = newDate.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedTime = `${formattedHours}:${formattedMinutes} ${period}`;
    
    setSelectedNewTime(formattedTime);
    setOpenTime(false);
    setTime(newDate);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{width: '100%', borderRadius: 10}}
            source={require('../../../assets/Images/Sample/session.png')}
          />
          <TouchableOpacity
            onPress={() => {
              console.log('edit session buttonPressed');
            }}>
            <Image
              style={styles.playIcon}
              source={require('../../../assets/Icons/Play.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{marginTop: 10}}>
          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Program Name'}
            label={'Program Name'}
            onChangeText={setSessionName}
            value={sessionName}
          />
          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Session Link'}
            label={'Session Link'}
            onChangeText={setSessionLink}
            value={sessionLink}
          />
          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Date'}
            label={'Date'}
            value={selectedNewDate}
            onFocus={() => setOpen(true)}
            // onFocus={() => setOpen(true)}
            emailIconView={styles.imageView}
            emailIcon={styles.image}
            source={require('../../../assets/Icons/Calendar.png')}
            onPress={() => setOpen(true)}
          />
          <DatePicker
            mode="date"
            modal
            open={open}
            date={date}
            onConfirm={handleDateChange}
            onCancel={() => setOpen(false)}
            minimumDate={new Date()}
            // maximumDate={new Date('2023-12-31')}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Time'}
            label={'Time'}
            value={selectedNewTime}
            onFocus={() => setOpenTime(true)}
            emailIconView={styles.imageView}
            emailIcon={[styles.image, {height: 16, width: 16}]}
            source={require('../../../assets/Icons/timeClock.png')}
            onPress={() => setOpenTime(true)}
          />
          <DatePicker
            mode="time"
            modal
            open={openTime}
            date={time}
            onConfirm={handleTimeChange}
            onCancel={() => setOpenTime(false)}
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Session duration'}
            label={'Session duration'}
            onChangeText={setSessionDuration}
            value={sessionDuration}
            // keyboardType="numeric"
          />

          <TextInputComponent
            emailView={styles.textInputView}
            placeholder={'Location'}
            label={'Location'}
            onChangeText={setLocation}
            value={location}
          />
          <View style={[styles.textInputView, {marginBottom: 20}]}>
            <TextInput
              multiline={true}
              placeholder="Session Description"
              mode="outlined"
              label={'Session Description'}
              outlineColor="#E5E4E2"
              activeOutlineColor="black"
              height={160}
              autoCapitalize="none"
              autoCorrect={false}
              value={sessionDesc}
              onChangeText={e => setSessionDesc(e)}
            />
          </View>

          <Button
            style={styles.button}
            onPress={() => {
              // navigation.navigate('AddProgram');
              console.log('button');
            }}
            textStyle={styles.buttonText}
            title={'Save Session'}
          />
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default EditSession;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#fff',
  },
  playIcon: {alignSelf: 'flex-end', marginTop: -25, marginRight: 20},
  textInputView: {marginBottom: 12},
  imageView: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginRight: '10%',
    position: 'absolute',
  },
  image: {height: 20, width: 20, marginTop: 10},
});
