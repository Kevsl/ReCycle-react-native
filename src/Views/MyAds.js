import { NavBar } from '../Components/NavBar'
import { Text, View } from 'react-native'
import { Listings } from '../Components/Listings'
import { MyAdsStyle } from '../Styles/Views/MyAds'
import { FilterMenu } from '../Components/FilterMenu'
import { GoBackArrow } from '../Components/GoBackArrow'
import React, { useEffect, useState } from 'react'
import { getMyListings } from '../Services/Listings.service'
import { getData } from '../Utils/localStorage'
import { useSelector } from 'react-redux'
import { getCurrentToken, getCurrentUserId } from '../redux/reducers/navigation'

export const MyAds = ({ navigation }) => {
    const [listings, setListings] = useState([])
    const [isMounted, setIsMounted] = useState(false)
    const id = useSelector(getCurrentUserId)
    const token = useSelector(getCurrentToken)
    const [storageToken, setStorageToken] = useState('')

    getData('token').then((res) => {
        setStorageToken(res)
    })

    useEffect(() => {
        getMyListings(id, token).then((res) => {
            setListings(res)
            setIsMounted(true)
        })
    }, [id, token])

    return (
        <View style={MyAdsStyle.container}>
            <GoBackArrow navigation={navigation} />
            <Text style={MyAdsStyle.title}>Mes annonces</Text>
            <Listings
                navigation={navigation}
                listings={listings}
                isMounted={isMounted}
            />
            <NavBar navigation={navigation} />
        </View>
    )
}
