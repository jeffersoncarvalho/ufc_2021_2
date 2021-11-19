import React, { Component } from 'react'
import { FlatList, ActivityIndicator, Text, View, Image } from 'react-native'

export default class MyNetworking extends Component {

    constructor(props) {
        super(props)
        this.state = { isLoading: true, data: null }
    }

    componentDidMount() {
        fetch('https://raw.githubusercontent.com/san650/ten/master/apps/music/api/albums.json')
            .then(
                (response) =>  
                    response.json()
            )
            .then(
                (responseJson) => 
                    this.setState({ isLoading: false, data: responseJson.albums })
            )
            .catch(
                (error) => {
                    console.log(error)
                }
            )
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View>
                    <Text>
                        Loading...
                    </Text>
                    <ActivityIndicator />
                </View>
            )
        }

        return (
            <View>
                <Text>
                    <FlatList

                        data={this.state.data}

                        renderItem={
                            ({ item }) => {
                                //console.log(item)
                                return (
                                    <View>
                                        <Text style={{ padding: 15, fontSize: 18 }}>
                                            {item.artist} - {item.name}
                                        </Text>
                                        <Image source={{ uri: 'https://raw.githubusercontent.com/san650/ten/master/apps/music'+item.image, width: 100, height: 100 }} />
                                    </View>

                                )
                            }
                        }

                        keyExtractor={
                            (item, index) => {
                                return index + item
                            }
                        }
                    />
                </Text>
            </View>
        )
    }
}