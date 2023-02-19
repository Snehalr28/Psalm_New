// import React, {useEffect} from 'react';
// import {StyleSheet, View, Text} from 'react-native';
// import {useNavigation} from '@react-navigation/native';
// export const BankAccountAdd = props => {
//   const navigation = useNavigation();
//   return (
//    <View>
//     <Text>BankAccountAdd Screen</Text>
//    </View>
//   );
// }
// export default BankAccountAdd;

import React from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {styles} from './AddBankAccount.styles';

const AddBankAccount = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#fff', padding: 20}}>
      <View style={{flex: 1, justifyContent: 'center', marginTop: '35%', marginLeft:"5%"}}>
        <Image source={require('../../../assets/assets/bankDone.png')} />
      </View>
      <View
        style={{
          flexDirection: 'column',
          justifyContent: 'center',
          marginTop: '10%',
        }}>
        <Text style={styles.bottomTextStyle}>Your bank account has been</Text>
        <Text style={styles.bottomTextStyle}>successfully added</Text>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', }}>
        <TouchableOpacity
          onPress={e => {
            //   handleSubmitButton(e);
            navigation.navigate('Dashborad');
          }}
          style={{
            //   flex: 1,
            height: '20%',
            width: '100%',
            backgroundColor: '#FE4D4D',
            justifyContent: 'center',
            // alignItems: 'flex-end',

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
           Continue
          </Text>
        </TouchableOpacity>
      </View>
      {/* <View>
        <View style={styles.loginImage}>
          <Image source={require('../../assets/assets/bank.png')} />
        </View>
        <Text>AddBankDone</Text>
      </View> */}
    </SafeAreaView>
  );
};

export default AddBankAccount;
