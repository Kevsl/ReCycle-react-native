/* eslint-disable semi */
import { View, TouchableOpacity, Image } from 'react-native'
import { NavBarStyle } from '../Styles/Components/NavBarStyle'
import home from '../Assets/home.png'
import search from '../Assets/search.png'
import messages from '../Assets/messages.png'
import add from '../Assets/add.png'
import account from '../Assets/account.png'
import React from 'react'

export const NavBar = (props) => {
    const navigation = props.navigation
    return (
        <View style={NavBarStyle.container}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('home')
                }}
            >
                <Image source={home} style={NavBarStyle.icone} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('messenger')
                }}
            >
                <Image source={messages} style={NavBarStyle.icone} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('create-listing')
                }}
            >
                <Image source={add} style={NavBarStyle.iconeAdd} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('search')
                }}
            >
                <Image source={search} style={NavBarStyle.icone} />
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('profile')
                }}
            >
                <Image source={account} style={NavBarStyle.icone} />
            </TouchableOpacity>
        </View>
    )
}
