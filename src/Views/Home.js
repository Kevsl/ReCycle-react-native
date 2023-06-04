/* eslint-disable semi */
import { NavBar } from '../Components/NavBar'
import { Text, View } from 'react-native'
import { HomeStyle } from '../Styles/Views/Home'
import { Listings } from '../Components/Listings'
import { GoBackArrow } from '../Components/GoBackArrow'
import React, { useState, useEffect } from 'react'
import { getListings } from '../Services/Listings.service'

export const Home = ({ navigation }) => {
    const [listings, setListings] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        console.log('va charger')
        getListings().then((res) => {
            setListings(res)
            setIsMounted(true)
        })
    }, [])

    return (
        <View style={HomeStyle.container}>
            <GoBackArrow navigation={navigation} />
            <View style={HomeStyle.titleContainer}>
                <Text style={HomeStyle.title}>Mes annonces </Text>
            </View>
            <Text style={HomeStyle.AdsContainerTitle}>Annonces</Text>
            <Listings
                navigation={navigation}
                listings={listings}
                isMounted={isMounted}
            />
            <NavBar navigation={navigation} />
        </View>
    )
}
