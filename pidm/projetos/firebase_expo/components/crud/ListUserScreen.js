import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler'

import firebase from '../../firebase/firebase_config'

const ListUserScreen = (props) => {

    const [users, setUsers] = useState([])

    useEffect(
        ()=>{
            firebase.db.collection('users').onSnapshot(
                (queryOnSnapshot)=>{
                    const users = []
                    queryOnSnapshot.docs.forEach(
                        (doc)=>{
                            const {name,email,phone} = doc.data()
                            users.push({id:doc.id,name,email,phone})
                        }//doc
                    )//forEach
                    setUsers(users)
                }//queryOnSnapshot
            )//onSnapshot
        } // interna do useEffect
        ,
        []
    )

    return (
        <ScrollView>
            <Button
                onPress={
                    ()=>props.navigation.navigate('AddUserScreen')
                }
                title='Create User'
            />
            {
                users.map(
                    (user) => {
                        return (
                            <ListItem
                                key={user.id}
                                bottomDivider
                                onPress={
                                    ()=>{
                                        props.navigation.navigate('EditUserScreen',{userId:user.id})
                                    }
                                }
                            >
                                <ListItem.Chevron/>
                                <Avatar
                                    source={{
                                        uri: 'https://www.quixada.ufc.br/wp-content/uploads/2015/05/Aragão-240x320.png'
                                    }}
                                    rounded
                                />
                                <ListItem.Content>
                                    <ListItem.Title>{user.name}</ListItem.Title>
                                    <ListItem.Subtitle>{user.email}-{user.phone}</ListItem.Subtitle>
                                </ListItem.Content>
                            </ListItem>
                        )
                    }
                )
            }
        </ScrollView>
    )
}

export default ListUserScreen