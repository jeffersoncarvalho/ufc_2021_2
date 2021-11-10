import React from 'react'
import {StyleSheet,Text,View} from 'react-native'

const estilos = StyleSheet.create(
    {
        vermelho: {
            color:'red'
        },
        grandeAzul: {
            color:'blue',
            fontWeight:'bold',
            fontSize:30
        }
    }
)
 
const estudoEstilos = ()=>
<View>
    <Text style={estilos.vermelho}>Somente Vermelho</Text>
    <Text style={estilos.grandeAzul}>Grande Azul</Text>
    <Text style={[estilos.grandeAzul,estilos.vermelho]}>azul-vermelho</Text>
    <Text style={[estilos.vermelho,estilos.grandeAzul]}>azul-vermelho</Text>
</View>

export default estudoEstilos