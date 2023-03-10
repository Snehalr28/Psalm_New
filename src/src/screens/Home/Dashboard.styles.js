import {StyleSheet} from 'react-native';
import FONTS from '../../constants/fonts';
import COLORS from '../../constants/color';

export const styles = StyleSheet.create({
  viewContainer: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#FFF5EE',
    backgroundColor: 'white',
  },
  viewTrade: {
    borderWidth: 1,
    width: 67,
    height: 77,
    borderColor: '#E5E5E5',
    borderRadius: 10,
    backgroundColor: '#FFEBEB',
    justifyContent: 'center',
    marginBottom: 10,
  },
  tradeIcon: {alignSelf: 'center', marginTop: 5, marginLeft: 3},
  innerViewContainer: {flexDirection: 'row', marginTop: 10, marginLeft: 15},
  totalView: {flex: 1, flexDirection: 'column', marginLeft: 10, width: '100%'},
  totalText: {fontSize: 14, fontFamily: FONTS.MEDIUM, color: COLORS.BLACK},
  viewTotalNo: {
    flexDirection: 'row',
    marginTop: -7,
    flexWrap: 'wrap',
    // marginRight: '20%',
  },
  textTotalNo: {fontFamily: FONTS.BOLD, color: COLORS.BLACK, fontSize: 30},
  perTotalView: {
    alignItems: 'center',
    flexDirection: 'row',
    // marginRight: 13,
    marginLeft: 8,
    // marginLeft: '10%',
    // marginRight: '26%',
    // flexWrap:"wrap"
  },
  perTotalText: {
    fontSize: 12,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    flexWrap: 'wrap',
  },
  menteeView: {backgroundColor: '#FFF5F5'},
  currentText: {fontFamily: FONTS.SEMI_BOLD, color: COLORS.BLACK, fontSize: 18},
  totalMentee: {
    fontSize: 30,
    marginTop: 5,
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    flexWrap: 'wrap',
    // width:"50%"
  },
  CurrentView: {backgroundColor: '#FFF5F5', borderRadius: 20},
  currentSubView: {margin: 15},
  currentMenteeText: {
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    fontSize: 18,
  },
  imageTextView: {
    flexDirection: 'row',
    marginRight: '35%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  totalCurrent:{
color:COLORS.BLACK,
fontFamily:FONTS.BOLD,
fontSize:30,
// fontWeight:"700"
  },
  // totalCurrent:{flexWrap: 'wrap'},
  // currentImage: {
  //   // flex:1,
  //   // marginLeft: '27%',
  //   marginTop: 5,
  //   // alignItems: "flex-end",
  //   alignContent:"center",
  //   marginBottom: 10,
  //   // justifyContent:"flex-end"
  // },

  image: {marginBottom: 10, alignSelf: 'center'},
  cardView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  cardText: {
    backgroundColor: '#fdf2f2',
    borderRadius: 10,
    borderColor: '#fae1e1',
    borderWidth: 1,
  },
  cardNo: {fontSize: 20, fontFamily: FONTS.BOLD, color: COLORS.BLACK},
  cardInnerText: {
    fontSize: 12,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
  },
  cardInnerView: {margin: 5, marginBottom: 10},
  headlineContainer: {
    marginBottom: 15,
    fontSize: 15,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
    marginTop: 20,
  },
  tabTextStyle:{
    // fontWeight: '500',
    fontSize: 16,
    color: COLORS.BLACK,
    fontFamily:FONTS.MEDIUM
  },

  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#fff',
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topIcon: {height: 25, width: 25},
  topText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '-50%',
    marginTop: 3,
    color: '#313131',
  },
  searchView: {
    // justifyContent: 'flex-start',
    // flexDirection: 'row',
    // borderWidth: 1,
    // borderRadius: 10,
    // borderColor: '#E5E4E2',
    // backgroundColor: '#fffafa',
    marginLeft: '-10%',
    marginRight: '-10%',
    marginBottom: 15,
  },
  searchIcon: {marginTop: 10, marginLeft: 10},
  searchInputText: {
    borderRadius: 10,
    width: '95%',
    marginLeft: 10,
    marginTop: -4,
    marginBotto: 5,
  },

  item: {
    backgroundColor: 'white',
    // paddingRight:15,
    // padding: 10,
    marginRight: 15,
    borderRadius: 20,
    width: 250,
    // height:100
    // borderColor:"black",
    // borderWidth:1
  },
  FlatListImage: {
    width: '100%',
    height: 130,
    resizeMode: 'cover',
    backgroundColor: '#faebec',
    // marginBottom: 20
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  title: {
    fontSize: 12,
    // fontWeight: 'bold',
    marginTop: 10,
    // color: '#313131',
    textTransform: 'uppercase',
    // text-transform: uppercase;
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
  },
  description: {
    fontSize: 16,
    marginTop: 5,
    // color: '#313131',
    // fontWeight: '500',
    fontFamily: FONTS.MEDIUM,
    color: COLORS.BLACK,
  },
  time: {
    fontSize: 12,
    marginLeft: 3,
    fontFamily: FONTS.MEDIUM,
    color: COLORS.GREY,
  },
});

// export const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginTop:70,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   tabsContainerStyle: {
//     marginHorizontal: 16,
//     marginVertical: 8,
//   },
//   tabStyle: {
//     borderWidth: 0,
//     backgroundColor: 'transparent',
//   },
//   activeTabStyle: {
//     backgroundColor: 'transparent',
//   },
//   activeTabTextStyle: {
//     // color: '#000',

//   },
//   tabContent: {
//     justifyContent: 'center',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 8,
//   },
//   image: {
//     width: 32,
//     height: 32,
//   },
// });
