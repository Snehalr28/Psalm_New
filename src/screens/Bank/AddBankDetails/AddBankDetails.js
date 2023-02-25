import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import {styles} from './AddBankDetails.styles';
import {Button} from '../../../components/Button';
import {TextInputComponent} from '../../../components/textInputComponent/TextInputComponent';
const AddBankDetails = ({navigation}) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountConfirm, setAccountConfirm] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [accountNumberError, setAccountNumberError] = useState(false);
  const [accountConfirmError, setAccountConfirmError] = useState(false);
  const [swiftCodeError, setSwiftCodeError] = useState(false);

  const handleSubmitButton = () => {
    if (accountNumber === '') {
      setAccountNumberError(true);
    } else {
      setAccountNumberError(false);
    }
    if (accountConfirm === '') {
      setAccountConfirmError(true);
    } else {
      setAccountConfirmError(false);
    }
    if (swiftCode === '') {
      setSwiftCodeError(true);
    } else {
      setSwiftCodeError(false);
    }
  };

  const validateAccountNumber = number => {
    let reg = /^\d{16}$/;
    if (reg.test(number) === false) {
      setAccountNumberError(true);
    } else {
      setAccountNumberError(false);
    }
  };
  const ChangeAccountNumber = text => {
    setAccountNumber(text);
    validateAccountNumber(text);
  };

  const validateConfirmAccount = number => {
    let reg = /^\d{16}$/;
    if (reg.test(number) === false) {
      setAccountConfirmError(true);
    } else {
      setAccountConfirmError(false);
    }
  };
  const changeConfirmAccount = text => {
    setAccountConfirm(text);
    validateConfirmAccount(text);
  };

  const validateSwiftCode = number => {
    let reg = /^\d{4}$/;
    if (reg.test(number) === false) {
      setSwiftCodeError(true);
    } else {
      setSwiftCodeError(false);
    }
  };
  const changeSwiftCode = text => {
    setSwiftCode(text);
    validateSwiftCode(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={styles.mainView}>
          <View style={{flex: 2}}>
            <Text style={styles.bankDetailText}>
              Add your bank account details
            </Text>
            <Text style={styles.belongText}>Bank account should belong to</Text>
            <Text style={styles.cameronText}>Cameron Williamson</Text>
          </View>

          <View style={styles.textInputStyel}>
            <TextInputComponent
              emailView={styles.textInputView}
              placeholder={'Account Number'}
              label={'Account Number'}
              onChangeText={() => {
                ChangeAccountNumber();
              }}
              value={accountNumber}
              // error={accountNumberError}
              TextMessageAlert={'Enter Your Number'}
              // condtionText={{color: 'red'}}
              emailIconView={styles.imageViewStyle}
              emailIcon={styles.imageIconStyle}
              source={require('../../../assets/assets/eyeicon.png')}
              // checkCondtion={numberError}
            />

            <TextInputComponent
              emailView={styles.textInputView}
              placeholder={'Re-enter Account Number'}
              label={'Re-enter Account Number'}
              onChangeText={e => changeConfirmAccount(e)}
              value={accountConfirm}
              // error={accountNumberError}
              TextMessageAlert={'Enter Your Number'}
              // condtionText={{color: 'red'}}
              emailIconView={styles.imageViewStyle}
              emailIcon={styles.imageIconStyle}
              source={require('../../../assets/assets/eyeicon.png')}
              // checkCondtion={numberError}
            />

            <TextInputComponent
              emailView={styles.textInputView}
              placeholder={'SWIFT Code'}
              label={'SWIFT Code'}
              onChangeText={e => changeSwiftCode(e)}
              value={swiftCode}
              // error={accountNumberError}
              TextMessageAlert={'Enter Your Number'}
              // condtionText={{color: 'red'}}
              // checkCondtion={numberError}
            />
          </View>

          <View style={styles.buttonView}>
            <Button
              onPress={() => {
                navigation.navigate('Bank Account Verify');
                console.log('button');
              }}
              title={'Proceed'}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddBankDetails;
