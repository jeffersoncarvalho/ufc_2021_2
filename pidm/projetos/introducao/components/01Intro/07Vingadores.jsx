import React,{Component} from 'react'
import {View,Text} from 'react-native'

class Heroi extends Component{
    render(){
        return(
            <View>
                <Text>Olá {this.props.nome}</Text>
            </View>
        )
    }
}

export default class Vingadores extends Component{
    render(){
        return(
            <View>
                <Heroi nome='Hulk' />
                <Heroi nome='Capitão América' />
                <Heroi nome='Viúva Negra' />
            </View>
        )
    }
}