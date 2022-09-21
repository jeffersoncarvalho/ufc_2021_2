import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, TextInput, View } from 'react-native'

export default class MySectionList extends Component {
    render(){
        return (
            <View style={estilos.container}>
                <SectionList
                    

                    sections={
                        [
                            { title: 'A', data: ['Almeida', 'Abner', 'Jacinta', 'Ashley'] },
                            { title: 'B', data: ['Carlos', 'Jucelia', 'Samanda', 'Janna'] },
                            { title: 'C', data: ['Creusa', 'Abner', 'Luiza', 'Jaice'] }

                        ]
                    }

                    renderSectionHeader={
                        ({ section }) => {
                           return <Text style={estilos.sectionHeader}> 
                                {section.title}
                            </Text>
                        }
                    }
                    renderItem={
                        ({ item }) => 
                            <Text>
                                {item}
                            </Text>
                        
                    }
                    
                    keyExtractor={
                        (item, index) => index + item
                    }
                />
            </View>
        )
    }
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    sectionHeader: {
        paddingTop:2,
        paddingBottom:2,
        paddingLeft:10,
        paddingRight:10,

        fontSize:14,
        fontWeight:'bold',
        backgroundColor:'rgba(247,247,247,1.0)'
    },
    sectionItem: {
        padding:10,
        fontSize:18,
        height:44
    }
})