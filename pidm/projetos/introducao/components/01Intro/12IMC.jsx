import React from "react";
import { View, Text } from "react-native";

const IMC = (props) => {
    function calculo(peso,altura){
        return peso/(altura*altura)
    }

    return <View>
        <Text style={{fontSize:22}}>Peso: {props.peso}</Text>
        <Text style={{fontSize:22}}>Altura: {props.altura}</Text>
        <Text style={{fontSize:22}}>IMC: {calculo(props.peso,props.altura)}</Text>
    </View>
}

export default IMC