import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  textInputView: {
    marginTop: '5%',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: 20,
    backgroundColor: '#fff',
  },
  imageView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  imageStyle: {height: 20, width: 20, marginTop: 4},
  editText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: '-57%',
    marginTop: 3,
  },
  imageIcon: {height: 25, width: 25},
  playIcon: {alignSelf: 'flex-end', marginTop: -25, marginRight: 20},
});
