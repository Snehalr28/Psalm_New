import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
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
  card: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    // marginTop:15,
    paddingVertical: 15,
    paddingHorizontal: 15,
    // width: '100%',
    marginVertical: 10,
    // borderWidth:1,
    flexWrap:"wrap"
  },
  topText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: '-63%',
    marginTop: 3,
    color: '#313131',
  },
  // searchView: {
  //   justifyContent: 'flex-start',
  //   flexDirection: 'row',
  //   borderWidth: 1,
  //   borderRadius: 10,
  //   borderColor: '#E5E4E2',
  //   backgroundColor: '#fffafa',
  // },
  // searchIcon: {marginTop: 10, marginLeft: 10},
  elevation: {
    shadowColor: '#000',
    elevation: 3,
    flexDirection:"row"
  },
  topHeading: {
    marginTop: 23,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headingText: {fontSize: 20, fontWeight: '500', color: '#313131'},
  // searchInputText: {
  //   borderRadius: 10,
  //   width: '95%',
  //   marginLeft: 10,
  //   marginTop: -4,
  //   marginBotto: 5,
  // },
  image: {
    width: 109,
    height:109,
    // borderRadius: 10
  },
  textContainer: {
    marginLeft: 7,
    justifyContent: 'center',
    // marginRight:50
  //   width:160,
  // borderWidth:1
  // height:109,
  // width:190
  // flexWrap:"wrap"
  },
  title: {
    fontSize: 12,
    fontWeight: '500',
    color: '#313131',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: 'grey',
    fontWeight: '500',
    marginBottom: 7,
    marginTop: 3,
  },
  sessionText: {
    color: '#313131',
    marginLeft: -9,
    marginBottom: 3,
  },
  session: {
    fontSize: 12,
    color: '#313131',
    fontWeight: '500',
    marginLeft: '-5%',
  },
  priceText: {
    color: '#313131',
    marginBottom: 3,
    // marginRight:10
    fontSize:10
  },
  price: {
    fontSize: 12,
    color: '#313131',
    fontWeight: '500',
  },
  textInputStyle: {
    height: 40,
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#009688',
    backgroundColor: '#FFFFFF',
  },
});
