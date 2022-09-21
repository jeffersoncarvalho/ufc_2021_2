import React from 'react'
import { FlatList, Text, View } from 'react-native'

const meuFlatList = () => {
    console.log('wee');
    return (
    < View style = {{ flex:1, paddingTop:22}}>
        <FlatList
            data={
                [
                    { nome: 'Jefferson', key:1 },
                    { nome: 'Vilnei', key:2},
                    { nome: 'Neto', key:3 },
                    { nome: 'Lana', key:4},
                    { nome: 'Lívia', key:5 },
                ]
            }

            renderItem={
                ({ item }) => {
                    //console.log(item)
                    return (
                        <Text style={{ padding: 15, fontSize: 18 }}>
                            {item.nome}
                        </Text>
                    )
                }
            }

        />
</View >)
}

export default meuFlatList