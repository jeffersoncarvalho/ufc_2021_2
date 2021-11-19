import React from 'react'
import { Image, View, Text } from 'react-native'

export default (props) => {
    const img = { uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/11/Jo%C3%A3o-240x320.png' } //objeto JSON
    return(
        <View style={{flexDirection:'row'}}>
            <Image
                source={img}
                style={{width:50,height:50}}
            />
            <Text>
                {props.titulo}
            </Text>
        </View>

    )
}