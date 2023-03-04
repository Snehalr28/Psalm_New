import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, Image,ActivityIndicator} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import AppIntroSlider from 'react-native-app-intro-slider';
import {Login} from '../Login/Login';


function OnboardingS({navigation}) {
  const [showIntro, setShowIntro] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  console.log("Show Intro response isss", showIntro)
  console.log("Skip Value")

  useEffect(() => {
    AsyncStorage.getItem('first_time').then((value) => {
      if(value=='true'){
      setShowIntro(true);
      }
      setisLoading(false);

    });
    }, []);



  const onDone = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      setShowIntro(true);
      navigation.navigate('Login')
    });
  };
  const onSkip = () => {
    AsyncStorage.setItem('first_time', 'true').then(() => {
      setShowIntro(true);
      navigation.navigate('Login')
    });
  };

  const slides = [
    {
      key: 'one',
      title: 'Get',
      title1: 'Mentorship',
      text: 'Welcome to our mentorship platform',

      image: require('../../assets/assets/group1.png'),
      backgroundColor: '#fff',
    },
    {
      key: 'two',
      title: 'Find',
      title1: 'Best Mentors',
      text: 'We provide you with access to professionals, who would guide you in your journey to success.',
      image: require('../../assets/assets/group2.png'),
      backgroundColor: '#fff',
    },
    {
      key: 'three',
      title1: 'Guide a mentee',
      text: 'Join Psalm as a Mentor and help Mentees become experts tomorrow',
      image: require('../../assets/assets/group3.png'),
      backgroundColor: '#fff',
    },
  ];

  renderNextButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={{color: 'white'}}>Next</Text>
      </View>
    );
  };

  renderDoneButton = () => {
    return (
      <View style={styles.buttonCircle}>
        <Text style={{color: 'white'}}>Next</Text>
      </View>
    );
  };

  renderSkipButton = () => {
    return (
      <View>
        <Text style={{color: 'black', marginTop: 15}}>Skip</Text>
      </View>
    );
  };
 const showLoder=()=>{
  return(
    <>
       <ActivityIndicator size={'large'} color={'black'} style={styles.activityIndicator}/>
    </>
  )
 }
  const RenderItem = ({item}) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,

          justifyContent: 'space-around',
          paddingBottom: 80,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <View style={{marginLeft: 30}}>
          <Text
            style={{
              marginTop: 50,
              fontSize: 36,
              color: 'black',
              textAlign: 'left',
              fontWeight: 'bold',
            }}>
            {item.title}
          </Text>

          <Text
            style={{
              fontSize: 36,
              color: 'black',
              textAlign: 'left',
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            {item.title1}
          </Text>

          <Text
            style={{
              marginTop: 5,
              fontSize: 15,
              color: 'grey',
              textAlign: 'left',
            }}>
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <>
      {isLoading && showLoder()}
      {showIntro ? (
        <Login />
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          renderDoneButton={renderDoneButton}
          renderNextButton={renderNextButton}
          renderSkipButton={renderSkipButton}
          showSkipButton={true}
          onDone={onDone}
          onSkip={onSkip}
          activeDotStyle={{backgroundColor: 'red'}}
        />
       )} 
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  buttonCircle: {
    width: 60,
    height: 40,

    backgroundColor: 'red',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,

    justifyContent: 'center',
    alignItems: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    marginTop: 50,
    width: 300,
    height: 300,
    alignSelf: 'center',
  },
  introTextStyle: {
    fontSize: 13,
    color: 'black',
    textAlign: 'left',
  },
  introTitleStyle: {
    marginTop: 100,
    fontSize: 23,
    color: 'black',

    textAlign: 'left',
    fontWeight: 'bold',
  },
  activityIndicator: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
 }
});

export default OnboardingS;

// import React from 'react';
// import {Login} from '../Login/Login';
// import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppIntroSlider from 'react-native-app-intro-slider';
// // import {Login} from '@/screens';
// import {logo, background} from '@/assets';
// import {styles} from './Onboardingstyle';
// // import { NAVIGATION } from '@/constants';
// import {RFValue} from 'react-native-responsive-fontsize';
// // import { ActivityIndicator } from 'react-native-paper';
// // import { TouchableOpacity } from 'react-native-gesture-handler';
// const slides = [
//   {
//     key: 'one',
//     title: 'Get',
//     title1: 'Mentorship',
//     text: 'Welcome to our mentorship platform',

//     image: require('../../assets/assets/group1.png'),
//     backgroundColor: '#fff',
//   },
//   {
//     key: 'two',
//     title: 'Find',
//     title1: 'Best Mentors',
//     text: 'We provide you with access to professionals, who would guide you in your journey to success.',
//     image: require('../../assets/assets/group2.png'),
//     backgroundColor: '#fff',
//   },
//   {
//     key: 'three',
//     title1: 'Guide a mentee',
//     text: 'Join Psalm as a Mentor and help Mentees become experts tomorrow',
//     image: require('../../assets/assets/group3.png'),
//     backgroundColor: '#fff',
//   },
// ];


