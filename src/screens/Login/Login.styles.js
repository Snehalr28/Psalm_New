import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {globalColors} from '../../theme/globalColors';
import {globalFonts} from '../../theme/globalFonts';
import COLORS from "../../constants/color"
import FONTS from "../../constants/fonts"
export const styles = StyleSheet.create({
  icons: {
    height: RFValue(15),
    width: RFValue(15),
    marginTop: RFValue(3),
  },
  button: {
    backgroundColor: '#FE4D4D',
    height: RFValue(45),
    width: '100%',
    marginTop: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: RFValue(10),
  },
  imageBack: {height: RFPercentage(42)},
  imageBackView: {flex: 1, alignItems: 'center', marginTop: RFValue(20)},
  logoImage: {height: RFPercentage(28), width: RFPercentage(45)},
  bottomView: {
    height: RFPercentage(50),
    flex: 2,
    backgroundColor: '#fff',
    bottom: RFValue(80),
    // borderTopStartRadius: RFValue(40),
    // borderTopEndRadius: RFValue(40),
  },
  signInText: {
    fontSize: RFValue(30),
    fontWeight: 'bold',
    marginVertical: RFValue(30),
    marginTop: 20,
    marginBottom: 1,
    color: 'black',
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
    color: 'black',
    marginBottom: 10,
    fontFamily: globalFonts.regular,
    fontSize: RFValue(16),
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: RFValue(18),
    color: globalColors.white,
    fontFamily: globalFonts.regular,
    fontWeight: 'bold',
  },
  accountText: {
    color: globalColors.grey,
    fontFamily: globalFonts.regular,
    fontSize: RFValue(14),
  },
  signUpText: {color: 'black', fontSize: RFValue(14)},
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
    position: 'absolute',
    width: 25,
    height: 25,
  },
  container: {flex: 1, backgroundColor: '#fff'},
  loginImage: {marginTop: '20%', marginLeft: '10%', marginBottom: '10%'},
  textView: {flex: 2, marginLeft: '10%'},
  loginText: {
    color: COLORS.DARK_BLACK,
    fontSize: 30,
    marginBottom: 5,
    fontFamily:FONTS.BOLD
  },
  emailView: {
    flex: 3,
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '10%',
    marginBottom:10,
    // justifyContent:"center",
    // alignItems:"center"
  },
  welcome:{
   color: COLORS.DARK_GREY,
   fontFamily:FONTS.REGULAR
  },
  textKeep:{
    color: COLORS.GREY,
    fontFamily:FONTS.REGULAR
  },
  emailInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: '100%',
    color: 'black',
    height: 45,
  },
  emailIconView: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: '10%',
    position: 'absolute',
  },
  emailIcon: {height: 20, width: 20, marginTop: 15},
  passwordView: {
  
    flex: 3,
    marginTop: '3%',
    marginLeft: '10%',
    marginRight: '10%',
    // marginBottom:"5%"
  },
  eyeImageView: {
    alignSelf: 'flex-end',
    marginTop: 5,
    marginRight: '10%',
    position: 'absolute',
  },
  bottomTextView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: '10%',
    marginLeft: '8%',
    marginTop: '-2%',
    // flexWrap: 'wrap',
  },
  CheckBoxView: {flex: 3, flexDirection: 'row' },
  textSigned: {
    marginTop: -4,
    color: 'black',
    fontSize: 12,
  },
  fgtPassword: {
    marginTop: -4,
    color: 'black',
    fontSize: 12,
    fontWeight: 'bold',
  },
  bottomButton: {
    flex: 4,
    alignContent: 'flex-end',
    marginTop: '20%',
    marginBottom: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonView: {
    flex: 4,
    backgroundColor: '#FE4D4D',
    height: 50,
    width: '80%',
    borderRadius: 10,
  },
  textBottom: {
    flex: 4,
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signupText: {
    // color: 'black',
    fontWeight: '600',
    alignSelf: 'center',
    marginLeft: 3,
    fontFamily:FONTS.BOLD,
    color:COLORS.BLACK
  },
  buttonViewnew: {marginTop: 15, flexDirection: 'row'},
  mentorButton: {
    backgroundColor: 'black',
    height: 35,
    width: '25%',
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  mentorButton1: {
    backgroundColor: '#DDDDDD',
                  height: 35,
                  width: '25%',
                  borderBottomLeftRadius: 20,
                  borderTopLeftRadius: 20,
  },
  menteeButton: {
    backgroundColor: '#DDDDDD',
    height: 35,
    width: '25%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  menteeButton1: {
    backgroundColor: 'black',
    height: 35,
    width: '25%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  imageIcon:{height: 20, width: 20, marginTop: 25},
  menteeText: {color: 'black', alignSelf: 'center', padding: 5},
  menteeText1: {color: 'white', alignSelf: 'center', padding: 5},
  mentorText: {color: 'white', alignSelf: 'center', padding: 5},
  mentorText1: {color: 'black', alignSelf: 'center', padding: 5},
  checkboxView:{
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 20,
    justifyContent: 'space-around',
    marginLeft: '7%',
    marginRight: '8%',
  },
  checkStyle:{
    // color: 'black',
    borderWidth: 5,
    // borderColor: 'red',
    marginTop: -5,
    marginLeft:-15,
    // borderRadius:
  },
  // textKeep:{color: , paddingHorizontal: 6, fontSize: 10},
  forgotText:{
    color: COLORS.BLACK,
    paddingHorizontal: 6,
    fontSize: 10,
    // fontWeight: 'bold',
    marginTop:3,
    // marginLeft:"%"
  fontFamily:FONTS.SEMI_BOLD
  },
  middleView:{justifyContent: 'space-between', flexDirection: 'row'},
  keepMeStyle:{marginLeft: 1, marginTop:2, },
  keepMeText:{color:"#959593", fontSize:10, fontFamily:FONTS.REGULAR},
  dontHaveText:{fontFamily: FONTS.REGULAR, color:COLORS.BLACK},
});
