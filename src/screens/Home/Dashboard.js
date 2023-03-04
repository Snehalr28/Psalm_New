import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {styles} from './Dashboard.styles';
import {typography} from '../../theme';
import {useDispatch} from 'react-redux';
import {logout} from '../../actions/UserActions';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Images from '../../assets/Images/Sample/index';
import CustomSearch from '../../components/customSearch';
import CustomHeader from '../../components/customHeader';
import CustomSegmentedTab from '../../components/segmentedTab/';

export const Dashboard = props => {
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {colors} = useTheme();
  // const user = useSelector(getUser);

  const logoutUser = () => {
    dispatch(logout());
  };
  // const [search, setSearch] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchTermChange = text => {
    setSearchTerm(text);
  };

  // const filteredData = data.subData.filter(item => {
  //   return item.headline.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  const [customStyleIndex, setCustomStyleIndex] = useState(0);

  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };

  const data = [
    {
      id: 0,
      number: 10,
      headline: 'Current Sessions',
      subData: [
        {
          id: 0,
          image: Images.dashbordImage1,
          title: 'Career Consultation',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          time: 'Session started',
          type: 'Economics Nature',
        },
        {
          id: 1,
          image: Images.dashbordImage2,
          title: 'Education',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          time: '03-16-2022  |  03:50 PM',
          type: 'Economics Nature',
        },
      ],
    },
  ];
  // console.log("git add");
  const SubDataItem = ({item}) => {
    return (
      <View style={styles.item}>
        <Image source={item.image} style={styles.FlatListImage} />

        <View style={{margin: 10}}>
          <View style={{flexDirection: 'row', marginTop: 3}}>
            <Image source={require('../../assets/Icons/calendarIcon.png')} />
            <Text style={styles.time}>{item.time}</Text>
          </View>

          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={[styles.description, {fontSize: 14}]}>{item.type}</Text>
        </View>
      </View>
    );
  };

  const HeadlineItem = ({item}) => {
    return (
      <View style={[styles.headlineContainer, {marginTop: -5}]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.headlineContainer]}>
            {item.number} {item.headline}
          </Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={item.subData}
          keyExtractor={subItem => subItem.id.toString()}
          renderItem={({item: subItem}) => <SubDataItem item={subItem} />}
          horizontal={true}
        />
      </View>
    );
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          title="Hello, Cameron"
          leftIcon={require('../../assets/Icons/userProfile.png')}
          rightIcon={require('../../assets/Icons/Notification1.png')}
          // onPress={() => {
          //   console.log('touch on user name');
          // }}
          onPress={() => navigation.navigate('MentorMenteeProfileScreen')}
        /> 
        <TouchableOpacity  onPress={logoutUser}>
        <Text>Logout</Text>
      </TouchableOpacity>

        <View style={styles.searchView}>
          <CustomSearch
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
            placeholder="Search"
          />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={[styles.viewContainer, {elevation: 1, marginBottom: 20}]}>
            <View style={styles.innerViewContainer}>
              <View style={styles.viewTrade}>
                <Image
                  style={styles.tradeIcon}
                  source={require('../../assets/Icons/trade.png')}
                />
              </View>
              <View style={styles.totalView}>
                <Text style={styles.totalText}>Total Revenue</Text>
                <View style={styles.viewTotalNo}>
                  <Text style={styles.textTotalNo}>$54178</Text>
                  <View style={styles.perTotalView}>
                    <Image source={require('../../assets/Icons/tradeUp.png')} />
                    <Text style={styles.perTotalText}>7.52%</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.CurrentView}>
            <View style={styles.currentSubView}>
              <Text style={styles.currentMenteeText}>Current Mentees</Text>
              <View style={styles.imageTextView}>
                <View>
                  <Text style={styles.totalCurrent}>5412</Text>
                </View>

                <View style={{marginLeft: '-100%'}}>
                  <Image
                    style={{
                      marginLeft: '-30%',
                      marginTop: -20,
                      height: 75,
                      width: 100,
                    }}
                    source={require('../../assets/Images/Sample/currentMentee.png')}
                  />
                </View>
              </View>
            </View>
          </View>
          {/* <View style={[styles.viewContainer, styles.menteeView]}>
            <View style={[styles.innerViewContainer]}>
              <Text style={styles.currentText}>Current Mentees</Text>
              <View style={{flexDirection: "row", marginRight:"55%"}}>
                <View style={styles.currentImage}>
                <View style={{flex: 1,}}>
                  <Text style={styles.totalMentee}>865412865412865412865412</Text>
                </View>
                  <Image
                    style={{alignSelf: 'flex-end'}}
                    source={require('../../assets/Images/Sample/currentMentee.png')}
                  />
                </View>
               
              </View>
            </View>
          </View> */}

          <View style={{}}>
            <Text style={styles.headlineContainer}>
              Number of Mentees who signed up
            </Text>
            <View style={styles.cardView}>
              <View style={styles.cardText}>
                <View style={styles.cardInnerView}>
                  <Text style={styles.cardNo}>21</Text>
                  <Text style={styles.cardInnerText}>In Past Day</Text>
                </View>
              </View>

              <View
                style={[
                  styles.cardText,
                  {backgroundColor: '#eefcfa', borderColor: '#dcf9f5'},
                ]}>
                <View style={styles.cardInnerView}>
                  <Text style={styles.cardNo}>87</Text>
                  <Text style={styles.cardInnerText}>In Past Week</Text>
                </View>
              </View>

              <View
                style={[
                  styles.cardText,
                  {backgroundColor: '#eff0fb', borderColor: '#d6d9f5'},
                ]}>
                <View style={styles.cardInnerView}>
                  <Text style={styles.cardNo}>21</Text>
                  <Text style={styles.cardInnerText}>In Past Month</Text>
                </View>
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.headlineContainer}>
              Total Number of Sessions
            </Text>
            <View style={{backgroundColor: '#f5f5f5', borderRadius: 20}}>
              <SegmentedControlTab
                values={['Current', 'Past', 'Upcoming']}
                selectedIndex={customStyleIndex}
                onTabPress={handleCustomIndexSelect}
                tabsContainerStyle={{
                  borderWidth: 10,
                  borderRadius: 10,
                  borderColor: '#f5f5f5',
                }}
                tabStyle={{
                  borderColor: '#f5f5f5',
                  height: 40,
                  backgroundColor: '#f5f5f5',
                }}
                activeTabStyle={{
                  backgroundColor: '#343232',
                  borderRadius: 10,
                  borderTopStartRadius: 10,
                  borderTopEndRadius: 10,
                  borderBottomStartRadius: 10,
                  borderBottomEndRadius: 10,
                }}
                tabTextStyle={styles.tabTextStyle}
                activeTabTextStyle={{color: '#ffff'}}
              />
            </View>

            {/* <CustomSegmentedTab
              values={['Current', 'Past', 'Upcoming']}
              selectedIndex={customStyleIndex}
              onTabPress={handleCustomIndexSelect}
            /> */}
            {customStyleIndex === 0 && (
              <SafeAreaView>
                <View>
                  <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <HeadlineItem item={item} />}
                  />
                </View>
              </SafeAreaView>
            )}
            {customStyleIndex === 1 && (
              <SafeAreaView>
                <View>
                  <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <HeadlineItem item={item} />}
                  />
                </View>
              </SafeAreaView>
            )}
            {customStyleIndex === 2 && (
              <SafeAreaView>
                <View>
                  <FlatList
                    data={data}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({item}) => <HeadlineItem item={item} />}
                  />
                </View>
              </SafeAreaView>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>

      {/* <View> */}
      {/* <View style={{marginBottom: '15%', marginTop: 10, marginRight: 150}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('MentorMenteeProfileScreen')}
          style={
            {
              marginTop:20
             
            }
          }
          >
          <Text
            style={{
              color: 'white',
              fontWeight: '400',
              alignSelf: 'center',
              fontSize: 17,
              color: 'black',
              // fontFamily:FONTS.BOLD_ITALIC,
            }}>
            Hello, Username
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <Text style={[typography.title, {color: colors.text}]}>Dashboard</Text>
        <View
          style={{
            flex: 1,
            marginTop: '5%',
          }}>
          
        </View>
      </View> */}
      {/* </View> */}
    </>
  );
};
