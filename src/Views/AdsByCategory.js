/* eslint-disable semi */
import { NavBar } from '../Components/NavBar'
import { Text, View } from 'react-native'
import { HomeStyle } from '../Styles/Views/Home'
import { Listings } from '../Components/Listings'
import React, { useState, useEffect } from 'react'
import { getListingByCategory, getListings } from '../Services/Listings.service'
import { Categories } from '../Components/Categories'
import { useSelector } from 'react-redux'
import { getCurrentToken } from '../redux/reducers/navigation'
import { GoBackArrow } from '../Components/GoBackArrow'
import { ScrollView } from 'react-native-gesture-handler'

const AdsByCategory = ({ navigation }) => {
    const [listings, setListings] = useState([])
    const [isMounted, setIsMounted] = useState(false)
    const [categoryId, setCategoryId] = useState('')
    const [isAdsVisible, setIsAdsVisible] = useState(false)
    const token = useSelector(getCurrentToken)
    const [categoryName, setCategoryName] = useState('')

    useEffect(() => {
        getListings().then((res) => {
            setListings(res)
            setIsMounted(true)
        })
    }, [])
    useEffect(() => {
        if (categoryId) {
            getListingByCategory(categoryId, token).then((res) => {
                setListings(res)
            })
        }
    }, [categoryId, token])

    return (
        <View style={HomeStyle.container}>
            <View style={HomeStyle.titleContainer}>
                <GoBackArrow navigation={navigation} />
            </View>
            {!isAdsVisible && (
                <ScrollView style={HomeStyle.categories}>
                    <Text style={HomeStyle.titleCategory}>Catégories</Text>
                    <Categories
                        setIsAdsVisible={setIsAdsVisible}
                        setCategoryId={setCategoryId}
                        setCategoryName={setCategoryName}
                    />
                </ScrollView>
            )}

            {categoryId && listings && (
                <View style={HomeStyle.categories}>
                    <Text style={HomeStyle.titleCategory}>
                        Catégorie {categoryName}
                    </Text>
                    <ScrollView style={HomeStyle.scrollAds}>
                        <Listings
                            navigation={navigation}
                            listings={listings}
                            isMounted={isMounted}
                        />
                    </ScrollView>
                </View>
            )}
            <NavBar navigation={navigation} />
        </View>
    )
}
export default AdsByCategory
