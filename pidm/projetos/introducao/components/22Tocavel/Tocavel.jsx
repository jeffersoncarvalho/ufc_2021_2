import React,{Component} from 'react'
import { Platform, Alert, StyleSheet, View, Text, 
        TouchableHighlight, 
        TouchableOpacity, 
        TouchableNativeFeedback,
        TouchableWithoutFeedback} from 'react-native'

export default class Tocavel extends Component {
   
    acaoBotao = ()=>{
        alert('Apertei!')
    }

    longPress = () =>{
        alert('Pressionada longa...')
    }

    render(){
        return (
            <View style={estilos.container}> 
                <TouchableHighlight onPress={this.acaoBotao} underlayColor='white'>
                    <View style={estilos.botao}>
                        <Text style={estilos.textoBotao}>
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity onPress={this.acaoBotao}>
                    <View style={estilos.botao}>
                        <Text style={estilos.textoBotao}>
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>

                <TouchableNativeFeedback 
                    onPress={this.acaoBotao}
                    background={Platform.OS==='android'? TouchableNativeFeedback.SelectableBackground : ''}
                >
                    <View style={estilos.botao}>
                        <Text style={estilos.textoBotao}>
                        TouchableNativeFeedback
                        </Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback onPress={this.acaoBotao}>
                    <View style={estilos.botao}>
                        <Text style={estilos.textoBotao}>
                            TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableHighlight onPress={this.acaoBotao} 
                                    onLongPress={this.longPress} 
                                    underlayColor='white'>
                    <View style={estilos.botao}>
                        <Text style={estilos.textoBotao}>
                            TH Long Press
                        </Text>
                    </View>
                </TouchableHighlight>

            </View>
        )
    }
}

const estilos = StyleSheet.create(
    {
        container: {
            paddingTop: 100,
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        },
        botao: {
            width: 200,
            alignItems: 'center',
            backgroundColor: '#2196F3'
        },
        textoBotao: {
            padding: 20,
            color: '#FFF',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
)