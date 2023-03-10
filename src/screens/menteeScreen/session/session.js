import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import SegmentedControl from './SegmentedControl';
import CustomSegmentedTab from '../../components/segmentedTab/';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Images from '../../assets/Images/Sample/';
import {ScrollView} from 'react-native-gesture-handler';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/color';

const menu = require('../../assets/Icons/menuTab.png');
const calender = require('../../assets/Icons/calenderTabIcon.png');
// const menuSelect = require('../../assets/Icons/selectMenu.png');
// const calenderSelect = require('../../assets/Icons/selectCalendar.png');

const ProgramDetails = ({navigation}) => {
  conts = [selectImage, setSelectImage] = useState('');

  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const handleIndexSelect = index => {
    setCustomStyleIndex(index);
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const handleCustomIndexSelect = index => {
    setCurrentIndex(index);
  };

  const [selectedIndex, setSelectedIndex] = useState(0);
  const handleSelectedIndex = index => {
    setSelectedIndex(index);
  };

  const renderImage = imageSource => (
    <Image
      resizeMode="contain"
      source={imageSource}
      style={
        {
          // width: imageSource === calender ? 35 : 20,
          // height: imageSource === calender ? 35: 20,
          // tintColor: currentIndex === 1 ? "#fff" : "#000",
          // backgroundColor:"#000"
          // backgroundColor: currentIndex === 1 ? "#fff" : "#000",
          // backgroundColor: currentIndex === 0 ? "#fff" : "red",
        }
      }
    />
  );

  const data = [
    {
      id: 0,
      image: Images.sessionImage1,
      sessionStart: '01-21-2022  |  03:50 PM',
      title: 'Career Consultation',
      description: 'Amet minim mollit non deserunt',
      type: 'Economics Nature',
      
      profile: [
        {
          id: 0,
          profileImage: Images.sessionMentor1,
          name: 'Ronald Richards',
          experiance: '10 Years Experience',
        },
      ],
    },
    {
      id: 1,
      image: Images.sessionImage2,
      sessionStart: '01-21-2022  |  03:50 PM',
      title: 'Career Consultation',
      description: 'Amet minim mollit non deserunt',
      type: 'Economics Nature',
      profile: [
        {
          id: 1,
          profileImage: Images.sessionMentor2,
          name: 'Devon Lane',
          experiance: '10 Years Experience',
        },
      ],
    },
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 12,
        borderColor: '#FFF5EE',
        backgroundColor: 'white',
        elevation: 0.5,
      }}>
      <View style={{marginBottom: 20}}>
        <Image
          style={{
            width: '100%',
            marginBottom: 10,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
          source={item.image}
        />
        <View style={{marginLeft: 10}}>
        <Text>{item.sessionStart}</Text>
          <Text>{item.title}</Text>
          <Text>{item.description}</Text>
      
          <Text>{item.type}</Text>
        </View>
        <View
          style={{borderWidth: 0.5, borderColor: '#eee', marginTop: 10}}></View>
      </View>

      <View style={{flexDirection: 'row', marginLeft: 10, marginBottom: 10}}>
        {item.profile.map(profile => (
          <View key={profile.id} style={{flexDirection: 'row'}}>
            <Image
              style={{height: 40, width: 40}}
              source={profile.profileImage}
            />
            <View style={{marginLeft: 10, flexWrap: 'wrap', marginRight: 20}}>
              <Text>{profile.name}</Text>
              <Text>{profile.experiance}</Text>
            </View>
            <View style={{justifyContent: 'center', marginLeft: 20}}>
              <Image
                style={
                  {
                    // alignSelf: 'flex-end',
                  }
                }
                source={require('../../assets/Icons/next.png')}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView>
        <View style={{padding: 20}}>
          <View>
            <View style={{backgroundColor: '#e8e8e8', borderRadius: 20}}>
              <SegmentedControlTab
                values={['Online', 'Offline']}
                selectedIndex={customStyleIndex}
                onTabPress={handleIndexSelect}
                tabsContainerStyle={[styles.tabsContainerStyle]}
                tabStyle={[styles.tabStyle]}
                firstTabStyle={styles.firstTabStyle}
                lastTabStyle={styles.lastTabStyle}
                tabTextStyle={styles.tabTextStyle}
                activeTabStyle={[
                  styles.activeTabStyle,
                  {backgroundColor: '#313131'},
                ]}
                activeTabTextStyle={styles.activeTabTextStyle}
                // selectedIndex={0}
                allowFontScaling={false}
              />
            </View>

            <View>
              {customStyleIndex === 0 && (
                <View style={{marginTop: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <SegmentedControl
                      tabs={[renderImage(menu), renderImage(calender)]}
                      initialIndex={0}
                      onChange={handleCustomIndexSelect}
                      tabStyle={{backgroundColor: '#fff'}}
                    />
                    <View style={{}}>
                      <TouchableOpacity
                        style={{}}
                        onPress={() => navigation.navigate('Add New Session')}>
                        <Image
                          style={{}}
                          source={require('../../assets/Icons/addSeesionButton.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* <Text>online</Text> */}
                  {currentIndex === 0 && (
                    <View style={{marginTop:15}}>
                      <Text style={{fontFamily:FONTS.MEDIUM, fontSize:20, color:COLORS.BLACK}}>Scheduled Sessions</Text>
                      {/* <View> */}

                      <FlatList
                        data={data}
                        renderItem={renderItem}
                        keyExtractor={item => item.id.toString()}
                        scrollEnabled
                      />

                      {/* </View> */}
                    </View>
                  )}
                  {currentIndex === 1 && (
                    <View>
                      {/* <Text style={{}}>textTab2</Text> */}
                      <TouchableOpacity onPress={() =>{navigation.navigate("Edit Session")}}>
                        <Text>Navigate to the Edit Session</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              )}
            </View>

            <View>
              {customStyleIndex === 1 && (
                <View>
                  <Text>offine</Text>
                </View>
              )}
            </View>
          </View>

          <View>
            {/* <SegmentedControl
                  tabs={[renderImage(menu), renderImage(calender)]}
                  // style={{height: 45, backgroundColor: '#EEEEEE',}}
                  activeTabColor="#FFFFFF"
                  initialIndex={0}
                  onChange={handleCustomIndexSelect}
                  // tabStyle={{}}
                />
                {currentIndex === 0 && <Text style={{}}>textTab1</Text>}

                {currentIndex === 1 && (
                  <View>
                    <Text style={{}}>textTab2</Text>
                    <SegmentedControlTab
                      values={['Day', 'Week', 'Month']}
                      selectedIndex={selectedIndex}
                      onTabPress={handleSelectedIndex}
                      tabsContainerStyle={[styles.tabsContainerStyle,{borderColor:"white"}]}
                      tabStyle={styles.tabStyle}
                      firstTabStyle={styles.firstTabStyle}
                      lastTabStyle={styles.lastTabStyle}
                      tabTextStyle={styles.tabTextStyle}
                      activeTabStyle={styles.activeTabStyle}
                      activeTabTextStyle={styles.activeTabTextStyle}
                      // selectedIndex={0}
                      allowFontScaling={false}
                    />
                    {selectedIndex === 0 && (
                      <View>
                        <Text>DayScreen</Text>
                      </View>
                    )}

                    {selectedIndex === 1 && (
                      <View>
                        <Text>WeekScreen</Text>
                      </View>
                    )}

                    {selectedIndex === 2 && (
                      <View>
                        <Text>MonthScreen</Text>
                      </View>
                    )}
                  </View>
                )} */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProgramDetails;

const styles = StyleSheet.create({
  tabsContainerStyle: {
    borderWidth: 8,
    borderRadius: 10,
    borderColor: '#e8e8e8',
  },
  tabStyle: {
    borderColor: '#e8e8e8',
    height: 40,
    backgroundColor: '#e8e8e8',
    // borderWidth:15
  },
  activeTabStyle: {
    backgroundColor: '#343232',
    borderRadius: 10,
    borderTopStartRadius: 10,
    borderTopEndRadius: 10,
    borderBottomStartRadius: 10,
    borderBottomEndRadius: 10,
  },
  tabTextStyle: {fontWeight: '500', fontSize: 16, color: '#313131'},
  activeTabTextStyle: {color: '#ffff'},
});
