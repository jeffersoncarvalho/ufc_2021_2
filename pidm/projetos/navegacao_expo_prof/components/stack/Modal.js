import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Modal extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 30 }}>Isto é um Modal!</Text>
                <Button
                    onPress={() => this.props.navigation.goBack()}
                    title="Sair do Modal"
                />
            </View>
        );
    }
}