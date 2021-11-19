import React, { Component } from 'react'
import { View, Text, TextInput, Button, StyleSheet } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'


export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {login:'',senha:''}
    }

    acaoBotao = async ()=>{
        try{
            await AsyncStorage.setItem('TOKEN','umvalorbemdoido')
            alert('Token salvo com sucesso')
        }catch(e){
            alert('Falha ao salvar o token')
        }
        //redirect pra routes
        //this.props.navigation.navigate('Home')
        //this.props.navigation.dispatch({type: 'Navigation/BACK'});
    }

    signup = ()=>{
        this.props.navigation.navigate('Signup')
    }

    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.headerText}>Efetue seu Login</Text>
                <Text style={styles.labelText}>Login</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={(login)=>this.setState({login})}
                    placeholder='login'/>
                <Text style={styles.labelText}>Senha</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={(password)=>this.setState({password})}
                    placeholder='password'/>
                <View style={{flex:1,margin:25}}>
                    <Button color="#c0c0c0" title='Login' onPress={this.acaoBotao}/>
                </View>
                <View style={{flex:1,margin:25}}>
                    <Button color="#c0c0c0" title='Signup' onPress={this.signup}/>
                </View>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
    },
    headerText: {
        fontSize: 20,
        margin: 10,
        fontWeight: "bold"
    },
    labelText: {
        fontSize: 14,
        margin: 10,
        fontWeight: "bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20
    },
})