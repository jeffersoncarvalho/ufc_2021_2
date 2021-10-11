import React from 'react'
import {View,Text} from 'react-native'

import Personagem from './Personagem'

const Casa = () => 
    <View>
        <Personagem nome = 'Arya' casa = 'Stark'/>
        <Personagem nome = 'Robert' casa = 'Baratheon'/>
    </View>
    
export default Casa