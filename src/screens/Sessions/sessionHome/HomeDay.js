import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import COLORS from '../../../constants/color';
import FONTS from '../../../constants/fonts';
import CalendarStrip from 'react-native-calendar-strip';
import moment from 'moment';
import CalendarPicker from 'react-native-calendar-picker';
import AllSessionsList from './AllSessionsList';

const DayHomeWeek = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelectedIndex = index => {
    setSelectedIndex(index);
  };

 

  const [selectedDate, setSelectedDate] = useState(new Date());

  const customAllDatesStyles = [
    {
      date: '2023-01-02',
      style: {
        backgroundColor: '#dafed7',
        borderRadius: 20,
      },
    },
    {
      date: '2023-01-15',
      style: {
        backgroundColor: '#dafed7',
        borderRadius: 20,
      },
    },
    {
      date: '2023-01-17',
      style: {
        backgroundColor: '#dafed7',
        borderRadius: 20,
      },
    },
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
      date: '2023-01-25',
      style: {
        backgroundColor: '#ffe6e6',
        borderRadius: 20,
      },
      textStyle: {
        color: 'black',
      },
    },
  ];

  const markedDates = ['2023-03-01', '2023-03-05', '2023-03-07'];
  const markedDatesStyle = {
    '2023-03-01': {
      container: {
        backgroundColor: '#FFC107',
        borderRadius: 5,
      },
      text: {
        color: '#fff',
        fontWeight: 'bold',
      },
    },
    '2023-03-05': {
      container: {
        backgroundColor: '#E91E63',
        borderRadius: 5,
      },
      text: {
        color: '#fff',
        fontWeight: 'bold',
      },
    },
    '2023-03-07': {
      container: {
        backgroundColor: '#4CAF50',
        borderRadius: 5,
      },
      text: {
        color: '#fff',
        fontWeight: 'bold',
      },
    },
  };
  const [idate, setDate] = useState(date);
  const date = new Date();
  let customdate = moment(idate).format('Do MMMM, YY');

  const onDateChange = date => {
    setDate(date.format());
  };

  let fetchedDates = ['2023-03-10', '2023-03-11', '2023-03-11', '2023-03-12'];
  let markedDatesArray = [];

  for (let i = 0; i < fetchedDates.length; i++) {
    markedDatesArray.push({
      date: moment(`${fetchedDates[i]}`, 'YYYY-MM-DD'),
      highlightColor: {backgroundColor: 'black'},
      dots: [
        {
          color: COLORS.BLACK,
          height: 20,
          width: 20,
        },
      ],
    });
  }
  const customStyles = {
    dateContainerStyle: {
      backgroundColor: COLORS.PRIMARY,
      borderRadius: 20,
    },
  };

  const startingDate = new Date(2023, 0, 18);
  const customDatesStylesFunc = date => {
    if (date.isoWeekday() === 5) {
      // Fridays
      return {
        // dateNameStyle: {color: 'blue'},
        dateNumberStyle: {
          color: 'white',
          backgroundColor: 'red',
          borderRadius: 20,
          height: 25,
          width: 25,
        },
        // dateContainerStyle:  {color: 'yellow'},
      };
    }
  };

  let customDatesStyles = [];
  let startDate = moment();
  for (let i = 0; i < 6; i++) {
    customDatesStyles.push({
      startDate: startDate.clone().add(i, 'days'), // Single date since no endDate provided
      dateNameStyle: styles.dateNameStyle,
      dateNumberStyle: styles.dateNumberStyle,
      // Random color...
      dateContainerStyle: {
        backgroundColor: `#${`#00000${(
          (Math.random() * (1 << 24)) |
          0
        ).toString(16)}`.slice(-6)}`,
      },
    });
  }

  return (
    <SafeAreaView style={{}}>
      <View>
        <SegmentedControlTab
          tabsContainerStyle={[styles.tabsContainerStyle]}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabStyle={styles.activeTabStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
          selectedIndex={selectedIndex}
          values={['Day', 'Week', 'Month']}
          onTabPress={handleSelectedIndex}
        />
        <View
          style={{
            borderWidth: 0.5,
            borderColor: COLORS.HIGHLIGHT,
            elevation: 1,
            marginTop: -10,
            marginLeft: 13,
            marginRight: 13,
          }}></View>
        <View>
          {selectedIndex === 0 && (
            <View style={{marginTop: 20}}>
              {/* <Text>First</Text> */}
              <View
                style={{
                  flex: 1,
                  borderWidth: 2,
                  elevation: 0,
                  borderColor: COLORS.HIGHLIGHT,
                  borderRadius: 10,
                }}>
                <CalendarStrip
                  calendarAnimation={{type: 'sequence', duration: 30}}
                  startingDate={startingDate}
                  // startingDate={new Date()} // Set the starting date to the current date
                  selectedDate={selectedDate}
                  onDateSelected={date => setSelectedDate(date)}
                  // daySelectionAnimation={{type: 'border', duration: 200, borderWidth: 1, borderHighlightColor: 'white'}}
                  style={{
                    height: 120,
                    width: '120%',
                    paddingTop: 20,
                    paddingBottom: 10,
                    marginRight: 10,
                    marginLeft: -39,
                  }}
                  calendarHeaderStyle={{
                    color: 'black',
                    marginRight: '58%',
                    marginTop: -10,
                    fontFamily: FONTS.SEMI_BOLD,
                    flexWrap: 'wrap',
                  }}
                  // highlightDateNumberStyle={{backgroundColor:"red", height:30, width:30, borderRadius:20}}
                  markedDates={markedDates}
                  markedDatesStyle={markedDatesStyle}
                  markedDates={markedDatesArray}
                  daySelectionAnimation={{
                    type: 'background',
                    duration: 200,
                    highlightColor: COLORS.PRIMARY,
                  }}
                  onDateSelected={date => console.log(date)}
                  customDatesStyles={customStyles}
                  customDatesStyles={customDatesStyles}
                  // customDatesStyles={customDatesStyles}
                  // calendarColor={'#7743CE'}
                  // dateNumberStyle={{color: 'black', }}
                  // dateNameStyle={{color: 'black',}}
                  // customDatesStyles={customDatesStylesFunc}
                  // highlightDateNumberStyle={{color: 'b'}}
                  // highlightDateNameStyle={{color: 'yellow'}}
                  // disabledDateNameStyle={{color: 'black'}}
                  // disabledDateNumberStyle={{color: 'grey'}}
                  // datesWhitelist={datesWhitelist}
                  // datesBlacklist={datesBlacklist}
                  // iconLeft={require('./img/left-arrow.png')}
                  // iconRight={require('../../../assets/Icons/next.png')}
                  iconContainer={{flex: 0.1}}
                  iconRightStyle={{marginTop: -55, marginRight: 80, height: 13}}
                  iconLeftStyle={{marginTop: -55, marginLeft: 650, height: 13}}
                  // iconLeftStyle={{flex:1, alignSelf:""}}
                  // iconContainer={{}}
                />
              </View>
            </View>
          )}
          {selectedIndex === 1 && (
            <View>
              <Text>Second</Text>
            </View>
          )}
          {selectedIndex === 2 && (
            <View>
              <Text>Third</Text>
              <CalendarPicker
                //  markingType={'period'}
                onDateChange={date => onDateChange(date)}
                selectedDayColor="#FE4D4D"
                selectedDayTextStyle={{color: 'white'}}
                initialDate="2023-01-18"
                width={350}
                customDatesStyles={customAllDatesStyles}
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
          )}
        </View>

        <View>
          <AllSessionsList />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DayHomeWeek;

const styles = StyleSheet.create({
  tabsContainerStyle: {
    margin: 10,
  },
  tabStyle: {
    borderWidth: 0,
  },
  tabTextStyle: {
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
    fontSize: 14,
  },
  activeTabStyle: {
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBottomColor: 'black',
  },
  activeTabTextStyle: {
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    fontSize: 14,
  },
});
