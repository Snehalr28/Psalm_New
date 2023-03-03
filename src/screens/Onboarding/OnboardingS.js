import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Login} from '../Login/Login';


function OnboardingS({navigation}) {
  const [showIntro, setShowIntro] = useState(false);
  console.log("Show Intro response isss", showIntro)
  console.log("Skip Value")

  useEffect(() => {
    AsyncStorage.getItem('first_time').then((value) => {
      setShowIntro({ showIntro: !!value});
    });
    }, []);



  const onDone = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      setShowIntro(true);
      navigation.navigate('Login')
    });
  };
  const onSkip = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      setShowIntro(true);
      navigation.navigate('Login')
    });
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
        <Text style={{color: 'black', marginTop: 15}}>Skip</Text>
      </View>
    );
  };

  const RenderItem = ({item}) => {
    return (
      <View
        style={styles.mainContainer}>
        <Image style={styles.introImageStyle} source={item.image} />
        <View style={styles.subViewData}>
          <Text
            style={styles.titleStyle}>
            {item.title}
          </Text>

          <Text
            style={styles.title1Style}>
            {item.title1}
          </Text>

          <Text
            style={styles.textStyle}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {showIntro ? (
        <Login />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          activeDotStyle={styles.dotStyle}
        />
      )}
    </>
  );
}

export default OnboardingS;
