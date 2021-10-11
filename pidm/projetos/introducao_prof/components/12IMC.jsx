import React from "react";
import {View,Text} from 'react-native'

const imc = (props) => {
    function calculo(altura,peso){
        return peso/(altura*altura)
    }

    return (
        <View>
            <Text>Seu peso é {props.peso}</Text>
            <Text>Sua altura é {props.altura}</Text>
            <Text>Seu IMC é de {calculo(props.altura,props.peso)}</Text>
        </View>
    )
}

export default imc