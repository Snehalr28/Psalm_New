import {StyleSheet} from 'react-native';
import FONTS from '../../../constants/fonts';
import COLORS from '../../../constants/color';
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: COLORS.WHITE,
  },
  containerView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topIcon: {height: 25, width: 25},
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 15,
    marginVertical: 10,
    flexWrap: 'wrap',
  },
  topText: {
    fontSize: 14,
    marginLeft: '-63%',
    marginTop: 3,
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
  },
  elevation: {
    shadowColor: COLORS.DARK_BLACK,
    elevation: 3,
    flexDirection: 'row',
  },
  topHeading: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headingText: {fontSize: 20, color: COLORS.BLACK, fontFamily: FONTS.BOLD},

  image: {
    width: 109,
    height: 109,
  },
  textContainer: {
    marginLeft: 7,
    justifyContent: 'center',
  },
  title: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    marginBottom: 7,
    marginTop: 3,
    color: COLORS.GREY,
    fontFamily: FONTS.MEDIUM,
  },
  sessionText: {
    color: COLORS.BLACK,
    marginLeft: -9,
    marginBottom: 3,
  },
  priceText: {
    marginBottom: 3,
    fontSize: 10,
    color: COLORS.BLACK,
    fontFamily:FONTS.REGULAR
  },
  price: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
  },
  totalSession: {
    color: COLORS.BLACK,
    fontFamily:FONTS.REGULAR,
    marginLeft: 5,
    fontSize: 10,
  },
  totalSessionNo: {
    fontSize: 12,
    color: COLORS.BLACK,
    fontFamily: FONTS.MEDIUM,
    marginLeft: 5,
  },
});
