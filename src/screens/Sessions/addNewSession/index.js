import React, {useState, useEffect} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {StyleSheet, View, Text} from 'react-native';
import COLORS from '../../../constants/color';
import moment from 'moment';
import {SafeAreaView} from 'react-native';
import FONTS from '../../../constants/fonts';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import DatePicker from 'react-native-date-picker';
import {Button} from '../../../components/Button';
import CustomDropdown from '../../../components/customDropdown/';
import {ScrollView} from 'react-native-gesture-handler';

const AddNewSession = ({navigation}) => {
  const [selectProgram, setSelectProgram] = useState(null);

  const [time, setTime] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const [selectedNewTime, setSelectedNewTime] = useState('');

  const handleDateChange = newDate => {
    setSelectedNewDate(newDate.toISOString().slice(0, 10));
    setOpen(false);
    setDate(newDate);
  };

  const handleTimeChange = newDate => {
    setSelectedNewTime(newDate.toLocaleTimeString());
    setOpenTime(false);
    setTime(newDate);
  };

  const [idate, setDate] = useState(date);

  const date = new Date();
  let customdate = moment(idate).format('Do MMMM, YY');

  const onDateChange = date => {
    setDate(date.format());
  };

  const customDatesStyles = [
    {
      date: '2023-01-02',
      style: {
        backgroundColor: '#ffe6e6',
        borderRadius: 20,
      },
    },
    {
      date: '2023-01-15',
      style: {
        backgroundColor: '#ffe6e6',
        borderRadius: 20,
      },
    },
    {
      date: '2023-01-17',
      style: {
        backgroundColor: '#ffe6e6',
        borderRadius: 20,
      },
    },
    {
      date: '2023-01-21',
      style: {
        backgroundColor: '#ffe6e6',
        borderRadius: 20,
      },
    },
    {
      date: '2023-01-23',
      style: {
        backgroundColor: '#ffe6e6',
        borderRadius: 20,
      },
    },
    {
      date: '2023-01-18',
      style: {
        backgroundColor: '#313131',
        borderRadius: 20,
      },
      textStyle: {
        color: 'white',
      },
    },
    {
      date: '2023-01-26',
      style: {
        backgroundColor: '#FE4D4D',
        borderRadius: 20,
      },
      textStyle: {
        color: 'white',
      },
    },
  ];

  const data = [
    {label: 'Immigration', value: 'Immigration'},
    {label: 'Career Consultation', value: 'Career Consultation'},
    {label: 'Investment or Business', value: 'Investment or Business'},
    {label: 'Education', value: 'Education'},
  ];

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      {/* <View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{borderWidth: 1, borderColor: COLORS.HIGHLIGHT, elevation: 1}}>
          <View style={{padding: 10}}>
            <CalendarPicker
              onDateChange={date => onDateChange(date)}
              selectedDayColor="#FE4D4D"
              selectedDayTextStyle={{color: 'white'}}
              initialDate="2023-01-18"
              width={350}
              customDatesStyles={customDatesStyles}
              textStyle={{
                fontFamily: FONTS.SEMI_BOLD,
                fontSize: 16,
                color: COLORS.DARK_BLACK,
              }}
              nextTitleStyle={styles.nextTitleStyle}
              previousTitleStyle={styles.nextTitleStyle}
              todayBackgroundColor="#000"
              todayTextStyle={{color: 'red'}}
            />
          </View>
        </View>
        {/* <View style={styles.dateview}>
          <Text style={styles.date}>{customdate} </Text>
        </View> */}
        <View style={{marginTop:20, marginBottom:"30%"}}>
          <TextInputComponent
            emailView={styles.textInputView}
            styleInput={{fontFamily:FONTS.REGULAR, color:COLORS.BLACK}}
            placeholder={'Select Time'}
            label={'Select Time'}
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

          <CustomDropdown
            data={data}
            value={selectProgram}
            labelField="label"
            valueField="value"
            placeholder="Select Program"
            onChange={item => setSelectProgram(item.value)}
          />
        </View>
        <View>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('Add Session');
              console.log('button');
            }}
            textStyle={styles.buttonText}
            title={'Next'}
          />
        </View>
      </ScrollView>
      {/* </View> */}
    </SafeAreaView>
  );
};

export default AddNewSession;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  button: {
    // backgroundColor: '#f2f2f2',
    // borderRadius: 5,
    // width: 40,
    // height: 40,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  nextTitleStyle: {fontSize: 14, fontFamily: FONTS.REGULAR, color: COLORS.GREY},
  imageView: {
    alignSelf: 'flex-end',
    marginTop: 12,
    marginRight: '10%',
    position: 'absolute',
  },
  image: {height: 20, width: 20, marginTop: 10},
});
