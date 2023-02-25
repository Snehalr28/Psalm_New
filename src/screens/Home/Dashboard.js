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
// import {styles} from './Dashboard.styles';
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
          type: "Economics Nature"
        },
        {
          id: 1,
          image: Images.dashbordImage2,
          title: 'Education',
          description:
            'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
          time: '03-16-2022  |  03:50 PM',
          type: "Economics Nature"
        },
      ],
    },
  ];

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
          <Text style={{color:"#313131", marginTop:5}}>{item.type}</Text>
        </View>
      </View>
    );
  };

  const HeadlineItem = ({item}) => {
    return (
      <View style={[styles.headlineContainer, {marginTop: -5}]}>
        <View style={{flexDirection: 'row'}}>
          <Text style={[styles.headlineContainer, {fontSize: 16}]}>
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
        <View>
          <TouchableOpacity
            onPress={logoutUser}>
           
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
          </View>
          {/* <TouchableOpacity
           onPress={() => navigation.navigate('MentorMenteeProfileScreen')}>
            */}
        <CustomHeader
          title="Hello, Cameron"
          newtitle="logout"
          leftIcon={require('../../assets/Icons/userProfile.png')}
          rightIcon={require('../../assets/Icons/Notification1.png')}
          onPress={() => navigation.navigate('MentorMenteeProfileScreen')}
        />
     
        <TouchableOpacity
            onPress={logoutUser}>
        <Text style={{marginLeft:250}}>Logout</Text>
        </TouchableOpacity>
        <View
          style={{marginLeft: '-10%', marginRight: '-10%', marginBottom: 15}}>
          <CustomSearch
            searchTerm={searchTerm}
            onSearchTermChange={handleSearchTermChange}
            placeholder="Search"
            onPress={() => navigation.navigate('MentorMenteeProfileScreen')}
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
                  onPress={() => console.log("Hello")}
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

          <View style={[styles.viewContainer, styles.menteeView]}>
            <View style={[styles.innerViewContainer, {flexWrap: 'wrap'}]}>
              <View style={{flexDirection: 'column'}}>
                <Text style={styles.currentText}>Current Mentees</Text>
                <Text style={styles.totalMentee}>5412</Text>
              </View>
              <View style={styles.currentImage}>
                <Image
                  source={require('../../assets/Images/Sample/currentMentee.png')}
                />
              </View>
            </View>
          </View>

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
            {/* <View></View> */}
            <Text style={styles.headlineContainer}>
              Total Number of Sessions
            </Text>
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
              tabTextStyle={{fontWeight: '500', fontSize: 16, color: '#313131'}}
              activeTabTextStyle={{color: '#ffff'}}
            />

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
          <TouchableOpacity
            onPress={logoutUser}
            style={{
              paddingHorizontal: 20,
              height: '10%',
              width: '150%',
              backgroundColor: '#FE4D4D',
              justifyContent: 'center',
             
              borderColor: '#FE4D4D',
              borderRadius: 10,
              marginBottom: 20,
            }}>
            <Text
              style={{
                color: 'white',
                fontWeight: '700',
                fontSize: 16,
                alignSelf: 'center',
              }}>
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </View> */}
      {/* </View> */}
    </>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#FFF5EE',
    backgroundColor: 'white',
  },
  viewTrade: {
    borderWidth: 1,
    width: 67,
    height: 77,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    backgroundColor: '#FFEBEB',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tradeIcon: {alignSelf: 'center', marginTop: 5, marginLeft: 3},
  innerViewContainer: {flexDirection: 'row', marginTop: 10, marginLeft: 15},
  totalView: {flexDirection: 'column', marginLeft: 10},
  totalText: {fontSize: 14, fontWeight: '500', color: '#313131'},
  viewTotalNo: {
    flexDirection: 'row',
    marginTop: -7,
    flexWrap: 'wrap',
    // marginRight: '20%',
  },
  textTotalNo: {fontWeight: '700', fontSize: 34, color: '#313131'},
  perTotalView: {
    alignItems: 'center',
    flexDirection: 'row',
    marginRight:3,
    marginLeft:4
    // marginLeft: '10%',
    // marginRight: '26%',
  },
  perTotalText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#313131',
  },
  menteeView: {backgroundColor: '#FFF5F5', flexDirection: 'row'},
  currentText: {fontWeight: '500', fontSize: 18, color: '#313131'},
  totalMentee: {
    fontWeight: '700',
    fontSize: 30,
    color: '#313131',
    marginTop: 5,
  },
  currentImage: {
    // marginLeft: '27%',
    marginTop: 5,
    alignItems: 'center',
    marginBottom: 10,
  },
  image: {marginBottom: 10, alignSelf: 'center'},
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  cardText: {
    backgroundColor: '#fdf2f2',
    borderRadius: 10,
    borderColor: '#fae1e1',
    borderWidth: 1,
  },
  cardNo: {fontSize: 20, fontWeight: '700', color: '#313131'},
  cardInnerText: {fontSize: 12, fontWeight: '500', color: '#313131'},
  cardInnerView: {margin: 5, marginBottom:10},
  headlineContainer: {
    marginBottom: 15,
    fontSize: 15,
    fontWeight: '500',
    color: '#313131',
    marginTop: 20,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#fff',
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topIcon: {height: 25, width: 25},
  topText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '-50%',
    marginTop: 3,
    color: '#313131',
  },
  searchView: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#E5E4E2',
    backgroundColor: '#fffafa',
  },
  searchIcon: {marginTop: 10, marginLeft: 10},
  searchInputText: {
    borderRadius: 10,
    width: '95%',
    marginLeft: 10,
    marginTop: -4,
    marginBotto: 5,
  },

  item: {
    backgroundColor: 'white',
    // paddingRight:15,
    // padding: 10,
    marginRight: 15,
    borderRadius: 20,
    width: 250,
    // height:100
    // borderColor:"black",
    // borderWidth:1
  },
  FlatListImage: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    backgroundColor: '#faebec',
    // marginBottom: 20
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#313131',
    textTransform: 'uppercase',
    // text-transform: uppercase;
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    color: '#313131',
    fontWeight: '500',
  },
  time: {
    fontSize: 12,
    color: '#999',
    // marginTop: 5,
    marginLeft: 3,
    color: 'grey',
  },
});
