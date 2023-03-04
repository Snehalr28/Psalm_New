import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Text, View, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Images from '../../../assets/Images/Sample';
import {styles} from './ProgramsStyles';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../components/Button';
import {ProgramDetails} from '../../../actions/UserActions';
const Programs = props => {
  useEffect(() => {
    // ShowProgramDetails();
  }, []);



  

  const ShowProgramDetails = async () => {
    console.log('Program List');
    let ProgramDataOb = {
      mentorid: '63f5af8c247174c71f3e2133',
      programid: '63ee0fbafb4bd634c1730177',
    };
    try {
      dispatch(
        ProgramDetails(ProgramDataOb, cb => {
          console.log('show Program Detials', cb.data.docs);
          // var mydata=[]
          // mydata=cb.data.docs;
          // mydata.map((e1)=>{
          //   console.log(e1.image,"data is");
          // })
          if (cb != false) {
            // setData(cb.data.docs)
            console.log('check', cb.responseCode);
            if (cb.status === 'success') {
              //  setData(cb.data.docs)
              // navigation.navigate('ProgramList');
            }
          }
        }),
      );
    } catch (error) {
      Alert.alert('Invalid Data');
    }
  };

  const [customStyleIndex, setCustomStyleIndex] = useState(0);
  const handleCustomIndexSelect = index => {
    setCustomStyleIndex(index);
  };
  const navigation = useNavigation();
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
        <Image source={item.image} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.sequence}>
            {item.id}.{item.title}
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
        <Text
          style={[
            styles.sessionDuration,
            {marginLeft: 5, fontWeight: '500', fontSize: 14},
          ]}>
          {item.sessionDuration}
        </Text>
        <Text
          style={[
            styles.date,
            {marginLeft: '19%', fontWeight: '500', fontSize: 14},
          ]}>
          {item.date}
        </Text>
        <Text
          style={[
            styles.scheduledTime,
            {marginLeft: '6%', fontWeight: '500', fontSize: 14},
          ]}>
          {item.scheduledTime}
        </Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={styles.ContainerView}>
      <View style={styles.topContainer}>
        <Image
          style={styles.topBack}
          source={require('../../../assets/Icons/BackIcon.png')}
        />
        <Text style={styles.programText}>Programs</Text>
        <Image
          style={{height: 25, width: 25}}
          source={require('../../../assets/Icons/Notification1.png')}
        />
      </View>
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
        <View>
          <Image
            style={{width: '100%', borderRadius: 10, marginBottom: 10}}
            source={require('../../../assets/Images/Sample/session.png')}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              color: '#313131',
              marginBottom: 10,
            }}>
            Aliqua id fugiat nostrud irure
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.timeTextStyle}>02-21-2022 | 03:50 PM</Text>
            <Text style={[styles.timeTextStyle, {fontSize: 18}]}>$14.99</Text>
          </View>

          <View style={{marginTop: 20}}>
            <SegmentedControlTab
              values={['Sessions', 'More']}
              selectedIndex={customStyleIndex}
              onTabPress={handleCustomIndexSelect}
              borderRadius={0}
              tabsContainerStyle={{
                borderColor: 'black',
              }}
              tabStyle={{
                marginRight: '50%',
                borderColor: 'white',
              }}
              activeTabStyle={{
                backgroundColor: 'white',
                marginTop: 2,
                borderColor: 'black',
                borderTopColor: 'white',
                borderEndColor: 'white',
                borderStartColor: 'white',
              }}
              tabTextStyle={{color: 'black', fontWeight: 'bold', fontSize: 14}}
              activeTabTextStyle={{color: 'black'}}
              lastTabStyle={{marginLeft: '-47%'}}
            />
          </View>
          <View style={{height: 1, backgroundColor: '#E5E4E2'}}></View>
        </View>

        {customStyleIndex === 0 && (
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
          />
        )}

        {customStyleIndex === 1 && (
          <View style={{marginRight: '5%'}}>
            <Text style={{marginBottom: 5}}>Program Description</Text>
            <Text>
              Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt
              qui esse pariatur duis deserunt mollit dolore cillum minim tempor
              enim. Elit aute irure tempor cupidatat incididunt.
            </Text>

            <View style={styles.textViewStyel}>
              <View style={styles.textContainer}>
                <Text style={styles.textMode}>Mentorship Mode</Text>
                <Text style={styles.textOnline}>Online</Text>
              </View>
              <View style={styles.viewAvailablity}>
                <Text style={styles.textMode}>Availability</Text>
                <Text style={styles.textOnline}>24*7</Text>
              </View>
            </View>

            <View style={[styles.textViewStyel]}>
              <View style={styles.textContainer}>
                <Text style={styles.textMode}>Mentee allowed</Text>
                <Text style={styles.textOnline}>150</Text>
              </View>
              <View style={[styles.viewAvailablity, {marginRight: '29%'}]}>
                <Text style={styles.textMode}>Mentee registered</Text>
                <Text style={styles.textOnline}>150</Text>
              </View>
            </View>

            <View>
              <TouchableOpacity style={styles.nextButton}>
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
              <TouchableOpacity style={styles.nextButton}>
                <View style={styles.nextButtonView}>
                  <Image
                    style={{}}
                    source={require('../../../assets/Icons/userProgram.png')}
                  />
                  <Text style={styles.nextButtonText}>Registered Mentees</Text>
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
                  <Text style={styles.nextButtonText}>Chat with Mentees</Text>
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
                  <Text style={styles.nextButtonText}>Completed Sessions</Text>
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
                    source={require('../../../assets/Icons/Star.png')}
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
                  navigation.navigate('Edit Program');
                  console.log('button');
                }}
                title={'Edit Program'}
              />
            </View>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Programs;
