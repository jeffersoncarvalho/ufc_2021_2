import React from 'react'
import {View,Text} from 'react-native'

const Casa = (props) => 
    <View>
        <Text>
            Game of Thrones
        </Text>
        {props.children}
    </View>
    
export default Casa