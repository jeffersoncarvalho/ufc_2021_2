import React, { Component } from 'react'
import { View, Text} from 'react-native'

export default class Home extends Component {
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
                    Página Home, com Auth.
                </Text>
            </View>
        )
    }
}