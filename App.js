import React, {useEffect} from 'react';
import MainNavigation from './src/Navigation/MainNavigation';
import messaging from './src/config/firebase/firebase'
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import makeStore from './src/flow/store';


const App= () => {
  const {store} = makeStore()
  
  
  

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
