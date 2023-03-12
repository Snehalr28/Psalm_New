import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Images from '../../../assets/Images/Sample';
import COLORS from '../../../constants/color';
import FONTS from '../../../constants/fonts';
import { baseURL } from '../../../controllers/ApiList';

const AllSessionsList = props => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelectedIndex = index => {
    setSelectedIndex(index);
  };

  const today = [
    {
      id: 0,
      todayDate: '01-18-2022',
      subData: [
        {
          id: 0,
          image: Images.homeSession2,
          time: '11:30 PM',
          category: 'Career Consultation',
          description: 'Aliqua id fugiat nostrud',
          type: 'Economics Nature',
        },
        {
          id: 1,
          image: Images.homeSession1,
          time: '11:30 PM',
          category: 'Education',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          type: 'Deserunt ullamco est',
        },
        {
          id: 2,
          image: Images.homeSession3,
          time: '11:30 PM',
          category: 'Investment or Business',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          type: 'Deserunt ullamco est',
        },
      ],
    },
  ];

  //-----------------Upcoming Screen Data-----------------------
  const upcoming = [
    {
      id: 0,
      day: 'Wednesday',
      upcomingDate: '01-18-2022',
      subData: [
        {
          id: 0,
          image: Images.homeSession2,
          time: '11:30 PM',
          category: 'Career Consultation',
          description: 'Aliqua id fugiat nostrud',
          type: 'Economics Nature',
        },
        {
          id: 1,
          image: Images.homeSession1,
          time: '11:30 PM',
          category: 'Education',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          type: 'Deserunt ullamco est',
        },
        {
          id: 2,
          image: Images.homeSession3,
          time: '11:30 PM',
          category: 'Investment or Business',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          type: 'Deserunt ullamco est',
        },
      ],
    },
    {
      id: 1,
      day: 'Sunday',
      upcomingDate: '01-18-2022',
      subData: [
        {
          id: 0,
          image: Images.homeSession2,
          time: '11:30 PM',
          category: 'Career Consultation',
          description: 'Aliqua id fugiat nostrud',
          type: 'Economics Nature',
        },
        {
          id: 1,
          image: Images.homeSession1,
          time: '11:30 PM',
          category: 'Education',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          type: 'Deserunt ullamco est',
        },
        {
          id: 2,
          image: Images.homeSession3,
          time: '11:30 PM',
          category: 'Investment or Business',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          type: 'Deserunt ullamco est',
        },
      ],
    },
  ];
  const getCurrentDate=()=>{
 
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();

    //Alert.alert(date + '-' + month + '-' + year);
    // You can turn it in to your desired format
    return date + '-' + month + '-' + year;//format: d-m-y;
}
  //---------------Today data---------------------
  const renderItem = ({item}) => {
    return (
      <View style={{}}>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <Text
            style={{
              fontFamily: FONTS.MEDIUM,
              fontSize: 20,
              color: COLORS.BLACK,
            }}>
            Today -{' '}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONTS.REGULAR,
              color: COLORS.BLACK,
              marginTop: 5,
            }}>
            {getCurrentDate()}
          </Text>
        </View>
        {/* <View */}
        <FlatList
          data={props.sessionData}
          keyExtractor={subItem => subItem._id}
          renderItem={({item}) => (
            <View style={{marginBottom: 15}}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={{
                      height: 110,
                      width: 110,
                      borderRadius: 10,
                      backgroundColor: 'green',
                    }}
                    source={{
                      uri:
                        item.image === undefined
                          ? 'http://54.190.192.105:9192/public/profile_picture/1678444605470-download.jpeg'
                          : baseURL + item.image,
                    }}
                  />
                </View>

                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                  <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <Image
                      style={{
                        height: 11,
                        width: 11,
                        marginTop: 4,
                        marginRight: 5,
                      }}
                      source={require('../../../assets/Icons/timeClock.png')}
                    />
                    <Text
                      style={{
                        fontFamily: FONTS.MEDIUM,
                        color: COLORS.BLACK,
                        fontSize: 12,
                        alignSelf: 'center',
                      }}>
                      {item.session_data.start_date}
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: FONTS.MEDIUM,
                      color: COLORS.BLACK,
                      textTransform: 'uppercase',
                      marginBottom: 5,
                    }}>
                    {item.session_data.mentorship_name}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: FONTS.MEDIUM,
                      color: COLORS.BLACK,
                      marginBottom: 5,
                    }}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.REGULAR,
                      color: COLORS.BLACK,
                      fontSize: 14,
                    }}>
                    {item.category_data[0] !== undefined
                ? item.category_data[0].categoryName
                : ''}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.HIGHLIGHT,
                  marginTop: 15,
                  marginBottom: 10,
                }}></View>
            </View>
          )}
        />
      </View>
    );
  };

  //---------------Upcoming data---------------------
  const renderUpcomingItem = ({item}) => {
    return (
      <View style={{}}>
        <View style={{flexDirection: 'row', marginTop: 10, marginBottom: 10}}>
          <Text
            style={{
              fontFamily: FONTS.MEDIUM,
              fontSize: 20,
              color: COLORS.BLACK,
            }}>
            {/* Wednesday -{' '} */}
            {item.day}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.MEDIUM,
              fontSize: 20,
              color: COLORS.BLACK,
            }}>
            {' - '}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONTS.REGULAR,
              color: COLORS.BLACK,
              marginTop: 5,
            }}>
            {item.upcomingDate}
          </Text>
        </View>
        {/* <View */}
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={item.subData}
          keyExtractor={subItem => subItem.id.toString()}
          renderItem={({item: subItem}) => (
            <View style={{marginBottom: 15}}>
              <View style={{flexDirection: 'row'}}>
                <View>
                  <Image
                    style={{height: 110, width: 110, borderRadius: 10}}
                    source={subItem.image}
                  />
                </View>

                <View style={{marginLeft: 10, justifyContent: 'center'}}>
                  <View style={{flexDirection: 'row', marginBottom: 5}}>
                    <Image
                      style={{
                        height: 11,
                        width: 11,
                        marginTop: 4,
                        marginRight: 5,
                      }}
                      source={require('../../../assets/Icons/timeClock.png')}
                    />
                    <Text
                      style={{
                        fontFamily: FONTS.MEDIUM,
                        color: COLORS.BLACK,
                        fontSize: 12,
                        alignSelf: 'center',
                      }}>
                      {subItem.time}
                    </Text>
                  </View>

                  <Text
                    style={{
                      fontSize: 12,
                      fontFamily: FONTS.MEDIUM,
                      color: COLORS.BLACK,
                      textTransform: 'uppercase',
                      marginBottom: 5,
                    }}>
                    {subItem.category}
                  </Text>
                  <Text
                    style={{
                      fontSize: 16,
                      fontFamily: FONTS.MEDIUM,
                      color: COLORS.BLACK,
                      marginBottom: 5,
                    }}>
                    {subItem.description}
                  </Text>
                  <Text
                    style={{
                      fontFamily: FONTS.REGULAR,
                      color: COLORS.BLACK,
                      fontSize: 14,
                    }}>
                    {subItem.type}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: COLORS.HIGHLIGHT,
                  marginTop: 15,
                  marginBottom: 10,
                }}></View>
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <View>
      <SegmentedControlTab
        tabsContainerStyle={[styles.tabsContainerStyle]}
        tabStyle={styles.tabStyle}
        tabTextStyle={styles.tabTextStyle}
        activeTabStyle={styles.activeTabStyle}
        activeTabTextStyle={styles.activeTabTextStyle}
        selectedIndex={selectedIndex}
        values={['Today', 'Upcoming', 'Past', 'Rejected']}
        onTabPress={handleSelectedIndex}
      />

      {selectedIndex === 0 && (
        <FlatList
          data={today}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      {selectedIndex === 1 && (
        <FlatList
          data={today}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      {selectedIndex === 2 && (
        <FlatList
          data={today}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
      {selectedIndex === 3 && (
        <FlatList
          data={today}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default AllSessionsList;

const styles = StyleSheet.create({
  tabsContainerStyle: {
    marginTop: 10,
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
