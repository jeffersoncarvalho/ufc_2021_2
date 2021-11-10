import React from "react";
import { View } from "react-native";

const myFlex = () => 
<View style={{
    flex:1,
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center'
}}>
    <View style={{width:50,height:50,backgroundColor:'green'}}></View>
    <View style={{width:50,height:50,backgroundColor:'red'}}></View>
    <View style={{width:50,height:50,backgroundColor:'black',alignSelf:'flex-end'}}></View>
</View>

export default myFlex