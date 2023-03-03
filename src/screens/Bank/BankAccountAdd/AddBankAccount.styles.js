import {StyleSheet} from 'react-native';
import FONTS from '../../../constants/fonts';
import COLORS from '../../../constants/color';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff', padding: 20},
  viewContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '35%',
    marginLeft: '5%',
  },
  bottomTextStyle: {
    alignSelf: 'center',
    // fontWeight: '600',
    fontSize: 20,
    // color: '#000',
    color: COLORS.BLACK,
    fontFamily: FONTS.BOLD,
  },
  buttonView: {flex: 1, justifyContent: 'flex-end'},
});
