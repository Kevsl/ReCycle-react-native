/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Home } from './Views/Home'
import { Profile } from './Views/Profile'
import { CreateAd } from './Views/Create-ad'
import { Login } from './Views/Login'
import { Messenger } from './Views/Messenger'
import { Register } from './Views/Register'
import { Chat } from './Views/Chat'
import { MyAds } from './Views/MyAds'

const App = () => {
    const Stack = createNativeStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="login"
                    component={Login}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="home"
                    component={Home}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="my-ads"
                    component={MyAds}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}
                />

                <Stack.Screen
                    name="profile"
                    component={Profile}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="create-ad"
                    component={CreateAd}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="messenger"
                    component={Messenger}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="register"
                    component={Register}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="chat"
                    component={Chat}
                    options={{
                        animation: 'slide_from_right',
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default App
