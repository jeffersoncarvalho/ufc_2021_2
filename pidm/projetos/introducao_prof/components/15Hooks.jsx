import React, {useState,useEffect} from "react";
import {View,Text,Button} from 'react-native'

/*const myHooks = (props) => {
    let cont = 0
    return (
        <View>
            <Text>Contador: {cont}</Text>
            <Button title='Me Aperte' onPress={()=>cont++}/>
        </View>
    )
}*/

/*const myHooks = (props) => {
    const [cont,setCont] = useState(10)
    return (
        <View>
            <Text>Contador: {cont}</Text>
            <Button title='Me Aperte' onPress={()=>setCont(cont+1)}/>
        </View>
    )
}*/

const myHooks = (props) => {
    const [cont,setCont] = useState(10)
    const [status,parImpar] = useState('par')

    useEffect(
        ()=>{
            if(cont%2==0)
                parImpar('par')
            else
                parImpar('ímpar')
        }
    )

    return (
        <View>
            <Text>Contador: {cont}</Text>
            <Text>Status: {status}</Text>
            <Button title='Me Aperte' onPress={()=>setCont(cont+1)}/>
        </View>
    )
}

export default myHooks