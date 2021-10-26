import React from "react"
import {View,Text} from 'react-native'

const myFlex = () =>
<View style={{flex:1, 
              flexDirection:'row',
              justifyContent:'flex-start',
              alignItems:'flex-start'
              }}>
    <View style={{width:50, height:50, backgroundColor:'green'}}></View>
    <View style={{width:50, height:50, backgroundColor:'blue', alignSelf:'flex-end'}}></View>
</View>

export default myFlex