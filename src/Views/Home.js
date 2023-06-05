/* eslint-disable semi */
import { NavBar } from '../Components/NavBar'
import { Text, TouchableOpacity, View } from 'react-native'
import { HomeStyle } from '../Styles/Views/Home'
import { Listings } from '../Components/Listings'
import React, { useState, useEffect } from 'react'
import { getListings } from '../Services/Listings.service'

export const Home = ({ navigation }) => {
    const [listings, setListings] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        getListings().then((res) => {
            setListings(res)
            setIsMounted(true)
        })
    }, [])

    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.titleContainer}>
                <TouchableOpacity
                    style={HomeStyle.categoryButton}
                    onPress={() => {
                        navigation.navigate('ads-by-category')
                    }}
                >
                    <Text style={HomeStyle.categoryButtonText}>
                        {'< '} Recherche par catégories
                    </Text>
                </TouchableOpacity>
                <Text style={HomeStyle.title}>Nos dernières annonces </Text>
            </View>
            <Listings
                navigation={navigation}
                listings={listings}
                isMounted={isMounted}
            />
            <NavBar navigation={navigation} />
        </View>
    )
}
