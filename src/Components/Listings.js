import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListingsStyle } from '../Styles/Listings'
import { getListings } from '../Services/Listings.service'

import redHeart from '../Assets/redHeart.png'
export const Listings = () => {
    const [listings, setListings] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [okeys, setOkeys] = useState()
    const [ovalues, setOvalues] = useState()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getListings().then((res) => {
            setListings(res)
            setIsLoading(false)
            setIsMounted(true)
            console.log('mounted')
        })
    }, [])

    const keys = Object.keys(listings)
    const values = Object.values(listings)

    // kevin@gmail.com
    return (
        <ScrollView style={ListingsStyle.AdScrollContainer}>
            <View style={ListingsStyle.flex}>
                {isMounted === true ? (
                    values.map((item, index) => {
                        return (
                            <View
                                style={ListingsStyle.adsContainer}
                                key={keys[index]}
                            >
                                <View style={ListingsStyle.ad}>
                                    <Image
                                        source={item.image}
                                        style={ListingsStyle.adImage}
                                    />
                                    <View style={ListingsStyle.adInformations}>
                                        <Text style={ListingsStyle.adText}>
                                            {item.title}
                                        </Text>
                                        <Text style={ListingsStyle.adCity}>
                                            {item.city}
                                        </Text>
                                        <TouchableOpacity>
                                            <Image
                                                source={redHeart}
                                                style={ListingsStyle.heart}
                                            />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        )
                    })
                ) : (
                    <ActivityIndicator size="large" color="#14213D" />
                )}
            </View>
        </ScrollView>
    )
}
