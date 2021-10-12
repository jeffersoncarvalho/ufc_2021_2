import React from "react"
import {View,Text} from 'react-native'

const Personagem = (props) =>
<View>
    <Text>Personagem {props.nome} da Casa {props.casa}</Text>
</View>
export default Personagem