import {StyleSheet} from 'react-native';
import FONTS from "../../constants/fonts"
import COLORS from "../../constants/color"
export const styles = StyleSheet.create({
  imageView:{borderColor: COLORS.HIGHLIGHT, borderRadius: 20, borderWidth: 0.5, width:"100%"},
  container:{
    flex: 1,
    flexDirection: 'column',
    paddingTop: 10,
    backgroundColor: COLORS.WHITE,
  },
  topContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
    marginLeft: '5%',
    marginRight: '5%',
  },
  topText:{
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: '-63%',
    marginTop: 3,
  },

  iconStyle:{height: 25, width: 25},
  itemContainer: {
    // borderColor:"black",
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
    justifyContent:"center",
    // margin:25
    // width:"100%"
  },

 
  image: {
    height: 165,
    width:"100%",
    borderTopLeftRadius:10, 
    borderTopRightRadius:10
  },

  title: {
    marginTop:5,
    marginBottom:20,
    marginLeft: 16,
    fontSize: 18,
    fontFamily:FONTS.SEMI_BOLD,
    color: COLORS.BLACK
  },
  mainContainer: {
    borderWidth: 1,
    borderColor: COLORS.HIGHLIGHT,
    borderRadius: 10,
    marginTop: 20,
    // marginBottom:10
  },  item: {
    //   height:"50%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 5,
    marginTop: 20,
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginLeft: 10,
    marginTop: -10,
    // marginBottom: 10,
  }, 
  details: {
    // height:100,
    // width:200,
    flex: 1,
    // marginHorizontal: 16,
    marginLeft: 10,
    // flexWrap:"wrap"
    marginTop: -25,
  },
  details1: {
    flex: 1,
    flexDirection:"row",
    // marginHorizontal: 16,
    marginLeft: 100,
    // flexWrap:"wrap"
    marginTop: -50,
  },  
  sequenceS: {
    color:"#313131",
    // paddingHorizontal: 16,
    marginTop:15,
    // marginRight:10,
    fontSize: 17,
    // fontWeight:"bold",
    fontWeight: '600',
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
  },


  sequence: {
    color:"red",
    // color:"#313131",
    // paddingHorizontal: 16,
    marginTop:15,
    // marginRight:10,
    fontSize: 16,
    // fontWeight: '500',
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  seq: {
    marginBottom:50,marginRight:20,
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  sequence3: {
    // marginLeft:100,
    // marginRight:20,
    // paddingHorizontal: 16,
    marginTop:15,
    // marginRight:10,
    fontSize: 16,
    // fontWeight: '500',
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  seq1: {
    // marginLeft:100,
    // marginRight:20,
    // paddingHorizontal: 16,
  
    // marginRight:10,
    fontSize: 13,
    // fontWeight: '500',
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  sequence1: {
    // paddingHorizontal: 16,
    // marginTop:15,
    // marginRight:10,
    fontSize: 16,
    // fontWeight: '500',
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  descriptionText: {
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
  },
  sessionDuration: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
  },
  date: {
    fontSize: 12,
    color: COLORS.BLACK,
    // fontWeight: '400',
    marginLeft: 20,
    fontFamily: FONTS.REGULAR,
  },  scheduledTime: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
  }, incomingSession: {
    marginLeft: 5,
    // fontWeight: '500',
    fontSize: 14,
    color: COLORS.BLACK,
    fontFamily: FONTS.SEMI_BOLD,
  }, incomingDate: {
    marginLeft: '19%',
    // fontWeight: '500',
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    fontSize: 14,
  },  scheduledTime: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.REGULAR,
  },  incomingTime: {
    marginLeft: '4%',
    color: COLORS.BLACK,
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 14,
  },
});
