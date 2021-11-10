import React from 'react'
import {FlatList, Text, View} from 'react-native'

const meuFlatList = ()=>
<View style={{flex:1,paddingTop:22}}>
    <FlatList
        data={
            [
                {nome:'Jefferson'},
                {nome:'Vilnei'},
                {nome:'Neto'},
                {nome:'Lana'},
                {nome:'Lívia'},
            ]
        }
        
        renderItem={
            ({item})=>{
                //console.log(item)
                return (
                    <Text style={{padding:15, fontSize: 18}}>
                        {item.nome}
                    </Text>
                )
            }
        }

        keyExtractor={
            (item,index)=>{
                return index + item
            }
        }
    />
</View>

export default meuFlatList