






import React, {useEffect} from 'react';
import {hide} from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigator} from './navigation';
import {persistor, store} from './store';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen
import { readJsonConfigFile, resolveModuleNameFromCache } from 'typescript';


import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Details from './Practice/Details';
import Home from './Practice/Home';
const Stack = createNativeStackNavigator();
function App() {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load..
  }, []);
  return (
//   <NavigationContainer>
//   <Stack.Navigator>
//     <Stack.Screen name="Home" component={Home} />
//     <Stack.Screen name="Details" component={Details} />
//   </Stack.Navigator>
// </NavigationContainer>
    <Provider store={store}>
      <PersistGate onBeforeLift={hide} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;


