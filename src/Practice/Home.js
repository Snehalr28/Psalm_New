import React, {useState, useEffect} from 'react';
import {View, Text, Button, Alert} from 'react-native';

const Home = ({navigation}) => {
  const [counter, setCounter] = useState(0);
  console.log('Counter value', counter);

  useEffect(() => {
    console.log('called Now');
  }, [counter]);
  return (
    <View>
      <Text
        style={{
          marginTop: 50,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 150,
          color: 'red',
        }}>
        {' '}
        Hello World
      </Text>
      <Button title="Click" onPress={() => setCounter(counter + 1)} />
    </View>
  );
};

export default Home;

// import { View, Text,Button} from 'react-native'
// import React,  {useState,useEffect} from 'react'
// import { NavigationContainer } from '@react-navigation/native';

// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Home = ({ navigation }) => {

//     // const [counter, setCounter]=useState(0)
//     // console.log("counter value", counter)
//     // useEffect(() => {

//     //    console.log("called Now")
//     //   },[counter]);
//   return (
//     <View>
//        <Button
//         title="Go to Details"
//         onPress={() => navigation.navigate('Details')}
//       />

//       <Text>Home</Text>
//     </View>
//   )
// }

// export default Home
