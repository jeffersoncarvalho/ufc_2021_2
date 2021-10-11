import React from 'react';
import { StyleSheet, View } from 'react-native';

//import OlaMundo from './components/01OlaMundo'
//import Professor from './components/02Professor'
//import Professor from './components/03Professor';
//import MeuProps from './components/04MeuProps'
//import MeuProps from './components/05MeuProps';
//import ProfessorAragao from './components/06ProfessorAragao';
//import Vingadores from './components/07Vingadores'
//import {CapitaoAmerica as CA,ViuvaNegra} from './components/08Vingadores'
//import Casa from './components/09got/Casa'
//import Casa from './components/10got/Casa'
//import Personagem from './components/10got/Personagem';
//import Casa from './components/11got/Casa'
//import Personagem from './components/11got/Personagem';
//import IMC from './components/12IMC'
//import IMC from './components/13IMC'
//import MyState from './components/14State'
import MyHook from './components/15Hooks'

export default function App() {
  return (
    <View style={styles.container}>
      <MyHook/>
    </View>
  );
}

/*export default function App() {
  return (
    <View style={styles.container}>
      <MyState/>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <IMC altura={1.84} peso={91} />
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Casa casa='Stark'>
        <Personagem nome='Sansa'/>
        <Personagem nome='Arya'/>
      </Casa>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Casa>
        <Personagem nome='Sansa' casa='Stark' />
        <Personagem nome='Stannis' casa='Baratheon' />
      </Casa>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Casa/>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <CA nome='Jefferson' />
      <ViuvaNegra nome='Thomas'/>
    </View>
  );
}*/

/*export default function App() {
  return (
    <View style={styles.container}>
      <Vingadores />
    </View>
  );
}
*/

/*const imagem = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-240x320.png'}
const imagem2 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jeandro-de-Mesquita-Bezerra1-240x320.png'}
const imagem3 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-240x320.png'}
 
export default function App() {
  return (
    <View style={styles.container}>
       <Vingadores />
    </View>
  );
}*/

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

