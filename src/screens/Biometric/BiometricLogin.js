import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  SafeAreaView,
  TouchableHighlight,
  NativeModules,
  TouchableOpacity,
} from 'react-native';
// import {
//   APP_ICON,
//   READER,
// } from '../../../Constants/App_Constant';
import {Button} from 'native-base';

import TouchID from 'react-native-touch-id';
import reactotron from 'reactotron-react-native';
// import {useNavigation} from '@react-navigation/native';
// const navigation = useNavigation();
export default class BiometricLogin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      biometryType: null,
    };
    this._clickHandler = this._clickHandler.bind(this);
    this.authenticate = this.authenticate.bind(this);
  }

  componentDidMount() {
    TouchID.isSupported().then(biometryType => {
      this.setState({biometryType});
    });
  }
  _clickHandler() {
    TouchID.isSupported()
      .then(this.authenticate)
      .catch(error => {
        AlertIOS.alert('TouchID not supported');
      });
  }

  authenticate() {
    return TouchID.authenticate()
      .then(success => {
        alert('Authenticated Successfully');
        this.props.navigation.navigate('Login');
      })
      .catch(error => {
        console.log(error);
        AlertIOS.alert(error.message);
      });
  }



  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.InnerViewOne}>
       {/* <Image
             source={require('../../../Icons/Touch2.png')}
           style={{width: 100, height: 70, marginTop: -10}}
           alt="Alternate Text"
           resizeMode="contain"
       /> */}
      </View>
        <View style={styles.InnerViewTwo}>
          {/* <Text style={styles.socialfeedtext}>
            {this.state.biometryType == true ? 'Touch ID' : 'Face ID'}
          </Text> */}
          <Text style={styles.socialfeedtext}>
             Use Fingerprint
          </Text>
          <Text style={styles.missingsubext}>
          For making your account, more safe and secured, you can add your fingerprint to log into your account.
          </Text>
        </View>
        {/* {this.state.biometryType == true?  */}
        <View style={styles.InnerViewReader}>
          <Image
           source={require('../../assets/Icons/Touch2.png')}
            style={{width: 220, height: 220}}
            alt="Alternate Text"
            resizeMode="contain"
          />
        </View>
        {/* : null} */}
        <View
          style={{
            paddingTop: 8,
            marginHorizontal: '10%',
            marginTop: '10%',
            marginBottom: 10,
            // borderRadius:10
          }}>
          <TouchableOpacity 
         style={{ alignItems: 'center',
         backgroundColor: '#FE4D4D',
         padding: 10,
        borderRadius:10}}
          onPress={this._clickHandler}>
          <Text
              style={{
                // marginLeft: 30,
                fontSize: 14,
                fontWeight: 500,
                color: 'white',
              }}>
            Set Up Now
            </Text>
            {/* <Text style={{color: 'white', fontSize: 16, fontWeight: '700'}}>
              {`Authenticate with ${
                this.state.biometryType == true
                  ? 'TouchID'
                  : this.state.biometryType
              }`}
            </Text> */}
          </TouchableOpacity>

          <TouchableOpacity
            // onPress={() => navigation.navigate('Login')}>
              onPress={() => console.log("pressed")}>
            <Text
              style={{
              marginTop:20,
              alignSelf:"center",
               
                fontSize: 14,
                fontWeight: 500,
                color: 'black',
              }}>
             Will do it later
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}


const errors = {
  LAErrorAuthenticationFailed:
    'Authentication was not successful because the user failed to provide valid credentials.',
  LAErrorUserCancel:
    'Authentication was canceled by the user—for example, the user tapped Cancel in the dialog.',
  LAErrorUserFallback:
    'Authentication was canceled because the user tapped the fallback button (Enter Password).',
  LAErrorSystemCancel:
    'Authentication was canceled by system—for example, if another application came to foreground while the authentication dialog was up.',
  LAErrorPasscodeNotSet:
    'Authentication could not start because the passcode is not set on the device.',
  LAErrorTouchIDNotAvailable:
    'Authentication could not start because Touch ID is not available on the device',
  LAErrorTouchIDNotEnrolled:
    'Authentication could not start because Touch ID has no enrolled fingers.',
  RCTTouchIDUnknownError: 'Could not authenticate for an unknown reason.',
  RCTTouchIDNotSupported: 'Device does not support Touch ID.',
};

// function authenticate() {
//   return TouchID.authenticate()
//     .then(success => {
//       alert('Authenticated Successfully');
//       return this.props.navigation.navigate('drawer')
//     })
//     .catch(error => {
//       console.log(error)
//       AlertIOS.alert(error.message);
//     });
// }

function passcodeAuth() {
  return PasscodeAuth.isSupported()
    .then(() => {
      return PasscodeAuth.authenticate();
    })
    .then(success => {
      AlertIOS.alert('Authenticated Successfully');
    })
    .catch(error => {
      console.log(error);
      AlertIOS.alert(error.message);
    });
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    InnerViewOne: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    InnerViewTwo: {
      paddingHorizontal: 30,
      paddingTop: 50,
    },
    socialfeedtext: {
      fontSize: 22,
      fontWeight: '700',
      color: 'black',
    },
    missingsubext: {
      fontSize: 14,
      color: 'grey',
      paddingTop: 5,
      paddingBottom: 25,
    },
    InnerViewReader: {
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: 30,
    },
    btn: {
      borderRadius: 3,
      marginTop: 200,
      paddingTop: 15,
      paddingBottom: 15,
      paddingLeft: 15,
      paddingRight: 15,
      backgroundColor: '#0391D7',
    },
  });
  