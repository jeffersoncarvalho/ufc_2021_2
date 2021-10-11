import React, {Component} from "react";
import { View, Text } from 'react-native'

class IMC extends Component {

    calculo(altura,peso){
        return peso/(altura*altura)
    }

    render() {
        return (
            <View>
                <Text>Seu peso é {this.props.peso}</Text>
                <Text>Sua altura é {this.props.altura}</Text>
                <Text>Seu IMC é de {this.calculo(this.props.altura, this.props.peso)}</Text>
            </View>
        )
    }
}

export default IMC