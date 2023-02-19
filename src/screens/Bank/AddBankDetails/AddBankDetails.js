import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TextInput, HelperText} from 'react-native-paper';
import {styles} from './AddBankDetails.styles';
const AddBankDetails = ({navigation}) => {
  const [accountNumber, setAccountNumber] = useState('');
  const [accountConfirm, setAccountConfirm] = useState('');
  const [swiftCode, setSwiftCode] = useState('');
  const [accountNumberError, setAccountNumberError] = useState(false);
  const [accountConfirmError, setAccountConfirmError] = useState(false);
  const [swiftCodeError, setSwiftCodeError] = useState(false);

  const handleSubmitButton = () => {
    if (accountNumber === '') {
      // Alert.alert("Email can not be blank")
      setAccountNumberError(true);
    } else {
      setAccountNumberError(false);
    }
    if (accountConfirm === '') {
      // Alert.alert("Password can not be blank")
      setAccountConfirmError(true);
    } else {
      setAccountConfirmError(false);
    }
    if (swiftCode === '') {
      // Alert.alert("Email can not be blank")
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

          <View style={{flex: 3, justifyContent: 'center'}}>
            <View style={styles.textInputView}>
              <TextInput
                placeholder="Account Number"
                mode="outlined"
                label={'Account Number'}
                outlineColor="black"
                activeOutlineColor="black"
                autoCapitalize="none"
                autoCorrect={false}
                error={accountNumberError}
                value={accountNumber}
                onChangeText={e => ChangeAccountNumber(e)}
              />
              <HelperText type="error" visible={accountNumberError}>
                Enter Correct Account Number
              </HelperText>

              <View style={styles.imageViewStyle}>
                <Image
                  style={styles.imageIconStyle}
                  source={require('../../../assets/assets/eyeicon.png')}
                />
              </View>
            </View>

            <View style={styles.textInputView}>
              <TextInput
                placeholder="Re-enter Account Number"
                mode="outlined"
                label={'Re-enter Account Number'}
                outlineColor="black"
                activeOutlineColor="black"
                autoCapitalize="none"
                autoCorrect={false}
                error={accountConfirmError}
                value={accountConfirm}
                onChangeText={e => changeConfirmAccount(e)}
              />
              <HelperText type="error" visible={accountConfirmError}>
                Account Number is Required
              </HelperText>

              <View style={styles.imageViewStyle}>
                <Image
                  style={styles.imageIconStyle}
                  source={require('../../../assets/assets/eyeicon.png')}

                />
              </View>
            </View>

            <View style={styles.textInputView}>
              <TextInput
                placeholder="SWIFT Code"
                mode="outlined"
                label={'SWIFT Code'}
                outlineColor="black"
                activeOutlineColor="black"
                autoCapitalize="none"
                autoCorrect={false}
                error={swiftCodeError}
                value={swiftCode}
                onChangeText={e => changeSwiftCode(e)}
              />
              <HelperText type="error" visible={swiftCodeError}>
                Invalid Swift Code
              </HelperText>
            </View>
          </View>

          <View style={{flex: 4, marginTop: '70%'}}>
            <TouchableOpacity
              onPress={e => {
                handleSubmitButton(e);
                navigation.navigate('Bank Account Verify');
              }}
              style={{
                flex: 1,
                height: 45,
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
                Proceed
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default AddBankDetails;
