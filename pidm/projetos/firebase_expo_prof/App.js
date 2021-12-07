import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
//import Routes from './components/stack/Routes'
//import Routes from './components/tabs/Routes'
//import Routes from './components/drawer/Routes' 
//import Signup from './components/auth/unauthorized/Signup'
//import Routes from './components/auth/Routes' 
import Routes from './components/crud/Routes'

const App = () => {
  return (

    <SafeAreaProvider>
      <Routes />
    </SafeAreaProvider>

  )
}

export default App;
