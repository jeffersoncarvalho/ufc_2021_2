import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

//import HomeScreen from './HomeScreen'
import ListUserScreen from './ListUserScreen'
import EditUserScreen from './EditUserScreen'
import AddUserScreen from './AddUserScreen'


const MainStack = createStackNavigator()


function MainStackScreens() {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{
                    headerStyle: {
                        backgroundColor: "#621FF7",
                    },
                    headerTintColor: "#fff",
                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                }}
            >
                <MainStack.Screen
                    name='AddUserScreen'
                    component={AddUserScreen}
                    options={{ title: 'Add a New User' }}
                />
                <MainStack.Screen
                    name='ListUserScreen'
                    component={ListUserScreen}
                    options={{ title : 'List User' }}
                />
                <MainStack.Screen
                    name='EditUserScreen'
                    component={EditUserScreen}
                    options={{ title: 'User Detail' }}
                />
            </MainStack.Navigator>
        </NavigationContainer>
    )
}


export default MainStackScreens