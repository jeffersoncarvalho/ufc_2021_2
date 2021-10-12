import React from "react"
import { View, Text } from 'react-native'
import Personagem from "./Personagem"

const Casa = () =>
    <View>
        <Personagem nome='Tyrion' casa='Lannister' />
        <Personagem nome='Tywin' casa='Lannister' />
        <Personagem nome='Sansa' casa='Stark' />
        <Personagem nome='Rob' casa='Stark' />
    </View>
export default Casa