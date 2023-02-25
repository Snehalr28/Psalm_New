import {StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {globalColors} from '../../theme/globalColors';
import {globalFonts} from '../../theme/globalFonts';

export const styles = StyleSheet.create({
 
  
  
  container: {flex:1, backgroundColor:"#ffffff", },
  main: {alignSelf: 'center', marginTop: '20%',},
  TextView: {
    width:"90%",
    marginTop: '2%',
    marginLeft: '2%',
    // marginRight:'5%',
    marginBottom: '5%',
    color: 'black',
    fontWeight:'bold',
    fontSize:18,
  },
  InsideText: {color: 'black', marginLeft: '2%', marginTop: 2, fontSize:14, alignItems:"center"},

  
});
