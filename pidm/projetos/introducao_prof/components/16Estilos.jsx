import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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

const estudoEstilos = () =>
<View>
    <Text style={estilos.vermelho}>Somente Vermelho</Text>
    <Text style={estilos.grandeAzul}>Grande Azul</Text>
    <Text style={[estilos.grandeAzul,estilos.vermelho]}>azul-vermelho</Text>
    <Text style={[estilos.vermelho,estilos.grandeAzul]}>vermelho-azul</Text>
</View>

const dimensoesEstilos = () => 
<View>
    <View style={{width:50, height:50, backgroundColor:'powderblue'}} />
    <View style={{width:100, height:100, backgroundColor:'skyblue'}} />
    <View style={{width:150, height:150, backgroundColor:'steelblue'}} />
</View>

//export default estudoEstilos
export default dimensoesEstilos