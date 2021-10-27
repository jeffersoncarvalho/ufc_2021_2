import React from 'react'
import { View, Text } from 'react-native'
import Mensagem from './20IMCMensagem'

const calcularIMC = (props) => {

    const imc = props.peso / (props.altura * props.altura)
    if (props.altura != null && props.peso != null)
        return (
            <View>
                <Text style={{ fontSize: 32 }}>
                    IMC: {imc}
                </Text>
                <Mensagem IMC={imc}/>
            </View>
        )
    return null
}


export default calcularIMC