import React, { Component } from 'react'
import { StyleSheet,View,Text,Button, TextInput, Alert } from 'react-native'

class EntradaComBotao extends Component{

    constructor(props){
        super(props)
        this.state={texto:''}
    }

    acaoBotao = ()=>{
        alert(this.state.texto)
    }

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.cabecalho}>
                    Entrada Com Botão
                </Text>
                <TextInput
                    style={estilos.campo}
                    placeholder='Digite o Texto'
                    onChangeText={(texto)=>this.setState({texto})}
                />
                <View style={estilos.botao}>
                    <Button
                        title='Pegar o Texto'
                        onPress={this.acaoBotao}
                    />
                </View>
            </View>
        )
    }
}

const estilos = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'#e5e5e5'
        },
        cabecalho:{
            fontSize:24,
            fontWeight:'bold',
            margin:10
        },
        campo:{
            height:45,
            width:'95%',
            borderColor:'gray',
            borderWidth:2,
            paddingLeft:20,
            fontSize:20
        },
        botao:{
            width:'93%',
            margin:15
        }
    }
)

export default EntradaComBotao