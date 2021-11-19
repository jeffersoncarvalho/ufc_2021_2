import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class Settings extends Component {
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
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}
                >
                    Página Settings, com Tabs.
                </Text>
            </View>
        )
    }
}