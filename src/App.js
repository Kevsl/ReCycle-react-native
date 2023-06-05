/* eslint-disable semi */
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
import { Provider } from 'react-redux'
import Store from './store'
import Listing from './Views/Listing'
import Search from './Views/Search'
import AdsByCategory from './Views/AdsByCategory'
import CreateListing from './Views/CreateListing'

const App = () => {
    const Stack = createNativeStackNavigator()

    return (
        <Provider store={Store}>
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
                        name="create-listing"
                        component={CreateListing}
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
                    <Stack.Screen
                        name="listing"
                        component={Listing}
                        options={{
                            animation: 'slide_from_right',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="search"
                        component={Search}
                        options={{
                            animation: 'slide_from_right',
                            headerShown: false,
                        }}
                    />
                    <Stack.Screen
                        name="ads-by-category"
                        component={AdsByCategory}
                        options={{
                            animation: 'slide_from_right',
                            headerShown: false,
                        }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default App
