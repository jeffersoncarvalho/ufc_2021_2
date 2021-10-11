import React from 'react'
import {View,Text} from 'react-native'

const Casa = (props) => 
    <View>
        <Text>
            Game of Thrones
        </Text>
        {
           React.Children.map(
               props.children,
               (personagem) => {
                   return React.cloneElement(personagem,{...props})
               }
           ) 
        }
    </View>
    
export default Casa