import React from 'react';
import { StyleSheet, View } from 'react-native';

//import OlaMundo from './components/01OlaMundo'
//import Professor from './components/02Professor'
//import Professor from './components/03Professor';
//import MeuProps from './components/04MeuProps'
import MeuProps from './components/05MeuProps';
import ProfessorAragao from './components/06ProfessorAragao';
import Vingadores from './components/07Vingadores'

const imagem = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-240x320.png'}
const imagem2 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jeandro-de-Mesquita-Bezerra1-240x320.png'}
const imagem3 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-240x320.png'}

export default function App() {
  return (
    <View style={styles.container}>
       <Vingadores />
    </View>
  );
}

/*export default function App() {
  return (
    <View style={styles.container}>
      <MeuProps 
        nome='Jefferson de Carvalho'
        idade={calculo()}
        curso='Sistemas de Informação'
      />
    </View>
  );
}

function calculo(){
  return '15'
}
*/


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

