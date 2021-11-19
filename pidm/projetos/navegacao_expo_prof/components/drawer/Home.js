import React, { Component } from 'react'
import { View, Text, Button} from 'react-native'

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
                    Página Home, com Drawer.
                </Text>
                <Button
                    onPress={() => this.props.navigation.navigate('Notifications')}
                    title="Ir para notificações"
                />
            </View>
        )
    }
}