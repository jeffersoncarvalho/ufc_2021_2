import React, {useState, useEffect} from 'react'
import { View, Text, Button } from 'react-native'

const VotacaoCidades = () => {

    const [quixada,setQuixada] = useState(0)
    const [fortaleza,setFortaleza] = useState(0)
    const [caucaia,setCaucaia] = useState(0)

    const [statusQuixada,setStatusQuixada] = useState('PAR')
    const [statusFortaleza,setStatusFortaleza] = useState('PAR')
    
    useEffect(
        ()=>{
            if(quixada%2===0) setStatusQuixada('PAR')
            else setStatusQuixada('ÍMPAR')

            if(fortaleza%2===0) setStatusFortaleza('PAR')
            else setStatusFortaleza('ÍMPAR')
        },
        [quixada,fortaleza]
    )
    
    function votarQuixada() {
        setQuixada(quixada+1)
    }

    const votarFortaleza = ()=>{
        setFortaleza(fortaleza+1)
    }

    return (
        <View>
            <Text>Votação de Cidades com Função</Text>
            <Text style={{ fontSize: 30 }}>Quixadá: {quixada} - {statusQuixada}</Text>
            <Text style={{ fontSize: 30 }}>Fortaleza: {fortaleza} - {statusFortaleza}</Text>
            <Text style={{ fontSize: 30 }}>Caucaia: {caucaia}</Text>
            <Button
                title='Quixadá'
                onPress={()=>votarQuixada()}
            />
            <Button
                title='Fortaleza'
                onPress={votarFortaleza}
            />
            <Button
                title='Caucaia'
                onPress={()=>setCaucaia(caucaia+1)}
            />
        </View>
    )
}

export default VotacaoCidades