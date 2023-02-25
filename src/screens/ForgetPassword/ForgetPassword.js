import {Button} from '../../components';
import {SafeAreaView} from 'react-native-safe-area-context';
import * as regex from '../../test-utils/regex';
import React, {useState} from 'react';
import {Image, Text, View, Alert} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useDispatch, useSelector} from 'react-redux';
import {styles} from './ForgetPassword.styles';
import {forgotPassword} from '../../actions/UserActions';
import {useFocusEffect} from '@react-navigation/native';
import {TextInputComponent} from '../../components/textInputComponent/TextInputComponent';

export const ForgetPassword = ({route, navigation}) => {
  const [email, setEmail] = useState('');
  const [empty, setEmpty] = useState(false);
  const [checkemail, SetCheckEmail] = useState(false);

  const dispatch = useDispatch();
  let forgotLoader = useSelector(state => state.user.isForgotRequest);
  const submitPressed = async () => {
    console.log('forget password');
    if (!regex.validateEmail(email)) {
      return;
    }
    try {
      dispatch(
        forgotPassword({email}, cb => {
          console.log('Check Email<<', email, cb);
          if (cb != false) {
            console.log('check', cb.responseCode);
            if (cb.responseCode == 200) {
              alert('Otp sent successfully');
              navigation.navigate('VerifyEmail', {
                email: email,
                type: 'forgot',
              });
            }
          }
        }),
      );
    } catch (error) {
     alert('Invalid Email address');
    }
  };

  const handleSendButton = () => {
    if (email === '') {
      setEmpty(true);
    } else {
      setEmpty(false);
    }
  };
  const validateEmail = email => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(email) === false) {
      SetCheckEmail(true);
      setEmpty(false);
    } else {
      setEmpty(false);
      SetCheckEmail(false);
    }
  };
  const emailChange = text => {
    setEmail(text);
    validateEmail(text);
  };

  useFocusEffect(
    React.useCallback(() => {
      return () => {
        setEmail('');
        setEmpty(false);
        SetCheckEmail(false);
      };
    }, []),
  );

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={{flex: 1}}>
          <View style={styles.forgotPasswordImage}>
            <Image source={require('../../assets/assets/Forget1.png')} />
          </View>
          <View style={styles.viewForgot}>
            <Text style={styles.textForgot}>Forgot</Text>
            <Text style={styles.textPassword}>Password?</Text>
            <Text style={styles.sentence}>
              Don’t worry! It happens. Please enter the address associated with
              your account.
            </Text>
          </View>
          <View style={styles.emailView}>
            <TextInputComponent
              placeholder={'Email'}
              label={'Email'}
              styleInput={styles.materialView}
              onChangeText={emailChange}
              value={email}
              empty={empty}
              error={empty}
              TextMessageAlert={'Email must be valid email address'}
              TextMessage={'Email is required'}
              condtionText={{color: 'red'}}
              checkCondtion={checkemail}
              emailIconView={styles.imageView}
              emailIcon={styles.emailIcon}
              source={require('../../assets/assets/emailicon.png')}
            />
            <View style={styles.submitView}>
              <Button
                onPress={() => {
                  submitPressed();
                  handleSendButton();
                }}
                textStyle={styles.buttonText}
                title={'Send'}
              />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};
export default ForgetPassword;
