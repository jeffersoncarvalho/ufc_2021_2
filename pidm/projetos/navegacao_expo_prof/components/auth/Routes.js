import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import AsyncStorage from '@react-native-community/async-storage'

import Login from './unauthorized/Login'
import Signup from './unauthorized/Signup'
import HomeScreen from './authorized/HomeScreen'

const UnathorizedStack = createStackNavigator()
const AuthorizedStack = createStackNavigator()
const RootStack = createStackNavigator()

function UnathorizedStackScreens() {
    return (
        <UnathorizedStack.Navigator>
            <UnathorizedStack.Screen name='Login' component={Login}/>
            <UnathorizedStack.Screen name='Signup' component={Signup} />
        </UnathorizedStack.Navigator>
    )
}

function AuthorizedStackScreens() {
    return (
        <AuthorizedStack.Navigator>
            <AuthorizedStack.Screen name='Home' component={HomeScreen} />
        </AuthorizedStack.Navigator>
    )
}

class Routes extends Component {
    constructor() {
        super()
        this.state = { hasToken: false }
    }

    componentDidMount(){
       //this.readAsyncStorage()
       this.clearAsynStorage() //só pra teste
    }
    //read
    readAsyncStorage = async () => {
        try {
            const token = await AsyncStorage.getItem('TOKEN')
            if(token!==null) {
                this.setState({hasToken:true})
            }else
                this.setState({hasToken:false})
            alert(token)
        } catch (e) {
            alert('Falha ao ler o token')
        }
        
    }

    clearAsynStorage = async ()=> {
        try {
            await AsyncStorage.clear()
            alert('Storage limpo.')
        } catch (e) {
            alert('Falhar ao limpar o Storage.')
        }
    }

    render() {
        return (
            <NavigationContainer>
                <RootStack.Navigator>
                    {
                        this.state.hasToken ?
                            <RootStack.Screen name='Authorized' component={AuthorizedStackScreens} />
                            :
                            <RootStack.Screen name='Unauthorized' component={UnathorizedStackScreens} />
                    }
                </RootStack.Navigator>
            </NavigationContainer>
        )
    }
}

export default Routes