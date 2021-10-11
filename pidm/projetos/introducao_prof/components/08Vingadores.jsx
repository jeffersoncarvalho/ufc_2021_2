import React from 'react';
import {View,Text} from 'react-native'

const CapitaoAmerica = (props) =>
    <View>
        <Text>Oi {props.nome}, eu sou o Capitão América.</Text>
    </View>

const ViuvaNegra = (props) =>
    <View>
        <Text>Oi {props.nome}, eu sou a Viúva Negra.</Text>
    </View>

export {CapitaoAmerica,ViuvaNegra}