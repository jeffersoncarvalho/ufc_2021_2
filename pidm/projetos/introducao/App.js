import React from 'react';
import { StyleSheet, View } from 'react-native';

import OlaMundo from './components/OlaMundo'
import Professor from './components/Professor'

export default function App() {
  return (
    <View style={styles.container}>
      <Professor/>
      <OlaMundo />
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
