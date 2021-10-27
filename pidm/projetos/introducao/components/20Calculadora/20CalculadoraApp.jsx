import React, {Component} from 'react'
import {View,Text,TextInput, Button} from 'react-native'
import Calculadora from './20Calculadora'

export default class CalculadoraApp extends Component {

    constructor(props){
        super(props)
        this.state = {altura:null,peso:null,apertou:false}
    }

    acaoBotao = ()=>{
        if(this.state.altura != null && this.state.peso != null){
            this.setState({apertou:true})
        }
    }

    renderizarCalculo(){
        if(this.state.apertou)
        {
            //this.setState({apertou:false})
            return(
                <Calculadora altura={this.state.altura} peso={this.state.peso}/>
            )
        }   
        return null
    }

    render(){
        return(
            <View>
                <TextInput
                    style={{height:60, fontSize:32}}
                    placeholder='Digite a altura' 
                    onChangeText={(altura)=>this.setState({altura})}
                />
                <TextInput
                    style={{height:60, fontSize:32}}
                    placeholder='Digite o peso'
                    onChangeText={(peso)=>this.setState({peso})}
                />
                <Button
                    title='Calcular IMC'
                    onPress={this.acaoBotao} 
                />
                {this.renderizarCalculo()}
            </View>
        )
    }
}