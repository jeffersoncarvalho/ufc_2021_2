import React from "react"
import { View, Text, ProgressViewIOSComponent } from 'react-native'
import Personagem from "./Personagem"

const Casa = (props) =>
    <View>
        <Text>Game of Thrones</Text>
        {props.children}
    </View>
export default Casa