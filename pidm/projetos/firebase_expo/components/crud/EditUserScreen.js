import React, { useState, useEffect, useReducer } from 'react'
import { View, Text, ScrollView, Button, ActivityIndicator, StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import firebase from '../../firebase/firebase_config'


const EditUserScreen = (props) => {
    const initialState = { id: '', name: '', email: '', phone: '' }
    const [user, setUser] = useState(initialState)

    useEffect(
        () => {
            getUserById(props.route.params.userId)
        }
        ,
        []
    )

    const handleChangeText = (value,prop)=> {
        /*if(name==='name') setState({'name':value})
        else if(name==='email') setState({'email':value})*/
        setUser({...user, [prop]:value})
    }

    const getUserById = async (id) => {
        const dbRef = firebase.db.collection('users').doc(id)
        const doc = await dbRef.get()
        const user = doc.data()
        setUser({ ...user, id: doc.id })
    }

    const deleteUser = async () => {
        const dbRef = firebase.db.collection('users').doc(props.route.params.userId)
        await dbRef.delete()
        props.navigation.navigate('ListUserScreen')
    }

    const updateUser = async () => {
        //console.log(user)
        const userRef = firebase.db.collection('users').doc(user.id)
        await userRef.set({
            name: user.name,
            email: user.email,
            phone: user.phone
        })
        setUser(initialState)
        props.navigation.navigate('ListUserScreen')
    } 

    return (
        <ScrollView style={styles.container}>
            <View>
                <TextInput
                    placeholder='Name'
                    style={styles.inputGroup}
                    value={user.name}
                    onChangeText={(value)=>handleChangeText(value,'name')}
                />
            </View>
            <View>
                <TextInput
                    placeholder='Email'
                    style={styles.inputGroup}
                    value={user.email}
                    onChangeText={(value)=>handleChangeText(value,'email')}
                />
            </View>
            <View>
                <TextInput
                    placeholder='Phone'
                    style={styles.inputGroup}
                    value={user.phone}
                    onChangeText={(value)=>handleChangeText(value,'phone')}
                />
            </View>
            <View >
                <Button
                    title='Delete'
                    color='#E37399'
                    onPress={()=>deleteUser()}
                />
            </View>
            <View style={styles.btn}>
                <Button
                    title='Update'
                    onPress={()=>updateUser()}
                />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    loader: {

    },
    inputGroup: {
        flex: 1,
        padding: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    },
    btn: {
        marginTop: 8
    }
})

export default EditUserScreen