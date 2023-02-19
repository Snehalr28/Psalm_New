

import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
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
    },
    elevation: {
      shadowColor: '#000',
      elevation: 3,
    },
    image: {
      width: 109,
      height: 109,
      // borderRadius: 10
    },
    textContainer: {
      marginLeft: 16,
      justifyContent: 'center',
    },
    title: {
      fontSize: 16,
      fontWeight: '500',
      color: '#313131',
      marginBottom: 6,
    },
    date: {
      fontSize: 12,
      color: '#313131',
      fontWeight: '500',
      marginBottom: 7,
      marginTop: 3,
    },
    sessionText: {
      color: '#313131',
      marginLeft: '20%',
      marginBottom:3
    },
    session: {
      fontSize: 14,
      color: '#313131',
      fontWeight: '500',
      marginLeft: '20%',
    },
    priceText: {
      color: '#313131',
      marginBottom:3
    },
    price: {
      fontSize: 14,
      color: '#313131',
      fontWeight: '500',
    },
  });