import React from "react"
import {View,Text} from 'react-native'

const Personagem = (props) =>
<View>
    <Text>Personagem {props.nome} da Casa {props.casa} do Canal {props.canal}</Text>
</View>
export default Personagem