//   renderDoneButton = () => {
//     return (
//       <View>
//         <Text style={{color: 'white',backgroundColor:"red"}}>Next</Text>
//       </View>
//     );
//   };

//   renderSkipButton = () => {
//     return (
//       <View>
//         <Text style={{color: 'black', marginTop: 15,backgroundColor:"red"}}>Skip</Text>
//       </View>
//     );
//   };

//     renderNextButton = () => {
//     return (
//       <View>
//         <Text style={{color: 'white', backgroundColor:"red"}}>Next</Text>
//       </View>
//     );
//   };
// export default class OnboardingS extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showRealApp: false,
//       loading: true,
//     };
//   }
//   componentDidMount() {
//     AsyncStorage.getItem('first_time').then(value => {
//       console.log(value,'value>>>');
//       // this.setState({showRealApp: !!value, loading: false});
//     });
//   }
//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     AsyncStorage.setItem('first_time', 'true').then(() => {
//       this.setState({ showRealApp: true });
//     this.props.navigation.navigate('Login')
//     });
//   };
//   skipPress = () => {
//     AsyncStorage.setItem('first_time', 'true').then(() => {
//       this.setState({showRealApp: true});
//       this.props.navigation.navigate('Login');
//     });
//   };
//   _renderItem = ({item}) => {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: "white",
//           // backgroundColor: item.backgroundColor,

//           justifyContent: 'space-around',
//           paddingBottom: 80,
//         }}>
//         <Image style={styles.introImageStyle} source={item.image} />
//         <View style={{marginLeft: 30}}>
//           <Text
//             style={{
//               marginTop: 50,
//               fontSize: 36,
//               color: 'black',
//               textAlign: 'left',
//               fontWeight: 'bold',
//             }}>
//             {item.title}
//           </Text>

//           <Text
//             style={{
//               fontSize: 36,
//               color: 'black',
//               textAlign: 'left',
//               fontWeight: 'bold',
//               marginBottom: 10,
//             }}>
//             {item.title1}
//           </Text>

