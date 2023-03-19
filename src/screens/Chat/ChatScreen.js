import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, Image} from 'react-native';
import CustomHeader from '../../components/customHeader';
import COLORS from '../../constants/color';
import FONTS from '../../constants/fonts';

const ChatScreen = () => {
  const navigateBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <CustomHeader
        title="Discover Mentors"
        leftIcon={require('../../assets/Icons/BackIcon.png')}
        onPressLeftIcon={navigateBack}
        rightIcon={require('../../assets/Icons/Notification1.png')}
      />
      <View>
        {/* <Text>menotor</Text> */}
        <View style={{flexDirection: 'row'}}>
          <Image
            style={{height: 90, width: 90, borderRadius: 10}}
            source={require('../../assets/Images/Sample/discoverProfile.png')}
          />
          <View style={{marginLeft: 10, alignSelf: 'center'}}>
            <Text
              style={{
                color: COLORS.BLACK,
                fontFamily: FONTS.MEDIUM,
                fontSize: 16,
              }}>
              Ronald Richards
            </Text>
            <View style={{flexDirection: 'row', marginTop: 3}}>
              <Image
                style={{height: 10, width: 10, marginTop: 3, marginRight: 5}}
                source={require('../../assets/Icons/reviewStar.png')}
              />
              <Text
                style={{
                  color: COLORS.BLACK,
                  fontSize: 12,
                  fontFamily: FONTS.REGULAR,
                  marginLeft: 3,
                }}>
                4.5
              </Text>
            </View>
          </View>
        </View>
        <Text>Mentorship Programs</Text>
      </View>
    </SafeAreaView>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    backgroundColor: '#fff',
  },
});
