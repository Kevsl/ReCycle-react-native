/* eslint-disable semi */
import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { ListingsStyle } from '../Styles/Components/Listings'
import noPhoto from '../Assets/no-photo.png'
import { Loader } from './Loader'
import { useDispatch } from 'react-redux'
import { selectListing } from '../redux/reducers/navigation'

export const Listings = ({ navigation, listings, isMounted }) => {
    //   const dailyServiceTime = useSelector(getDailyServiceTime)
    const dispatch = useDispatch()

    return (
        <ScrollView style={ListingsStyle.AdScrollContainer}>
            <View style={ListingsStyle.flex}>
                {listings && listings.length > 0 ? (
                    listings.map((item) => {
                        return (
                            <View
                                style={ListingsStyle.adsContainer}
                                key={item.id}
                            >
                                <TouchableOpacity
                                    style={ListingsStyle.ad}
                                    onPress={() => {
                                        navigation.navigate('listing')
                                        dispatch(selectListing(item.id))
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri: item.listingCoverImage
                                                ? item.listingCoverImage
                                                : item.image
                                                ? item.image[0]
                                                : noPhoto,
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
                                    </View>
                                </TouchableOpacity>
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