//           <Text
//             style={{
//               marginTop: 5,
//               fontSize: 15,
//               color: 'grey',
//               textAlign: 'left',
//             }}>
//             {item.text}
//           </Text>
//         </View>
//         <TouchableOpacity
//           onPress={this.skipPress}
//           style={{
//             // position: 'absolute',
//             // bottom: Platform.OS === 'ios' ? '-15%' : '-35%',
//             // left: '15%',
//           }}>
//           <View>
//             <Text
//               style={{
//                 fontSize: RFValue(18),
//                 // color: '#27316F',
//                 color:"black",
//                 // backgroundColor:"red",
//                 fontWeight: '500',
//                 fontStyle: 'normal',
//                 marginTop:400
//               }}>
//               Skip
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   render() {
//     // if(this.state.loading) return <ActivityIndicator size="large" />
//     if (this.state.showRealApp) {
//       return (<Login />)
//       // return console.log('Onboarded');
//     } else {
//       return (
//         <AppIntroSlider
//           renderItem={this._renderItem}
//           data={slides}
//           onDone={this._onDone}
//           renderDoneButton={renderDoneButton}
//           renderNextButton={renderNextButton}
//           renderSkipButton={renderSkipButton}

//           // showSkipButton={true}
//           // onSkip={onSkip}
//           // activeDotStyle={{backgroundColor: 'red'}}
//         />
//       );
//     }
//   }
// }













// // import React, {useState, useEffect} from 'react';
// // import {StyleSheet, View, Text, Image,ActivityIndicator} from 'react-native';
// // import AsyncStorage from '@react-native-async-storage/async-storage';
// // import AppIntroSlider from 'react-native-app-intro-slider';
// // import {Login} from '../Login/Login';


// // function OnboardingS({navigation}) {
// //   const [showIntro, setShowIntro] = useState(false);
// //   console.log("Show Intro response isss", showIntro)
// //   console.log("Skip Value")

// //   useEffect(() => {
// //     AsyncStorage.getItem('first_time').then((value) => {
// //       setShowIntro({ showIntro: !!value});
// //     });
// //     }, []);



// //   const onDone = () => {
// //     AsyncStorage.setItem('first_time', 'true').then(() => {
// //       setShowIntro(true);
// //       navigation.navigate('Login')
// //     });
// //   };
// //   const onSkip = () => {
// //     AsyncStorage.setItem('first_time', 'true').then(() => {
// //       setShowIntro(true);
// //       navigation.navigate('Login')
// //     });
// //   };

// //   const backgroundColor = isLight => (isLight ? 'blue' : 'lightblue');
// //   const color = isLight => backgroundColor(!isLight);

// //   const slides = [
// //     {
// //       key: 'one',
// //       title: 'Get',
// //       title1: 'Mentorship',
// //       text: 'Welcome to our mentorship platform',

// //       image: require('../../assets/assets/group1.png'),
// //       backgroundColor: '#fff',
// //     },
// //     {
// //       key: 'two',
// //       title: 'Find',
// //       title1: 'Best Mentors',
// //       text: 'We provide you with access to professionals, who would guide you in your journey to success.',
// //       image: require('../../assets/assets/group2.png'),
// //       backgroundColor: '#fff',
// //     },
// //     {
// //       key: 'three',
// //       title1: 'Guide a mentee',
// //       text: 'Join Psalm as a Mentor and help Mentees become experts tomorrow',
// //       image: require('../../assets/assets/group3.png'),
// //       backgroundColor: '#fff',
// //     },
// //   ];

// //   renderNextButton = () => {
// //     return (
// //       <View style={styles.buttonCircle}>
// //         <Text style={{color: 'white'}}>Next</Text>
// //       </View>
// //     );
// //   };

// //   renderDoneButton = () => {
// //     return (
// //       <View style={styles.buttonCircle}>
// //         <Text style={{color: 'white'}}>Next</Text>
// //       </View>
// //     );
// //   };

// //   renderSkipButton = () => {
// //     return (
// //       <View>
// //         <Text style={{color: 'black', marginTop: 15}}>Skip</Text>
// //       </View>
// //     );
// //   };

// //   const RenderItem = ({item}) => {
// //     return (
// //       <View
// //         style={{
// //           flex: 1,
// //           backgroundColor: item.backgroundColor,

// //           justifyContent: 'space-around',
// //           paddingBottom: 80,
// //         }}>
// //         <Image style={styles.introImageStyle} source={item.image} />
// //         <View style={{marginLeft: 30}}>
// //           <Text
// //             style={{
// //               marginTop: 50,
// //               fontSize: 36,
// //               color: 'black',
// //               textAlign: 'left',
// //               fontWeight: 'bold',
// //             }}>
// //             {item.title}
// //           </Text>

// //           <Text
// //             style={{
// //               fontSize: 36,
// //               color: 'black',
// //               textAlign: 'left',
// //               fontWeight: 'bold',
// //               marginBottom: 10,
// //             }}>
// //             {item.title1}
// //           </Text>

// //           <Text
// //             style={{
// //               marginTop: 5,
// //               fontSize: 15,
// //               color: 'grey',
// //               textAlign: 'left',
// //             }}>
// //             {item.text}
// //           </Text>
// //         </View>
// //       </View>
// //     );
// //   };

// //   return (
// //     <>
// //       {/* {showIntro ? (
// //         <Login />
// //       ) : ( */}
// //         <AppIntroSlider
// //           data={slides}
// //           renderItem={RenderItem}
// //           renderDoneButton={renderDoneButton}
// //           renderNextButton={renderNextButton}
// //           renderSkipButton={renderSkipButton}
// //           showSkipButton={true}
// //           onDone={onDone}
// //           onSkip={onSkip}
// //           activeDotStyle={{backgroundColor: 'red'}}
// //         />
// //       {/* )} */}
// //     </>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1,
// //     backgroundColor: '#fff',
// //     alignItems: 'center',
// //     padding: 10,
// //     justifyContent: 'center',
// //   },
// //   buttonCircle: {
// //     width: 60,
// //     height: 40,

// //     backgroundColor: 'red',
// //     borderTopLeftRadius: 10,
// //     borderTopRightRadius: 10,
// //     borderBottomRightRadius: 10,
// //     borderBottomLeftRadius: 10,

// //     justifyContent: 'center',
// //     alignItems: 'center',
// //   },
// //   titleStyle: {
// //     padding: 10,
// //     textAlign: 'center',
// //     fontSize: 18,
// //     fontWeight: 'bold',
// //   },
// //   paragraphStyle: {
// //     padding: 20,
// //     textAlign: 'center',
// //     fontSize: 16,
// //   },
// //   introImageStyle: {
// //     marginTop: 50,
// //     width: 300,
// //     height: 300,
// //     alignSelf: 'center',
// //   },
// //   introTextStyle: {
// //     fontSize: 13,
// //     color: 'black',
// //     textAlign: 'left',
// //   },
// //   introTitleStyle: {
// //     marginTop: 100,
// //     fontSize: 23,
// //     color: 'black',

// //     textAlign: 'left',
// //     fontWeight: 'bold',
// //   },
// // });

// // export default OnboardingS;

// import React from 'react';
// import {Login} from '../Login/Login';
// import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import AppIntroSlider from 'react-native-app-intro-slider';
// // import {Login} from '@/screens';
// import {logo, background} from '@/assets';
// import {styles} from './Onboardingstyle';
// // import { NAVIGATION } from '@/constants';
// import {RFValue} from 'react-native-responsive-fontsize';
// // import { ActivityIndicator } from 'react-native-paper';
// // import { TouchableOpacity } from 'react-native-gesture-handler';
// const slides = [
//   {
//     key: 'one',
//     title: 'Get',
//     title1: 'Mentorship',
//     text: 'Welcome to our mentorship platform',

//     image: require('../../assets/assets/group1.png'),
//     backgroundColor: '#fff',
//   },
//   {
//     key: 'two',
//     title: 'Find',
//     title1: 'Best Mentors',
//     text: 'We provide you with access to professionals, who would guide you in your journey to success.',
//     image: require('../../assets/assets/group2.png'),
//     backgroundColor: '#fff',
//   },
//   {
//     key: 'three',
//     title1: 'Guide a mentee',
//     text: 'Join Psalm as a Mentor and help Mentees become experts tomorrow',
//     image: require('../../assets/assets/group3.png'),
//     backgroundColor: '#fff',
//   },
// ];


//   renderDoneButton = () => {
//     return (
//       <View>
//         <Text style={{color: 'white',backgroundColor:"red"}}>Next</Text>
//       </View>
//     );
//   };

//   renderSkipButton = () => {
//     return (
//       <View>
//         <Text style={{color: 'black', marginTop: 15,backgroundColor:"red"}}>Skip</Text>
//       </View>
//     );
//   };

//     renderNextButton = () => {
//     return (
//       <View>
//         <Text style={{color: 'white', backgroundColor:"red"}}>Next</Text>
//       </View>
//     );
//   };
// export default class OnboardingS extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showRealApp: false,
//       loading: true,
//     };
//   }
//   componentDidMount() {
//     AsyncStorage.getItem('first_time').then(value => {
//       console.log(value,'value>>>');
//       // this.setState({showRealApp: !!value, loading: false});
//     });
//   }
//   _onDone = () => {
//     // User finished the introduction. Show real app through
//     // navigation or simply by controlling state
//     AsyncStorage.setItem('first_time', 'true').then(() => {
//       this.setState({ showRealApp: true });
//     this.props.navigation.navigate('Login')
//     });
//   };
//   skipPress = () => {
//     AsyncStorage.setItem('first_time', 'true').then(() => {
//       this.setState({showRealApp: true});
//       this.props.navigation.navigate('Login');
//     });
//   };
//   _renderItem = ({item}) => {
//     return (
//       <View
//         style={{
//           flex: 1,
//           backgroundColor: "white",
//           // backgroundColor: item.backgroundColor,

//           justifyContent: 'space-around',
//           paddingBottom: 80,
//         }}>
//         <Image style={styles.introImageStyle} source={item.image} />
//         <View style={{marginLeft: 30}}>
//           <Text
//             style={{
//               marginTop: 50,
//               fontSize: 36,
//               color: 'black',
//               textAlign: 'left',
//               fontWeight: 'bold',
//             }}>
//             {item.title}
//           </Text>

//           <Text
//             style={{
//               fontSize: 36,
//               color: 'black',
//               textAlign: 'left',
//               fontWeight: 'bold',
//               marginBottom: 10,
//             }}>
//             {item.title1}
//           </Text>

//           <Text
//             style={{
//               marginTop: 5,
//               fontSize: 15,
//               color: 'grey',
//               textAlign: 'left',
//             }}>
//             {item.text}
//           </Text>
//         </View>
//         <TouchableOpacity
//           onPress={this.skipPress}
//           style={{
//             // position: 'absolute',
//             // bottom: Platform.OS === 'ios' ? '-15%' : '-35%',
//             // left: '15%',
//           }}>
//           <View>
//             <Text
//               style={{
//                 fontSize: RFValue(18),
//                 // color: '#27316F',
//                 color:"black",
//                 // backgroundColor:"red",
//                 fontWeight: '500',
//                 fontStyle: 'normal',
//                 marginTop:400
//               }}>
//               Skip
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   render() {
//     // if(this.state.loading) return <ActivityIndicator size="large" />
//     if (this.state.showRealApp) {
//       return (<Login />)
//       // return console.log('Onboarded');
//     } else {
//       return (
//         <AppIntroSlider
//           renderItem={this._renderItem}
//           data={slides}
//           onDone={this._onDone}
//           renderDoneButton={renderDoneButton}
//           renderNextButton={renderNextButton}
//           renderSkipButton={renderSkipButton}

//           // showSkipButton={true}
//           // onSkip={onSkip}
//           // activeDotStyle={{backgroundColor: 'red'}}
//         />
//       );
//     }
//   }
// }
