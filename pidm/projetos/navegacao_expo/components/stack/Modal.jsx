import  React,{Component} from 'react'
import {StyleSheet,View,Text,Button} from 'react-native'

export default class Modal extends Component{
    render(){
        return(
            <View style={estilos.container}>
                <Text style={estilos.texto}>
                    Isto é um MODAL!
                </Text>
                <Button
                    title='Sair do MODAL'
                    onPress={()=>this.props.navigation.goBack()}
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
