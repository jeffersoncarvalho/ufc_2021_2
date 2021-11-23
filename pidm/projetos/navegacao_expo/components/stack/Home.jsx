import React, {Component} from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'

export default class Home extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.texto}>Página Home</Text>
                <Button 
                    title='Ir para o About!'
                    onPress={
                        ()=>
                        this.props.navigation.navigate('About',{nome:'Jefferson',idade:39})
                    }
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
