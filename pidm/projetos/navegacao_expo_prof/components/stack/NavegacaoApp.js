import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class About extends Component {
    render() {
        return (

            <View style={
                { flex: 1, 
                  justifyContent: 'center', 
                  alignItems: 'center' }}>
                <Text>
                    Página Home ;D
                </Text>
                <Button
                    title="Ir para About"
                    onPress={
                        () => this.props.navigation.navigate('About',{nome:'Jefferson de Carvalho', idade:'38'})
                    }
                />
            </View>

        )

    }
}