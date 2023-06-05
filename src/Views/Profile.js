import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import englandPm from '../Assets/englishpm.jpeg'
import pen from '../Assets/pen.png'
import { GoBackArrow } from '../Components/GoBackArrow'
import { Balance } from '../Components/Balance'
import { ProfileStyle } from '../Styles/Views/Profile'
import { clearAll, getData } from '../Utils/localStorage'
import { ProfilMenuItem } from '../Components/ProfilMenuItem'

export const Profile = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [avatar, setAvatar] = useState('')

    useEffect(() => {
        getData('avatar').then((res) => setAvatar(res))
        getData('username').then((res) => setUserName(res))
    })

    return (
        <View style={ProfileStyle.container}>
            <GoBackArrow navigation={navigation} />
            <View style={ProfileStyle.titleContainer}>
                <Text style={ProfileStyle.title}>Profil </Text>
            </View>

            <View style={ProfileStyle.infoContainer}>
                {avatar && userName && (
                    <View style={ProfileStyle.imageContainer}>
                        <Image
                            source={{ uri: avatar }}
                            style={ProfileStyle.profilePic}
                            accessibilityLabel="Retourner sur la page précèdente"
                        />
                        <TouchableOpacity
                            style={ProfileStyle.imageEditIcon}
                            onPress={console.log('En cours ')}
                        >
                            <Image style={ProfileStyle.penIcon} source={pen} />
                        </TouchableOpacity>
                    </View>
                )}
                <Text style={ProfileStyle.name}>{userName}</Text>
                <Text style={ProfileStyle.mail}>{userName}@email.com </Text>
            </View>
            <View style={ProfileStyle.mainMenu}>
                <ProfilMenuItem
                    navigation={navigation}
                    url="home"
                    title="Modifier mes informations"
                    logout="false"
                />
                <ProfilMenuItem
                    navigation={navigation}
                    url="my-ads"
                    title="Mes annonces"
                    logout="false"
                />
                <ProfilMenuItem
                    navigation={navigation}
                    url="login"
                    title="Se déconnecter"
                    logout="true"
                />
            </View>
            {/* <Balance /> */}
            <View style={ProfileStyle.navBar}>
                <NavBar navigation={navigation} />
            </View>
        </View>
    )
}
