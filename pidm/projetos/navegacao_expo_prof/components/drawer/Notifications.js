import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Notifications extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text>
                    Página Notifications, com Drawer.
                </Text>
                <Button onPress={() => this.props.navigation.goBack()} title="Back" />
            </View>
        )
    }
}