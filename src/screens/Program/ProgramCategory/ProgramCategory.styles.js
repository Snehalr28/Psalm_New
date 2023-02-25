import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  imageView:{borderColor: '#E5E4E2', borderRadius: 10, borderWidth: 0.5, },
  container:{
    flex: 1,
    flexDirection: 'column',
    // padding: 35,
    paddingTop: 10,
    // paddingLeft:10,
    backgroundColor: '#fff',
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
    margin:25
    // width:
  },

 
  image: {
    // justifyContent:"center",
  // padding:25,
    height: 150,
    width:310
  },

  title: {
    marginTop:5,
    marginBottom:20,
    marginLeft: 16,
    fontSize: 18,
    fontWeight: '600',
    // fontSize:26,
    color:"#313131"
  },
});
