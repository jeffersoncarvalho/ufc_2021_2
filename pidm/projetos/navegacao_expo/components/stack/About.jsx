import React, {Component} from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'

export default class About extends Component{

    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.texto}>Sobre</Text>
                <Text style={estilos.texto}>Nome: {this.props.route.params.nome}</Text>
                <Text style={estilos.texto}>Idade: {this.props.route.params.idade} </Text>
                <Button
                    title='Voltar'
                    onPress={()=>this.props.navigation.goBack()}
                />
                <Button
                    title='Modal'
                    onPress={()=>this.props.navigation.navigate('Modal')}
                />
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center'
    },
    texto:{
        fontSize:24,
        fontWeight:'bold',
        fontFamily:'Arial'
    }
})
