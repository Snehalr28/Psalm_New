import React, {useState, useEffect} from 'react';
import CalendarPicker from 'react-native-calendar-picker';
import {StyleSheet, View, Text, Image, SafeAreaView, Alert} from 'react-native';
import COLORS from '../../../constants/color';
import moment from 'moment';
import FONTS from '../../../constants/fonts';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
import DatePicker from 'react-native-date-picker';
import {Button} from '../../../components/Button';
import CustomDropdown from '../../../components/customDropdown/';
import {ScrollView} from 'react-native-gesture-handler';
import {createUnparsedSourceFile} from 'typescript';
import {useDispatch, useSelector} from 'react-redux';
import {getUser} from '../../../selectors/UserSelectors';
import {ListShow} from '../../../actions/UserActions';
import {useFocusEffect} from '@react-navigation/native';

const AddNewSessionS = ({navigation, route}) => {



  const {NewpassId} = route.params;
  const {starttime} = route.params;
  const {endtime} = route.params;
  const {startdate} = route.params;
  const {enddate} = route.params;
  const {programname} = route.params;

  console.log('check AddNewSession id isss-===>>>', NewpassId);
  console.log('check AddNewSession availibilityfrom isss-===>>>', starttime);
  console.log('check AddNewSession availibility_to isss-===>>>', endtime);
  console.log('check AddNewSession startdate isss-===>>>', startdate);
  console.log('check AddNewSession expriry isss-===>>>', enddate);
  console.log('check AddNewSession mentorship_name isss-===>>>', programname);

  // const {passId} = route.params;

  let getuserData = useSelector(getUser);
  console.log('Get userId add new session', getuserData.response.data._id);
  const [selectProgram, setSelectProgram] = useState(null);
  const [selectId, setSelectID] = useState('');
  const [time, setTime] = useState(new Date());
  const [openTime, setOpenTime] = useState(false);
  const [selectedNewTime, setSelectedNewTime] = useState('');
  const [idate, setDate] = useState(date);
  const [Newdata, setData] = useState([]);
  console.log('New Data isss====>>', Newdata);
  console.log('session expiry date', Newdata.expiry_date);
  console.log('session start date', Newdata.start_date);
  console.log('selectProgram issss check===>>', selectProgram);
  // console.log("time issss",time)
  console.log('selectedNewTime time issss', selectedNewTime);
  // console.log("I iss  date issss",idate)
  console.log('selected session/Program ID isss', selectProgram);
  console.log('Selected ID==>>', selectId);
  const dispatch = useDispatch();
  // const handleDateChange = newDate => {
  //   setSelectedNewDate(newDate.toISOString().slice(0, 10));
  //   setOpen(false);
  //   setDate(newDate);
  // };

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

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setSelectProgram(null);
        setTime(new Date());
        setOpenTime(false);
        setSelectedNewTime('');
        setDate(date);
        setData([]);
      };
    }, []),
  );
  useEffect(() => {
    // if (selectProgram != null) {
    //   console.log('Selected time iss', selectedNewTime);
    //   console.log('time form program', selectProgram.availibility_from);
    //   console.log('time to program', selectProgram.availibility_to);
    //   if (new Date(selectedNewTime) > new Date(selectProgram.availibility_to)) {
    //     Alert.alert('Session time is beyond program time');
    //   }
    // }
    if (enddate != null) {
      console.log('Check datesss==>', new Date(enddate));
      let customdate = moment(idate).format('YYYY-MM-DD');
      console.log('New Customdate', new Date(customdate));
      if (new Date(customdate) > new Date(enddate)) {
        Alert.alert('Session date is beyond program date');
      }
    }
    if (startdate != null) {
      console.log('Check datesss==>', new Date(startdate));
      let customdate = moment(idate).format('YYYY-MM-DD');
      console.log('New Customdate', new Date(customdate));
      if (new Date(customdate) < new Date(startdate)) {
        Alert.alert('Session date is beyond program date');
      }
    }

    console.log('Idate value', idate);
  }, [idate, selectedNewTime]);

  const data = [
    {label: 'Java', value: 'Immigration'},
    {label: 'AI', value: 'Career Consultation'},
    {label: 'Scrum Master', value: 'Investment or Business'},
    {label: 'Machine learning', value: 'Education'},
  ];

  // const handleTimeChange = newDate => {
  //   setSelectedNewTime(newDate.toLocaleTimeString());
  //   setOpenTime(false);
  //   setTime(newDate);
  // };

  useEffect(() => {
    DisplayList();
  }, []);

  const DisplayList = async () => {
    console.log('display category list');
    let SessionListOb = {
      mentorid: getuserData.response.data._id,
    };
    try {
      dispatch(
        ListShow(SessionListOb, cb => {
          console.log('MentorIDiss', SessionListOb);
          console.log('list cb response check', cb);
          console.log('cb list response check', cb.data[0]);

          if (cb != false) {
            // setData(cb.data.docs)
            console.log('doc length true');
            if (cb.messageID === 200) {
              // setData(cb.data.docs[0].docs);
              setData(cb.data);
              // navigation.navigate('ProgramList');
            }
          }
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };

  const date = new Date();
  // let customdate = moment(idate).format('Do MMMM, YY');
  let customdate = moment(date).format('MM/DD/YYYY');

  console.log('Custom date check', customdate);

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

  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white', padding: 20}}>
      {/* <View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* 
        { NewpassId!=null?(<View>

<CustomDropdown
 data={Newdata}
//  value={programname}
 labelField="mentorship_name"
 valueField="_id"
 placeholder="Select Program"
 onChange={item =>{ setSelectProgram(item), setSelectID(item._id)}}
/> 
</View>):(<View>

<CustomDropdown
 data={Newdata}
 value={selectProgram}
 labelField="mentorship_name"
 valueField="_id"
 placeholder="Select Program"
 onChange={item =>{ setSelectProgram(item), setSelectID(item._id)}}
/> 
</View>)} */}
     <View>
     <View style={{marginTop: 20, marginBottom: '3%'}}>
          <TextInputComponent
            emailView={styles.textInputView}
            styleInput={{fontFamily: FONTS.REGULAR, color: COLORS.BLACK}}
            // placeholder={'Select Time'}
            label={'Selected Program'}
            value={programname}
            // onFocus={() => setOpenTime(true)}
            // emailIconView={styles.imageView}
            // emailIcon={[styles.image, {height: 16, width: 16}]}
            // source={require('../../../assets/Icons/timeClock.png')}
            // onPress={() => setOpenTime(true)}
          />
          </View>
          {/* <CustomDropdown
            data={Newdata}
            value={programname}
            labelField={programname}
            valueField="_id"
            placeholder={programname}
            // onChange={item => {
            //   setSelectProgram(item), setSelectID(item._id);
            // }}
          /> */}
        </View>
        <View
          style={{borderWidth: 1, borderColor: COLORS.HIGHLIGHT, elevation: 1}}>
          <View style={{padding: 10}}>
            <CalendarPicker
              //  markingType={'period'}
              onDateChange={date => onDateChange(date)}
              selectedDay={customdate}
              selectedDayColor="#FE4D4D"
              selectedDayTextStyle={{color: 'white'}}
              initialDate={new Date()}
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
              previousTitle={
                <Image
                  source={require('../../../assets/Icons/previous.png')}
                  style={styles.arrow}
                />
              }
              nextTitle={
                <Image
                  source={require('../../../assets/Icons/next.png')}
                  style={styles.arrow}
                />
              }
            />
          </View>
        </View>
        {/* <View style={styles.dateview}>
          <Text style={styles.date}>{customdate} </Text>
        </View> */}
        <View style={{marginTop: 20, marginBottom: '30%'}}>
          <TextInputComponent
            emailView={styles.textInputView}
            styleInput={{fontFamily: FONTS.REGULAR, color: COLORS.BLACK}}
            // placeholder={'Select Time'}
            label={'Select Time'}
            value={selectedNewTime || 'Select Time'}
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
        </View>
        <View>
          <Button
            style={styles.button}
            onPress={() => {
              navigation.navigate('Add Session', {
                Time: selectedNewTime,
                ProID: NewpassId,
                ProDate: customdate,
              });
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

export default AddNewSessionS;

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
  arrow: {
    // width: 25,
    // height: 25,
  },
});
