import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import Images from '../../../assets/Images/Sample';
import {styles} from './ProgramsStyles';
import {useNavigation} from '@react-navigation/native';
import {Button} from '../../../components/Button';
import CustomHeader from "../../../components/customHeader"
const Programs = props => {
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
            styles.incomingSession
          ]}>
          {item.sessionDuration}
        </Text>
        <Text
          style={[
            styles.date,
            styles.incomingDate
          ]}>
          {item.date}
        </Text>
        <Text
          style={[
            styles.scheduledTime,
            styles.incomingTime
          ]}>
          {item.scheduledTime}
        </Text>
      </View>
    </View>
  );
  return (
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
        <CustomHeader
          title="Add New Program"
          // textStyle={{marginLeft:1}}
          leftIcon={require('../../../assets/Icons/BackIcon.png')}
          rightIcon={require('../../../assets/Icons/Notification1.png')}
          // onPress={(e) => {console.log("press on user ");}}
        />
      {/* </View> */}
      <ScrollView style={{marginTop: 20}} showsVerticalScrollIndicator={false}>
      <View>
        <Image
          style={{width: '100%', borderRadius: 10, marginBottom: 10}}
          source={require('../../../assets/Images/Sample/session.png')}
        />
        <Text
          style={styles.topText}>
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
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      )}

      
        {customStyleIndex === 1 && (
          <View style={{marginRight: '5%', marginTop:15}}>
            <Text style={styles.program}>Program Description</Text>
            <Text style={styles.programDescription}>
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
