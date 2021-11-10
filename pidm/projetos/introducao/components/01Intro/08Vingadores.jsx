import React, {Component} from "react"
import {View,Text} from 'react-native'

const Hulk = (props) => {
    return (
        <View>
            <Text style={{fontSize:22}}>Olá {props.nome}, eu sou o Hulk</Text>
        </View>
    )
}

class Loki extends Component {
    render(){
        return (
            <View>
                <Text style={{fontSize:22}}>Olá {this.props.nome}, eu sou o Loki</Text>
            </View>
        )
    }
}

export {Hulk,Loki}
