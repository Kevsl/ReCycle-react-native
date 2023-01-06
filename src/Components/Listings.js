import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListingsStyle } from '../Styles/Listings'
import { getListings } from '../Services/Listings.service'

import redHeart from '../Assets/redHeart.png'
import { Loader } from './Loader'
export const Listings = () => {
    const [listings, setListings] = useState([])
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        getListings().then((res) => {
            setListings(res)
            setIsMounted(true)
        })
    }, [])

    return (
        <ScrollView style={ListingsStyle.AdScrollContainer}>
            <View style={ListingsStyle.flex}>
                {isMounted === true ? (
                    listings.map((item) => {
                        return (
                            <View style={ListingsStyle.adsContainer}>
                                <View style={ListingsStyle.ad} key={item.id}>
                                    <Image
                                        source={{
                                            uri: item.images[0],
                                        }}
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
                    <Loader color="#14213D" />
                )}
            </View>
        </ScrollView>
    )
}
