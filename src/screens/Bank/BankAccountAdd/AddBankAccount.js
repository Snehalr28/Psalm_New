import React from 'react';
import {SafeAreaView} from 'react-native';
import {Text, View, Image,} from 'react-native';
import {styles} from './AddBankAccount.styles';
import {Button} from "../../../components/Button"

const AddBankAccount = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.viewContainer}>
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
      <View style={styles.buttonView}>
            <Button
              onPress={() => {
                navigation.navigate('Dashborad');
                console.log('button');
              }}
              title={'Continue'}
            />
      </View>
    </SafeAreaView>
  );
};

export default AddBankAccount;
