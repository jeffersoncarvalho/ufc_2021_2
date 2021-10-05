import React from 'react'
import { View, Text } from 'react-native'

export default (props) =>
    <View>
        <Text style={{fontSize:22, fontWeight:'bold'}}>
            Estado: {props.estado}
        </Text>
    </View>