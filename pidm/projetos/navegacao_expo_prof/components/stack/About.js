import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import Logo from './Logo'

export default class About extends Component {

    static estiloCabecalho = {
        headerTitle: <Logo titulo='Sobre...(VComponente)' />,
        headerRight: () => <Button
            onPress={
                () => alert('Sou um botão!')
            }
            title='Me Aperte'
            color='#c0c0c0'
        />
    }

    /*static estiloCabecalho = { 
        headerTitle: <Text style={{fontWeight:"bold", color:"red", fontSize:20}}>
                        Sobre... (VJSX)
                     </Text>
    }*/

    /*static estiloCabecalho = {
        title: 'Sobre...(V2)',
        headerStyle: {
            backgroundColor: '#f4A03e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold',
        },
    }*/

    render() {
        return (
            <View style={
                {
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={
                    {
                        fontWeight: "bold",
                        fontSize: 18
                    }}>
                    Sobre - Nome: {this.props.route.params.nome}, Idade:  {this.props.route.params.idade}
                    {/*this.props.navigation.getParam('noe','Wladimir')*/}
                </Text>

                <Button title="Ir pro About... de novo?"
                    onPress={
                        () => this.props.navigation.navigate('About', { ...this.props.route.params })}
                />

                <Button title="Push"
                    onPress={() => this.props.navigation.push('About', { ...this.props.route.params })}
                />

                <Button title="Back"
                    onPress={() => this.props.navigation.goBack()}
                />

                <Button
                    onPress={() => this.props.navigation.navigate('MeuModal')}
                    title="Abrir Modal"
                />

            </View>
        )
    }
}