import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  mainContainer:{
      borderWidth: 1,
      borderColor: '#E5E4E2',
      borderRadius: 10,
      marginTop: 20,
      // marginBottom:10
    },

  textViewStyel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  nextButton: {
    marginTop: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    borderColor: '#E8E8E8',
  },
  Button: {
    justifyContent: 'center',
    marginTop: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#FE4D4D',
    borderColor: '#FE4D4D',
  },
  nextImage: {marginLeft: '45%', marginTop: 5},
  nextButtonText: {
    marginLeft: 10,
    fontWeight: '400',
    fontSize: 16,
    color: '#313131',
  },
  nextButtonView: {flexDirection: 'row', marginTop: 8, marginLeft: 15},
  ButtonView: {justifyContent: 'center'},
  textContainer: {flexDirection: 'column', marginTop: 10},
  textMode: {fontSize: 12, fontWeight: '400', color: '#313131'},
  textOnline: {fontSize: 14, fontWeight: '500', color: '#313131'},
  timeTextStyle: {fontSize: 14, fontWeight: '500', color: '#313131'},
  viewAvailablity: {flexDirection: 'column', marginTop: 10, marginRight: '40%'},
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    //   height:"50%",
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingVertical: 5,
    marginTop: 20,
  },
  sequence: {
    // paddingHorizontal: 16,
    fontSize: 16,
    fontWeight: '500',
    color: '#313131',
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
    marginLeft: 10,
    marginTop: -10,
    // marginBottom: 10,
  },
  details: {
    flex: 1,
    // marginHorizontal: 16,
    marginLeft: 10,
    // flexWrap:"wrap"
    marginTop: -25,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  sessionDuration: {
    fontSize: 12,
    color: '#313131',
    fontWeight: '400',
    // marginLeft:10
  },
  date: {
    fontSize: 12,
    color: '#313131',
    fontWeight: '400',
    marginLeft: 20,
  },
  scheduledTime: {
    fontSize: 12,
    color: '#313131',
    fontWeight: '400',
  },
  textStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 10,
    marginRight: 20,
  },
});
