import React, {useEffect} from 'react';
import {hide} from 'react-native-bootsplash';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {RootNavigator} from './navigation';
import {persistor, store} from './store';
import SplashScreen from 'react-native-splash-screen'; //import SplashScreen
function App() {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load
  }, []);
  console.log("new check git");
console.log("merging");
  return (
    <Provider store={store}>
      <PersistGate onBeforeLift={hide} persistor={persistor}>
        <RootNavigator />
      </PersistGate>
    </Provider>
  );
}

export default App;
