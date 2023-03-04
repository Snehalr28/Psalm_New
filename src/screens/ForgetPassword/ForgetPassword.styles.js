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
    marginBottom: RFValue(10),
    paddingHorizontal: 30,
    marginLeft: -20,
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
  imageBack: {height: RFPercentage(55)},
  imageBackView: {flex: 1, alignItems: 'center', marginTop: RFValue(5)},
  logoImage: {height: RFPercentage(50), width: RFPercentage(50)},
  bottomView: {
    flex: 2,
    backgroundColor: '#ffffff',
    bottom: RFValue(80),
    borderTopStartRadius: RFValue(40),
    borderTopEndRadius: RFValue(40),
  },
  signInText: {
    fontSize: RFValue(35),
    fontWeight: 'bold',
    marginVertical: RFValue(10),
    color: 'black',
    paddingHorizontal: 30,
    marginLeft: -20,
  },
  inputLbl: {
    marginLeft: RFValue(10),
    color: '#FE4D4D',
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
    color: '#FE4D4D',
    marginBottom: 10,
    fontFamily: globalFonts.regular,
    fontSize: RFValue(16),
  },
  // buttonText: {
  //   fontSize: RFValue(18),
  //   color: globalColors.white,
  //   fontFamily: globalFonts.regular,
  // },
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
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10,
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    alignItems: 'center',
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
  container: {flex: 1, backgroundColor: '#ffffff'},
  forgotPasswordImage: {alignSelf: 'center', marginTop: '20%'},
  viewForgot: {
    flex: 2,
    marginTop: '10%',
    marginLeft: '10%',
    marginBottom: '5%',
  },
  textForgot: { fontSize: 36, fontFamily:FONTS.BOLD, color:COLORS.DARK_BLACK},
  textPassword: {
    fontSize: 36,
    marginTop: -10,
    fontFamily:FONTS.BOLD, 
    color:COLORS.DARK_BLACK
  },
  sentence: {   color: COLORS.DARK_GREY,
    fontFamily:FONTS.REGULAR, marginTop: 2},
  emailView: {
    flex: 3,
    marginLeft: '10%',
    marginRight: '10%',
    marginTop: 5,
  },
  emailInput: {
    borderWidth: 1,
    borderRadius: 10,
    color: 'black',
    height: 45,
  },
  imageView: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: '10%',
    position: 'absolute',
  },
  emailIcon: {height: 20, width: 20, marginTop: 10},
  submitView: {
    flex: 4,
    marginTop: "10%",
  },
});



