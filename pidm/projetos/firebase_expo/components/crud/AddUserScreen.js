import React, {useState} from 'react'
import {View,Text,Button,TextInput,ScrollView,StyleSheet} from 'react-native'

import firebase from '../../firebase/firebase_config'

const AddUserScreen = (props) => {

    const initialState = {name:'',email:'',phone:''}
    const [state, setState] = useState(initialState)

    /*const addNewUser = ()=> {
        console.log(state)
    }*/

    const addNewUser = async ()=> {
        try{
            await firebase.db
            .collection('users')
            .add({
                name: state.name,
                email: state.email,
                phone: state.phone
            })
            //console.log('OK!')
            //navegaria para listagem de usuários
            props.navigation.navigate('ListUserScreen')
        }catch(error){
            console.log(error)
        }
    }

    const handleChangeText = (value,name)=> {
        /*if(name==='name') setState({'name':value})
        else if(name==='email') setState({'email':value})*/
        setState({...state, [name]:value})
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Name'
                    value={state.name}
                    onChangeText={(value) => handleChangeText(value,'name')} 
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Email'
                    value={state.email} 
                    onChangeText={(value) => handleChangeText(value,'email')}
                />
            </View>
            <View style={styles.textInput}>
                <TextInput
                    placeholder='Phone'
                    value={state.phone} 
                    onChangeText={(value) => handleChangeText(value,'phone')}
                />
            </View>
            <View>
                <Button title='Add User' onPress={() => addNewUser()} />
            </View>
        </ScrollView>
    )


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 35
    },
    textInput: {
        flex: 1,
        padding: 0,
        top: 0,
        marginBottom: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc'
    }
})

export default AddUserScreen