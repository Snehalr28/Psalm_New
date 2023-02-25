import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {globalColors} from "../../theme/globalColors"

// import {globalColors} from '../../theme/globalColors';
import {globalFonts} from '../../theme/globalFonts';


export const styles = StyleSheet.create({
    container: {flex: 1, backgroundColor: 'white'},
    textInputView: {marginTop: 10},
    mainView: {marginLeft: 20, marginTop: 20, marginRight: 20},
    bankDetailText: {
      color: 'black',
      fontWeight: '400',
      fontSize: 18,
      marginBottom: 30,
    },
    belongText: {
      color: 'black',
      fontWeight: '500',
      fontSize: 20,
      marginBottom: 10,
    },
    cameronText: {
      color: 'black',
      fontWeight: '500',
      fontSize: 16,
      marginBottom: 30,
    },
    imageViewStyle: {
      alignSelf: 'flex-end',
      marginTop: 9,
      marginRight: '8%',
      position: 'absolute',
    },
    imageIconStyle: {height: 17, width: 19, marginTop: 13},
    textInputStyel: {flex: 3, justifyContent: 'center'},
    buttonView:{flex: 4, marginTop: '79%', marginBottom:20},
  });