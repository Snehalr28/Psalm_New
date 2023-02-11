import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from 'react-native';

import AppIntroSlider from 'react-native-app-intro-slider';

import Onboarding from 'react-native-onboarding-swiper';

import {Login} from '../Login/Login';

function OnboardingS({navigation}) {
  const [showRealApp, setShowRealApp] = useState(false);
  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
  const color = isLight => backgroundColor(!isLight);

  const slides = [
    {
      key: 'one',
      title: 'Get',
      title1: 'Mentorship',
      text: 'Welcome to our mentorship platform',

      image: require('../../assets/assets/group1.png'),
      backgroundColor: '#fff',
    },
    {
      key: 'two',
      title: 'Find',
      title1: 'Best Mentors',
      text: 'We provide you with access to professionals, who would guide you in your journey to success.',
      image: require('../../assets/assets/group2.png'),
      backgroundColor: '#fff',
    },
    {
      key: 'three',
      title1: 'Guide a mentee',
      text: 'Join Psalm as a Mentor and help Mentees become experts tomorrow',
      image: require('../../assets/assets/group3.png'),
      backgroundColor: '#fff',
    },
  ];

  renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={{color: 'white'}}>Next</Text>
      </View>
    );
  };

  renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={{color: 'white'}}>Next</Text>
      </View>
    );
  };

  renderSkipButton = () => {
    return (
      <View>
        <Text style={{color:"black", marginTop:15, }}>Skip</Text>
      </View>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          // alignItems: 'center',
          justifyContent: 'space-around',
          paddingBottom: 80,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <View style={{marginLeft: 30}}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 36,
              color: 'black',
              textAlign: 'left',
              fontWeight: 'bold',
              // marginBottom: 10,
            }}>
            {item.title}
          </Text>

          <Text
            style={{
              fontSize: 36,
              color: 'black',
              textAlign: 'left',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            {item.title1}
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              color: 'grey',
              textAlign: 'left',
            }}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <Login />
      ) : (
        // <Forgetpassword/>
        // <View><Text>Hello</Text></View>

        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          activeDotStyle={{backgroundColor: 'red'}}
        />
      )}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  buttonCircle: {
    width: 60,
    height: 40,
    // backgroundColor: 'rgba(0, 0, 0, .2)',
    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    // borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    marginTop: 50,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  introTextStyle: {
    fontSize: 13,
    color: 'black',
    textAlign: 'left',
    // justifyContent: 'flex-end',
    // marginRight:100,
    // paddingVertical: 30,
    // marginTop:20,
    // marginLeft:20
    // marginBottom:100
  },
  introTitleStyle: {
    marginTop: 100,
    fontSize: 23,
    color: 'black',
    // textAlign: 'center',
    // marginRight:100,
    // marginBottom: 16,
    textAlign: 'left',
    fontWeight: 'bold',
  },
});

export default OnboardingS;
