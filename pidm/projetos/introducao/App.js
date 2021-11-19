import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//import OlaMundo from './components/01OlaMundo'
//import Professor from './components/02Professor'
//import Professor from './components/03Professor';
//import MeuProps from './components/04MeuProps'
/*import MeuProps from './components/05MeuProps';
import ProfessorAragao from './components/06ProfessorAragao';
import Vingadores from './components/07Vingadores'


const imagem = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Arag%C3%A3o-240x320.png'}
const imagem2 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Jeandro-de-Mesquita-Bezerra1-240x320.png'}
const imagem3 = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-240x320.png'}
*/

/*import {Hulk as H,Loki as L} from './components/08Vingadores';

export default function App() {
  return (
    <View style={styles.container}>
       <H nome='Jefferson' />
       <L nome='Pedro' />
    </View>
  );
}*/

/*import Casa from './components/11got/Casa'
import Personagem from './components/11got/Personagem';
export default function App() {
  return (
    <View style={styles.container}>
      <Casa casa='Targeryan' canal='HBO'>
        <Personagem nome='Tyrion' />
        <Personagem nome='Tywin' />
      </Casa>
    </View>
  );
}*/

/*export default function App() {
  return (
    <MyFlex />
  );
}*/

/*export default function App() {
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

//import IMC from './components/12IMC'
//import MyState from './components/13State';
//import VotacaoCidades from './components/15VotacaoCidades';
//import EstudoEstilos from './components/16Estilos'
//import MyFlex from './components/18Flexbox'
//import CalculadoraApp from './components/20Calculadora/20CalculadoraApp';
//import EntradaComBotao from './components/21ExemploBotao/21EntradaComBotao';
//import Tocavel from './components/22TocavelNetwork/Tocavel';
//import MeuScroll from './components/22TocavelNetwork/Scrolling'
//import MeuFlatList from './components/22Tocavel/MeuFlatList'
//import MySectionList from './components/23SectionNetWorking/MySectionList';
import MyNetworking from './components/23SectionNetWorking/MyNetworking';

export default function App() {
  return(
    <MyNetworking />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

