import { StyleSheet, Text, View } from 'react-native'
import FONTS from "../../constants/fonts"
import COLORS from "../../constants/color"

export const styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    // backgroundColor: item.backgroundColor,
    justifyContent: 'space-around',
    paddingBottom: 80,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  nextStyle:{color: COLORS.WHITE, fontFamily:FONTS.REGULAR},
  buttonCircle: {
    width: 60,
    height: 40,

    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  // titleStyle: {
  //   padding: 10,
  //   textAlign: 'center',
  //   fontSize: 18,
  //   fontWeight: 'bold',
  // },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    marginTop: 50,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  introTextStyle: {
    fontSize: 13,
    color: 'black',
    textAlign: 'left',
  },
  introTitleStyle: {
    marginTop: 100,
    fontSize: 23,
    color: 'black',
    textAlign: 'left',
    fontWeight: 'bold',
  },
  nextDone:{color: COLORS.WHITE, fontFamily:FONTS.REGULAR},
  skipStyle:{color: COLORS.DARK_BLACK, marginTop: 15, fontFamily:FONTS.REGULAR, fontWeight:"500"},
  subViewData:{marginLeft: 30},
  titleStyle:{
    marginTop: 50,
    fontSize: 36,
    textAlign: 'left',
    fontFamily: FONTS.BOLD,
    color:COLORS.DARK_BLACK
  },
  title1Style:{
    fontSize: 36,
    textAlign: 'left',
    marginBottom: 10,
    fontFamily: FONTS.BOLD,
    color:COLORS.DARK_BLACK
  },
  textStyle:{
    marginTop: 5,
    fontSize: 15,
    textAlign: 'left',
    fontFamily:FONTS.REGULAR,
    color: COLORS.DARK_GREY
  },
  dotStyle:{backgroundColor: 'red'},
});

