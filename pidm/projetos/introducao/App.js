import React from 'react';
import { StyleSheet, View } from 'react-native';

import OlaMundo from './components/01OlaMundo'
//import Professor from './components/02Professor'
import Professor from './components/03Professor';

export default function App() {
  return (
    <View style={styles.container}>
      <Professor/>
      <OlaMundo />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
