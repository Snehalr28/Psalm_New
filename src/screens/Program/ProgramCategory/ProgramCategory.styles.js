import {StyleSheet} from 'react-native';
import FONTS from "../../../constants/fonts"
import COLORS from "../../../constants/color"
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
});
