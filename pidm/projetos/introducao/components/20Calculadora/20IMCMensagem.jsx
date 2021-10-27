import React from 'react'
import {Text} from 'react-native'

const mensagem = (props)=> {

    //console.log(props.IMC)
    if(props.IMC<=19) return <Text style={{fontSize:25}}>Abaixo do Peso</Text>
    if(props.IMC>=25) return <Text style={{fontSize:25}}>Acima do Peso</Text>
    return <Text style={{fontSize:25}}>Peso na Média</Text>
}

export default mensagem