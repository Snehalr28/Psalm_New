import { Platform, StyleSheet } from 'react-native';
import { spacing } from '@/theme';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const styles = StyleSheet.create({
  bgcolor:{
    backgroundColor:'#ffffff',
    height:'100%'
  },
  imgView:{
    height:'70%'
  },
  img:{
    width:'100%',
  },
  bottomBox:{
    // paddingVertical:RFValue(20),
    // paddingLeft:RFValue(20),
    // paddingRight:RFValue(13),
    // backgroundColor:'#ffffff',
    // height:'30%',
    // borderRadius:RFValue(18),
    // position:'relative',
    // bottom:RFPercentage(12)

    paddingVertical:20,
    paddingLeft:20,
    paddingRight:13,
    backgroundColor:'#ffffff',
    height:'30%',
    borderRadius:18,
    position:'relative',
    bottom:12
  },
    // signInText: {
    // fontSize: RFValue(19),
    // fontWeight:'500',
    // // fontFamily: globalFonts.bold,
    // color: '#000000',
    // marginVertical: RFValue(18),
    // textAlign:'left'


    signInText: {
        fontSize: 19,
        fontWeight:'500',
        // fontFamily: globalFonts.bold,
        color: '#000000',
        marginVertical: 18,
        textAlign:'left'
  },
  paraText:{
    // fontSize: RFValue(14),
    // color:'black',
    // // textAlign:'left',
    // lineHeight:RFValue(20),
    // letterSpacing:RFValue(1)

    fontSize: 14,
    color:'black',
    // textAlign:'left',
    lineHeight:20,
    letterSpacing:1
  },
  skipBtnView:{
    position:'absolute',
    bottom:Platform.OS === 'ios' ? '-15%' : '-35%',
    left:'15%'
    // marginHorizontal:RFPercentage(6),
    // marginVertical:RFPercentage(3),
  },
  skipBtn:{
    // fontSize:RFValue(18),
    // color:'#27316F',
    
    // fontWeight:'500',
    // fontStyle:'normal',

    fontSize:18,
    color:'#27316F',
    fontWeight:'500',
    fontStyle:'normal',
  },
 
});
