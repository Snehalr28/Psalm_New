import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import SegmentedControl from './SegmentedControl';
import CustomSegmentedTab from '../../../components/segmentedTab';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Images from '../../../assets/Images/Sample';
import {ScrollView} from 'react-native-gesture-handler';
import FONTS from '../../../constants/fonts';
import COLORS from '../../../constants/color';
import HomeDay from './HomeDay';

// const menu = require('../../../assets/Icons/MenuTab.png');
const menu = require("../../../assets/Icons/MenuTab.png")
const calender = require('../../../assets/Icons/calendarTab.png');

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

  const renderImage = imageSource => (
    <Image
      resizeMode="contain"
      source={imageSource}
      style={{
        height:34, width:34,
        marginRight: 10,
        borderTopLeftRadius: 6.5,
        borderBottomLeftRadius: 6.5,
        borderTopRightRadius: 7,
        borderBottomRightRadius: 6.5,
        // borderRightWidth:1,
        tintColor: currentIndex === 0 ? 'white' : 'red',
        backgroundColor: currentIndex === 0 ? 'red' : 'white',
      }}
    />
  );
  const renderImageCalendar = imageSource => (
    <Image
      resizeMode="contain"
      source={imageSource}
      style={{
        // height:45, width:40,
        height:35, width:35,
        borderTopLeftRadius: 9,
        borderBottomLeftRadius: 9,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        tintColor: currentIndex === 1 ? 'white' : 'red',
        backgroundColor: currentIndex === 1 ? 'red' : '#fff',
      }}
    />
  );

  const data = [
    {
      id: 0,
      image: Images.sessionImage1,
      sessionStart: 'Session started',
      title: 'Career Consultation',
      description: 'Amet minim mollit non deserunt',
      type: 'Economics Nature',
      subDescription: 'Amet minim mollit non deserunt ullamco est...',
    },
    {
      id: 1,
      image: Images.sessionImage2,
      sessionStart: '01-21-2022  |  03:50 PM',
      title: 'Career Consultation',
      description: 'Amet minim mollit non deserunt',
      type: 'Economics Nature',
      subDescription: 'Amet minim mollit non deserunt ullamco est...',
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
        elevation: 0.1,
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
        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row'}}>
            <Image
              style={{
                height: 15,
                width: 15,
                marginTop: 2,
                tintColor: COLORS.GREY,
              }}
              source={require('../../../assets/Icons/Calendar.png')}
            />
            <Text
              style={{
                fontSize: 12,
                fontFamily: FONTS.MEDIUM,
                marginLeft: 5,
                color: COLORS.GREY,
              }}>
              {item.sessionStart}
            </Text>
          </View>

          <Text
            style={{
              textTransform: 'uppercase',
              color: COLORS.BLACK,
              fontFamily: FONTS.MEDIUM,
              fontSize: 12,
              marginTop: 6,
              marginBottom: 6,
            }}>
            {item.title}
          </Text>
          <Text
            style={{
              fontSize: 16,
              fontFamily: FONTS.MEDIUM,
              color: COLORS.BLACK,
              marginBottom: 6,
            }}>
            {item.description}
          </Text>

          <Text
            style={{
              color: COLORS.BLACK,
              fontFamily: FONTS.MEDIUM,
              fontSize: 14,
              marginBottom: 6,
            }}>
            {item.type}
          </Text>
          <Text
            style={{
              color: COLORS.BLACK,
              fontFamily: FONTS.LIGHT,
              fontSize: 14,
            }}>
            {item.subDescription}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
                    <View>
                      <SegmentedControl
                        tabs={[
                          renderImage(menu),
                          renderImageCalendar(calender),
                        ]}
                        initialIndex={0}
                        onChange={handleCustomIndexSelect}
                        tabStyle={{backgroundColor: '#fff'}}
                      />
                    </View>

                    <View style={{}}>
                      <TouchableOpacity
                        style={{}}
                        onPress={() => navigation.navigate('Add New Session')}>
                        <Image
                          style={{}}
                          source={require('../../../assets/Icons/addSeesionButton.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* <Text>online</Text> */}
                  {currentIndex === 0 && (
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          fontFamily: FONTS.MEDIUM,
                          fontSize: 20,
                          color: COLORS.BLACK,
                        }}>
                        Scheduled Sessions
                      </Text>
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
                    <View style={{flex: 2}}>
                      {/* <Text style={{}}>textTab2</Text> */}
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Edit Session');
                        }}>
                        <Text>Navigate to the Edit Session</Text>
                      </TouchableOpacity>
                      {/* <View> */}
                      <HomeDay />
                    </View>
                  )}
                </View>
              )}
            </View>

            <View>
              {customStyleIndex === 1 && (
                <View style={{marginTop: 15}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <SegmentedControl
                      tabs={[renderImage(menu), renderImageCalendar(calender)]}
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
                          source={require('../../../assets/Icons/addSeesionButton.png')}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>
                  {/* <Text>online</Text> */}
                  {currentIndex === 0 && (
                    <View style={{marginTop: 15}}>
                      <Text
                        style={{
                          fontFamily: FONTS.MEDIUM,
                          fontSize: 20,
                          color: COLORS.BLACK,
                        }}>
                        Scheduled Sessions
                      </Text>
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
                    <View style={{flex: 2}}>
                      {/* <Text style={{}}>textTab2</Text> */}
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('Edit Session');
                        }}>
                        <Text>Navigate to the Edit Session</Text>
                      </TouchableOpacity>
                      {/* <View> */}
                      <HomeDay />
                    </View>
                  )}
                </View>
              )}
            </View>
          </View>

          {/* <View></View> */}
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
