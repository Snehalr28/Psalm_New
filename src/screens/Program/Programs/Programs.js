import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Images from '../../../assets/Images/Sample';
import {styles} from './ProgramsStyles';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../components/Button';
import {useFocusEffect} from '@react-navigation/native';
import {baseURL} from '../../../controllers/ApiList';
import CustomHeader from '../../../components/customHeader';
// const baseURL = 'http://54.190.192.105:9192/';
import {
  DisplaySession,
  SingleProgramDetails,
} from '../../../actions/UserActions';
import {getUser} from '../../../selectors/UserSelectors';
import moment from 'moment';
const Programs = ({route}) => {
  const [datanewprogram, setProgramData] = useState({});
  const [isLoading, setisLoading] = useState(true);
  const [showscreen, setShowScreen] = useState(false);
  console.log('isloading true for program', isLoading);
  console.log('Set show screen', showscreen);
  let getuserData = useSelector(getUser);
  console.log(
    'Mentor/mentee Id use for session show',
    getuserData.response.data._id,
  );
  const {ProgramID} = route.params;
  // const {passId} = route.params;
  // const {title} = route.params;
  console.log('Program ID isss==>>', ProgramID);
  // console.log('program Id for progarms', passId);
  // console.log('Title for add programs ', title);
  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };

  const [imageis, setImage] = useState(null);
  const [profileUri, setProfileUri] = useState(null);
  const [price, setPrice] = useState('');
  const [Id, setId] = useState('');
  const [availibilityfrom, setavailibilityfrom] = useState('');
  const [availibility_to, setavailibilityto] = useState('');
  const [categoryid, setcategoryid] = useState('');
  const [createdAt, setcreatedAt] = useState('');
  const [experience, setexperience] = useState('');
  const [description, setdescription] = useState('');
  const [menteelimit, setmenteelimit] = useState('');
  const [mentorshipmode, setmentorshipmode] = useState('');
  const [mentorshipname, setmentorshipname] = useState('');
  const [skills, setskills] = useState(null);
  const [startdate, setstartdate] = useState('');
  const [updateat, setupdatedAt] = useState('');
  const [userid, setuserid] = useState('');
  const [status, setstatus] = useState('');
  const [sessiondata, setSessionData] = useState([]);
  const [expriry, setexpirydate] = useState('');
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   DisplayProgramDetails();
  //   DisplaySessionPro();
  // }, []);

  useFocusEffect(
    React.useCallback(() => {
      DisplayProgramDetails();
      DisplaySessionPro();
      return () => {};
    }, []),
  );
  const DisplayProgramDetails = async () => {
    console.log('display program details check');
    let ProgramOb = {
      _id: ProgramID,
    };

    try {
      dispatch(
        SingleProgramDetails(ProgramOb, cb => {
          console.log('Single program detail Id', ProgramOb);
          console.log('category response check--->>> ', cb.data);

          if (cb.messageID == 200) {
            setisLoading(false);
            setShowScreen(true);
            console.log('Inside IF of program');

            setProgramData(cb.data);
            setId(cb._id);
            setImage(cb.image);
            setavailibilityfrom(cb.availibility_from);
            setavailibilityto(cb.availibility_to);
            setcategoryid(cb.category_id);
            setcreatedAt(cb.createdAt);
            setexperience(cb.experience);
            setdescription(cb.description);
            setexpirydate(cb.expiry_date);
            setProfileUri(cb.data.image);
            setPrice(cb.price);
            setmenteelimit(cb.mentee_limit);
            setmentorshipmode(cb.mentorship_mode);
            setmentorshipname(cb.mentorship_name);
            setskills(cb.skills);
            setstartdate(cb.start_date);
            setstatus(cb.status);
            setupdatedAt(cb.updatedAt);
            setuserid(cb.user_id);
            // setData(cb.data.docs[0].docs);
            // setData(cb.data.docs);
            // navigation.navigate('ProgramList');
          }
          setisLoading(false);
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };

  const DisplaySessionPro = async () => {
    console.log('display session details check');
    let ProgramOb = {
      mentorid: getuserData.response.data._id,
      program_id: ProgramID,
    };

    try {
      dispatch(
        DisplaySession(ProgramOb, cb => {
          console.log('Single session detail Id', ProgramOb);
          console.log(' check session--->>> ', cb.data.docs);

          if (cb.messageID == 200) {
            setShowScreen(true);
            setisLoading(false);
            console.log('Inside Is of session');

            // setProgramData(cb.data);
            // setId(cb._id);
            // setImage(cb.image);
            // setavailibilityfrom(cb.availibility_from);
            // setavailibilityto(cb.availibility_to);
            // setcategoryid(cb.category_id);
            // setcreatedAt(cb.createdAt);
            // setexperience(cb.experience);
            // setdescription(cb.description);
            // setexpirydate(cb.expiry_date);
            // setProfileUri(cb.data.image);
            // setPrice(cb.data.price);
            // setmenteelimit(cb.mentee_limit);
            // setmentorshipmode(cb.mentorship_mode);
            // setmentorshipname(cb.mentorship_name);
            // setskills(cb.skills);
            // setstartdate(cb.start_date);
            // setstatus(cb.status);
            // setupdatedAt(cb.updatedAt);
            // setuserid(cb.user_id);
            // setData(cb.data.docs[0].docs);
            setSessionData(cb.data.docs);
            // navigation.navigate('ProgramList');
          }
          setisLoading(false);
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };
  console.log('mentorshipname', mentorshipname);
  console.log('Price isss', price);
  console.log('Profile Iamge isss', profileUri);
  console.log('program new data isss--->>>', datanewprogram.price);
  console.log('check program dataaa isss--->>>', datanewprogram);
  console.log('check id isss-===>>>', datanewprogram._id);
  console.log(
    'check availibilityfrom isss-===>>>',
    datanewprogram.availibility_from,
  );
  console.log(
    'check availibility_to isss-===>>>',
    datanewprogram.availibility_to,
  );
  console.log('check startdate isss-===>>>', datanewprogram.start_date);
  console.log('check expriry isss-===>>>', datanewprogram.expiry_date);
  console.log(
    'check mentorship_name isss-===>>>',
    datanewprogram.mentorship_name,
  );

  const returndate = item => {
    console.log('value check--->>>', item);
    // let customdate = moment(item).format('YYYY-MM-DD');
    let customdate = moment(item).format('DD-MM-YYYY');
    console.log('Custom daye isss', customdate);
    return customdate;
  };

  const showLoder = () => {
    return (
      <View style={{flex: 1, justifyContent: 'center'}}>
        <ActivityIndicator
          size={'large'}
          color={'black'}
          style={styles.activityIndicator}
        />
      </View>
    );
  };
  const data = [
    {
      id: '1',
      image: Images.introduction,
      title: 'Introduction',
      description:
        'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
      sessionDuration: '15:20 Min',
      date: '06-21-2022',
      scheduledTime: '10:30 AM(EST)',
    },
    {
      id: '2',
      image: Images.deserunt,
      title: 'Deserunt mollit',
      description:
        'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
      sessionDuration: '15:20 Min',
      date: '06-21-2022',
      scheduledTime: '10:30 AM(EST)',
    },
    {
      id: '3',
      image: Images.deserunt1,
      title: 'Deserunt mollit',
      description:
        'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt.',
      sessionDuration: '15:20 Min',
      date: '06-21-2022',
      scheduledTime: '10:30 AM(EST)',
    },
  ];

  const renderItem = ({item}) => (
    <View style={styles.mainContainer}>
      <View style={styles.item}>
        {/* <Image source={item.image} style={styles.image} /> */}
        {item.image != '' ? (
          <Image source={{uri: baseURL + item.image}} style={styles.image} />
        ) : (
          <Image
            style={styles.image}
            // source={require('../../assets/assets/placeholder.png')}
            source={require('../../../assets/assets/placeholder.png')}
          />
        )}

        <View style={styles.details}>
          <Text style={styles.sequence}>
            {/* {item.id}.{item.session_name} */}
            {item.session_name}
          </Text>
          <Text style={styles.descriptionText}>{item.description}</Text>
        </View>
      </View>

      <View style={{flexDirection: 'row'}}>
        <Text style={[styles.sessionDuration, {marginLeft: 7}]}>
          Session duration
        </Text>
        <Text style={[styles.date, {marginLeft: 40}]}>Date</Text>
        <Text style={[styles.scheduledTime, {marginLeft: '20%'}]}>
          Scheduled time
        </Text>
      </View>
      <View style={{flexDirection: 'row', marginBottom: 10}}>
        <Text style={[styles.sessionDuration, styles.incomingSession]}>
          {item.session_duration}
        </Text>
        <Text style={[styles.date, styles.incomingDate]}>
          {returndate(item.start_date)}
          {/* {item.start_date} */}
        </Text>
        <Text style={[styles.scheduledTime, styles.incomingTime]}>
          {item.time}
        </Text>
      </View>
    </View>
  );
  return (
    <>
      {isLoading && showLoder()}
      {showscreen ? (
        <SafeAreaView style={styles.ContainerView}>
          {/* <View style={styles.topContainer}> */}
          {/* <Image
          style={styles.topBack}
          source={require('../../../assets/Icons/BackIcon.png')}
        />
        <Text
          style={styles.programText}>
          Programs
        </Text>
        <Image
          style={{height: 25, width: 25}}
          source={require('../../../assets/Icons/Notification1.png')}
        /> */}
          {/* <CustomHeader
        title="Add New Program"
        // textStyle={{marginLeft:1}}
        leftIcon={require('../../../assets/Icons/BackIcon.png')}
        rightIcon={require('../../../assets/Icons/Notification1.png')}
        // onPress={(e) => {console.log("press on user ");}}
      /> */}
          {/* </View> */}
          <ScrollView
            style={{flex: 1, marginTop: 20}}
            showsVerticalScrollIndicator={false}>
            <View style={{}}>
              {datanewprogram.image != '' ? (
                <Image
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'contain',
                    marginLeft: 10,
                    marginTop: -10,
                  }}
                  source={{uri: baseURL + datanewprogram.image}}
                />
              ) : (
                <Image
                  style={{
                    width: '100%',
                    height: 100,
                    resizeMode: 'contain',
                    marginLeft: 10,
                    marginTop: -10,
                  }}
                  // source={require('../../assets/assets/placeholder.png')}
                  source={require('../../../assets/assets/placeholder.png')}
                />
              )}

              <Text style={styles.topText}>
                {datanewprogram.mentorship_name}
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <Text style={styles.timeTextStyle}>
                  {datanewprogram.start_date} |{' '}
                  {datanewprogram.availibility_from}
                </Text>
                <Text style={[styles.timeTextStyle, {fontSize: 18}]}>
                  ${datanewprogram.price}
                </Text>
              </View>

              <View style={{flex: 1, marginTop: 20}}>
                <SegmentedControlTab
                  values={['Sessions', 'More']}
                  selectedIndex={customStyleIndex}
                  onTabPress={handleCustomIndexSelect}
                  borderRadius={0}
                  tabsContainerStyle={styles.tabsContainerStyle}
                  tabStyle={styles.tabStyle}
                  activeTabStyle={styles.activeTabStyle}
                  tabTextStyle={styles.tabTextStyle}
                  activeTabTextStyle={styles.activeTabTextStyle}
                  lastTabStyle={{marginLeft: '-47%'}}
                />
              </View>
              <View style={styles.lineView}></View>
            </View>

            {customStyleIndex === 0 && (
              <FlatList
                data={sessiondata}
                renderItem={renderItem}
                keyExtractor={item =>
                  console.log(
                    'Show data of session render',
                    item.session_duration,
                  )
                }
                showsVerticalScrollIndicator={false}
              />
            )}

            {customStyleIndex === 1 && (
              <View style={{marginRight: '5%', marginTop: 15}}>
                <Text style={styles.program}>Program Description</Text>
                <Text style={styles.programDescription}>
                  {datanewprogram.description}
                </Text>

                <View style={styles.textViewStyel}>
                  <View style={styles.textContainer}>
                    <Text style={styles.textMode}>Mentorship Mode</Text>
                    <Text style={styles.textOnline}>
                      {datanewprogram.mentorship_mode == 1 ? (
                        <Text>Online</Text>
                      ) : datanewprogram.mentorship_mode == 2 ? (
                        <Text>Offline</Text>
                      ) : null}
                    </Text>
                  </View>
                  <View style={styles.viewAvailablity}>
                    <Text style={styles.textMode}>Availability</Text>
                    <View style={{flexDirection: 'row'}}>
                      <Text style={styles.textOnline}>
                        {datanewprogram.availibility_from}{' '}
                      </Text>
                      <Text> - </Text>
                      <Text style={styles.textOnline}>
                        {datanewprogram.availibility_to}
                      </Text>
                    </View>
                  </View>
                </View>

                <View style={[styles.textViewStyel]}>
                  <View style={styles.textContainer}>
                    <Text style={styles.textMode}>Mentee allowed</Text>
                    <Text style={styles.textOnline}>
                      {datanewprogram.mentee_limit}
                    </Text>
                  </View>
                  <View style={[styles.viewAvailablity, {marginRight: '29%'}]}>
                    <Text style={styles.textMode}>Mentee registered</Text>
                    <Text style={styles.textOnline}>10</Text>
                  </View>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate('Add New Sessions', {
                        NewpassId: datanewprogram._id,
                        starttime: datanewprogram.availibility_from,
                        endtime: datanewprogram.availibility_to,
                        startdate: datanewprogram.start_date,
                        enddate: datanewprogram.expiry_date,
                        programname: datanewprogram.mentorship_name,
                      });
                      // navigation.navigate('Add New Sessions',{sessiondata: datanewprogram})
                    }}
                    style={styles.nextButton}>
                    <View style={styles.nextButtonView}>
                      <Image
                        style={{}}
                        source={require('../../../assets/Icons/clock.png')}
                      />
                      <Text style={styles.nextButtonText}>Add New Session</Text>
                      <Image
                        style={styles.nextImage}
                        source={require('../../../assets/Icons/next.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity
                    onPress={()=> navigation.navigate('Edit Program')}
                    style={styles.nextButton}>
                    <View style={styles.nextButtonView}>
                      <Image
                        style={{}}
                        source={require('../../../assets/Icons/userProgram.png')}
                      />
                      <Text style={styles.nextButtonText}>
                        Registered Mentees
                      </Text>
                      <Image
                        style={[styles.nextImage, {marginLeft: '39%'}]}
                        source={require('../../../assets/Icons/next.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={styles.nextButton}>
                    <View style={styles.nextButtonView}>
                      <Image
                        style={{}}
                        source={require('../../../assets/Icons/Chat.png')}
                      />
                      <Text style={styles.nextButtonText}>
                        Chat with Mentees
                      </Text>
                      <Image
                        style={[styles.nextImage, {marginLeft: '43%'}]}
                        source={require('../../../assets/Icons/next.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={styles.nextButton}>
                    <View style={styles.nextButtonView}>
                      <Image
                        style={{}}
                        source={require('../../../assets/Icons/system.png')}
                      />
                      <Text style={styles.nextButtonText}>
                        Completed Sessions
                      </Text>
                      <Image
                        style={[styles.nextImage, {marginLeft: '38%'}]}
                        source={require('../../../assets/Icons/next.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={styles.nextButton}>
                    <View style={styles.nextButtonView}>
                      <Image
                        style={{}}
                        source={require('../../../assets/Icons/msg.png')}
                      />
                      <Text style={styles.nextButtonText}>Raise a Dispute</Text>
                      <Image
                        style={[styles.nextImage, {marginLeft: '50%'}]}
                        source={require('../../../assets/Icons/next.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View>
                  <TouchableOpacity style={styles.nextButton}>
                    <View style={styles.nextButtonView}>
                      <Image
                        style={{}}
                        source={require('../../../assets/Icons/Stars.png')}
                      />
                      <Text style={styles.nextButtonText}>View Ratings</Text>
                      <Image
                        style={[styles.nextImage, {marginLeft: '55%'}]}
                        source={require('../../../assets/Icons/next.png')}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View style={styles.Button}>
                  <Button
                    onPress={() => {
                      navigation.navigate('Edit Program', {passId: ProgramID});
                      // navigation.navigate('Edit Program');
                      console.log('button');
                    }}
                    title={'Edit Program'}
                  />
                </View>
              </View>
            )}
          </ScrollView>
        </SafeAreaView>
      ) : null}
    </>
  );
};

export default Programs;
