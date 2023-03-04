import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    root: {flex: 1, padding: 20, backgroundColor: 'white'},
    title: {textAlign: 'center', fontSize: 30},
    codeFieldRoot: {marginTop: 20},
    cell: {
      width: 40,
      height: 40,
      lineHeight: 38,
      fontSize: 24,
      borderWidth: 2,
      borderColor: '#00000030',
      textAlign: 'center',
      borderRadius: 10,
    },
    focusCell: {
      borderColor: '#000',
    },
    loginImage: {marginTop: '15%', padding:10},
    upperText:{fontSize: 14, fontWeight: '400', color:"#313131"},
    codeField:{marginLeft: 10, marginRight: 10},
    textView: {flexDirection: 'row', marginTop: 20, marginLeft: 10},
    resendText:{color: 'black', fontWeight: '600'},
  buttonView:{marginTop: '42%'},
  });