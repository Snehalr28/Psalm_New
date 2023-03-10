import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {globalColors} from '../../theme/globalColors';
import {globalFonts} from '../../theme/globalFonts';
import FONTS from "../../constants/fonts"
import COLORS from "../../constants/color"

export const styles = StyleSheet.create({
  icons: {
    height: RFValue(15),
    width: RFValue(15),
    marginTop: RFValue(3),
  },
  forgetPassTxt: {
    marginBottom: RFValue(26),
  },
  button: {
    backgroundColor: '#FE4D4D',
    height: RFValue(45),
    width: '100%',
    marginTop: RFValue(20),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(10),
  },
  backImg: {height: RFValue(30), width: RFValue(30)},
  back: {
    height: RFValue(40),
    width: RFValue(40),
    borderColor: globalColors.white,
    margin: RFValue(20),
    position: 'absolute',
    left: 0,
    top: RFValue(18),
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBack: {height: RFPercentage(57)},
  imageBackView: {flex: 1, alignItems: 'center', marginTop: RFValue(3)},
  logoImage: {height: RFPercentage(50), width: RFPercentage(50)},
  bottomView: {
    flex: 2,
    backgroundColor: '#ffffff',
    bottom: RFValue(80),
    borderTopStartRadius: RFValue(40),
    borderTopEndRadius: RFValue(40),
  },
  signInText: {
    fontSize: RFValue(27),
    fontWeight: 'normal',
    marginVertical: RFValue(10),
    color: 'black',
    // padding:30
  },
  inputLbl: {
    marginLeft: RFValue(10),
    marginVertical: RFValue(4),
    color: 'black',
    fontWeight: '600',
  },
  inputStyles: {
    height: RFValue(50),
    width: '100%',
    borderRadius: RFValue(10),
    marginTop: RFValue(15),
    borderWidth: 0,
    fontFamily: globalFonts.regular,
  },
  forgotpass: {
    alignSelf: 'flex-end',
    color: '#27316F',
    marginBottom: 10,
    fontFamily: globalFonts.regular,
    fontSize: RFValue(16),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: RFValue(18),
    color: globalColors.white,
    fontFamily: globalFonts.regular,
  },
  accountText: {
    color: globalColors.grey,
    fontFamily: globalFonts.regular,
    fontSize: RFValue(14),
  },
  signUpText: {color: globalColors.primaryTheme, fontSize: RFValue(14)},
  textInputView: {marginHorizontal: RFValue(15), paddingVertical: RFValue(15)},
  signUpView: {
    flexDirection: 'row',
    marginTop: RFValue(15),
    alignSelf: 'center',
  },
  resendCode: {
    marginLeft: RFValue(10),
    marginVertical: RFValue(10),
    color: 'black',
  },

  root: {flex: 1, padding: 20},
  title: {textAlign: 'center', fontSize: 30},
  codeFieldRoot: {marginTop: 20, color: 'black'},
  cell: {
    width: 45,
    height: 47,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: '#00000030',
    textAlign: 'center',
    borderRadius: 10,
    color: 'black',
  },
  focusCell: {
    borderColor: '#000',
  },
  InputView: {
    marginHorizontal: 5,
    marginTop: 25,
    borderWidth: 1,
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginBottom: 10,
  },
  Inputstyle: {
    width: '90%',
    marginVertical: 2,
    height: 40,
    color: 'black',
    fontSize: 15,
  },
  InputImageStyle: {
    width: 25,
    height: 25,
  },

  container: {flex:1, backgroundColor:"#ffffff"},
  mainImage: {alignSelf: 'center', marginTop: '20%'},
  otpView: {
    flex: 2,
    marginTop: '10%',
    marginLeft: '10%',
    marginBottom: '5%',
  },
  otpText: { fontSize: 36,     fontFamily:FONTS.BOLD, 
    color:COLORS.DARK_BLACK},
  otpDigitText: {marginTop: 2,  color: COLORS.BLACK,
    fontFamily:FONTS.REGULAR},
  yourEmailText: {fontFamily:FONTS.SEMI_BOLD, marginTop: 2, color:COLORS.BLACK},
  codeFieldView: {marginRight:"10%"},
  bottomTextView: {flexDirection:"row", marginTop:20},
  textBottom: {fontFamily: FONTS.REGULAR, color:COLORS.BLACK},
  resendText:{    fontFamily:FONTS.BOLD,
    color:COLORS.BLACK},
  buttonView:  {
    // flex: 4,
    // justifyContent: 'center',
    // alignItems: 'center',
    // marginTop: 20,
    // marginBottom: 35,


    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 35,
    marginRight:"5%",
    marginLeft:"-5%",
    
    backgroundColor: '#FE4D4D',
    height: 50,
    width: '100%',
    borderRadius: 10,
   
  }
});
