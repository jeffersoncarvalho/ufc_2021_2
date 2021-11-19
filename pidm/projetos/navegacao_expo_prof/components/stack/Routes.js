import NavegacaoApp from './NavegacaoApp';
import About from './About';
import Modal from './Modal'

//Versão 5.x (com MODAL - preciso de DUAS pilhas)
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const PilhaPrincipal = createStackNavigator()
const PilhaRaiz = createStackNavigator()

function PilhaPrincipalTelas() {
    return (
        <PilhaPrincipal.Navigator
            initialRouteName='Home'
        >
            <PilhaPrincipal.Screen name='Home' component={NavegacaoApp} />
            <PilhaPrincipal.Screen name='About' component={About} />
        </PilhaPrincipal.Navigator>
    )
}

function PilhaRaizTelas() {
    return (
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen
                    name='Principal'
                    component={PilhaPrincipalTelas}
                    options={{ headerShown: false }}
                />
                <PilhaRaiz.Screen name='MeuModal' component={Modal} options={{ headerShown: false }}/>
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}

export default PilhaRaizTelas

//Versão 5.x (Sem MODAL)
/*import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const Pilha = createStackNavigator() //navegação do tipo Pilha ou Stack

function Routes(){
    return(
        <NavigationContainer>
            <Pilha.Navigator
                initialRouteName='Home'
            >
                <Pilha.Screen
                    name='Home'
                    component={NavegacaoApp}
                    options={{title:'Tela Inicial'}}
                />
                <Pilha.Screen
                    name='About'
                    component={About}
                    options={About.estiloCabecalho}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default Routes*/

//Versão 4.x (ANTIGO)
/*import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const Routes = createAppContainer(
    createStackNavigator(
        {
            Home: NavegacaoApp,
            About: About,
        },
        { initialRouteName:'Home'}
    )
);
export default Routes;*/