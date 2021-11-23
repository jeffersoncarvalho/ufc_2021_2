import Home from './Home'
import About from './About'
import Modal from './Modal'

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//com modal
const PilhaDasTelas = createStackNavigator()
const PilhaRaiz = createStackNavigator()

//as telas usuais do meu sistema (Home e About)
function FuncaoPilhaDasTelas(){
    return(
        <PilhaDasTelas.Navigator
            initialRouteName='Home'
        >
            <PilhaDasTelas.Screen 
                name='Home'
                component={Home}
                options={{title:'Tela Inicial'}}/>
            <PilhaDasTelas.Screen 
                name='About'
                component={About}
                options={{title:'Sobre'}}           
            />
        </PilhaDasTelas.Navigator>
    )
}
//a funcão de pilha anterior + a tela modal que ficará por cima da pilha anterior
function FuncaoPilhaRaiz(){
    return (
        <NavigationContainer>
            <PilhaRaiz.Navigator>
                <PilhaRaiz.Screen
                    name='Principal'
                    component={FuncaoPilhaDasTelas}
                    options={{headerShown:false}}
                />
                <PilhaRaiz.Screen
                    name='Modal'
                    component={Modal} 
                    options={{headerShown:false}}

                />
            </PilhaRaiz.Navigator>
        </NavigationContainer>
    )
}

export default FuncaoPilhaRaiz


//sem modal
/*const Pilha = createStackNavigator()

function Routes() {
    return (
        <NavigationContainer>
            <Pilha.Navigator
                initialRouteName='Home'
            >
                <Pilha.Screen
                    name='Home'
                    component={Home}
                    options={{title:'Tela Inicial'}}
                />
                <Pilha.Screen
                    name='About'
                    component={About}
                    options={{title:'Sobre'}}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}

export default Routes*/