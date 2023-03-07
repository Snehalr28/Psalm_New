import {StyleSheet} from 'react-native';
import COLORS from "../../constants/color"
import FONTS from "../../constants/fonts"
// import COLORS from "../../constants/color"
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 25,
    backgroundColor: '#fff',
  },
  // containerView: {
  //   flexDirection: 'row',
  //   justifyContent: 'space-between',
  //   marginBottom: 20,
  // },
  topView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  // topIcon:{height: 25, width: 25},
  // topText:{
  //   fontSize: 14,
  //   // fontWeight: 'bold',
  //   marginLeft: '-35%',
  //   // marginTop: 3,
  //   color: COLORS.BLACK,
  //   fontFamily: FONTS.BOLD
    
  // },
  profileStyle:{
    backgroundColor: COLORS.LIGHT_GREY,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: 80,
    borderRadius: 50,
    flex: 1,
    // marginTop: 5,
    // marginLeft: 10,
    // marginBottom:5
  },
  profileImage:{height: 72, width: 72},
  // textMentor:{flexDirection: 'row', marginTop: 25, marginBottom: 15},
  // container: {
    //   flex: 1,
    //   justifyContent: 'center',
    //   alignItems: 'center',
    //   backgroundColor: '#ffffff',
    // },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    dynamicView:{marginTop: -15, },
    MentorTextStyle: {
      fontWeight: 'bold',
      fontSize: 15,
      marginRight: 25,
    },
    buttonText:{
      backgroundColor: 'white',
      fontWeight: '700',
      alignSelf: 'center',
      fontSize: 16,
      color: '#FE4D4D',
    },
    button:{backgroundColor: 'white', borderWidth:1, borderColor:COLORS.PRIMARY},
    SkillText:{fontFamily:FONTS.MEDIUM, fontSize: 20, color: COLORS.BLACK},
    MenteeTextStyle: {
      fontWeight: 'bold',
      fontSize: 15,
      marginLeft: 25,
    },
    switchStyle: {
    },
 
  addMore:{
    fontFamily:FONTS.MEDIUM, fontSize: 20, color: COLORS.BLACK,
    fontSize: 18,
    // fontWeight: '400',
  },
  remove:{color: 'red', fontSize: 18, fontFamily:FONTS.REGULAR, },
    textInputView: {
      marginTop: '5%',
    },
    requiredView: {marginBottom: '-8%', marginTop: 5},
    requiredText: {marginLeft: '21%', color: '#FF0000'},
    textInputField: {borderWidth: 1, borderRadius: 10, borderColor: '#313131'},
    imageViewStyle: {
      alignSelf: 'flex-end',
      marginTop: 5,
      marginRight: '8%',
      position: 'absolute',
    },
    imageIconStyle: {height: 20, width: 20, marginTop: 13},
    imageView: {
      alignSelf: 'flex-end',
      marginTop: 12,
      marginRight: '10%',
      position: 'absolute',
    },
    image: {height: 20, width: 20, marginTop: 10},
    addDocument: {
      // fontWeight: '500',
      fontSize: 16,
      marginBottom: 25,
      color: COLORS.BLACK,
      marginTop: 30,
      fontFamily:FONTS.MEDIUM
    },
    buttonView: {
      backgroundColor: 'white',
      height: 50,
      width: '80%',
      borderRadius: 10,
    },
    buttonText: {
      fontWeight: 'bold',
      fontSize: 16,
      color: '#FE4D4D',
      fontWeight: '700',
    },
  });
