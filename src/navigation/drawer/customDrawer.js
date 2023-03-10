import React from 'react';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {View, Image} from 'react-native';


const CustomDraw = props => {
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flex: 0.2,
          // backgroundColor: '#004169',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          // source={Images.logo}
          source={require("../../assets/Icons/userProfile.png")}
          style={{height: 250, width: 250}}
          resizeMode="contain"
        />
      </View>
      <DrawerContentScrollView>
        <DrawerItem
          icon={() => (
            <Image
              // source={Images.profileicon}
              source={require("../../assets/Icons/userProfile.png")}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
          )}
          label="Feed"
          labelStyle={{fontSize: 20, fontFamily: 'Nunito'}}
          onPress={() => props.navigation.navigate('My Profile')}
        />
        <DrawerItem
          icon={() => (
            <Image
              // source={Images.referralicon}
              style={{height: 20, width: 20}}
              resizeMode="contain"
            />
          )}
          label="Article"
          labelStyle={{fontSize: 20, fontFamily: 'Nunito'}}
          onPress={() => props.navigation.navigate('Referral')}
        />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDraw;
