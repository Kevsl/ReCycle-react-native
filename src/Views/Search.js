/* eslint-disable semi */
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import { SearchStyle } from '../Styles/Views/Search'
import { GoBackArrow } from '../Components/GoBackArrow'
import { Listings } from '../Components/Listings'
import { getCustomListings } from '../Services/Listings.service'
import { SearchMenu } from '../Components/SearchMenu'
import { useSelector } from 'react-redux'
import { getCurrentToken } from '../redux/reducers/navigation'
const Search = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(true)
    const [listings, setListings] = useState(true)
    const [isAdsVisible, setIsAdsVisible] = useState(false)
    const [listingTypeId, setListingTypeId] = useState('')
    const [listingSubTypeId, setListingSubTypeId] = useState(1)
    const [listingCategoryId, setListingCategoryId] = useState('')
    const [listingSubCategoryId, setListingSubCategoryId] = useState('')
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [city, setCity] = useState('')
    const [round, setRound] = useState(0)
    const [isMounted, setIsMounted] = useState(false)
    const token = useSelector(getCurrentToken)
    const [errorMessage, setErrorMessage] = useState(false)

    const handleSearch = () => {
        setIsLoading(true)
        return getCustomListings(
            listingTypeId,
            listingSubTypeId,
            listingCategoryId,
            listingSubCategoryId,
            latitude,
            longitude,
            round,
            token
        ).then((res) => {
            setIsLoading(false)
            setListings(res)
            setIsAdsVisible(true)
        })
    }

    return (
        <View style={SearchStyle.container}>
            <GoBackArrow navigation={navigation} />

            {!isAdsVisible ? (
                <View style={SearchStyle.listingContainer}>
                    <SearchMenu
                        setIsAdsVisible={setIsAdsVisible}
                        listingTypeId={listingTypeId}
                        setListingTypeId={setListingTypeId}
                        listingSubTypeId={listingSubTypeId}
                        setListingSubTypeId={setListingSubTypeId}
                        listingCategoryId={listingCategoryId}
                        setListingCategoryId={setListingCategoryId}
                        listingSubCategoryId={listingSubCategoryId}
                        setListingSubCategoryId={setListingSubCategoryId}
                        city={city}
                        setCity={setCity}
                        setLatitude={setLatitude}
                        setLongitude={setLongitude}
                        round={round}
                        setRound={setRound}
                        handleSearch={handleSearch}
                    />
                </View>
            ) : listings &&
              listings !== 'empty' &&
              listings.length &&
              isAdsVisible ? (
                <View style={SearchStyle.listingContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsAdsVisible(false)
                        }}
                        style={SearchStyle.searchButton}
                    >
                        <Text style={SearchStyle.searchText}>
                            Retour à la Recherche
                        </Text>
                    </TouchableOpacity>
                    <Listings
                        navigation={navigation}
                        listings={listings}
                        isMounted={isMounted}
                    />
                </View>
            ) : (
                <View style={SearchStyle.listingContainer}>
                    <TouchableOpacity
                        onPress={() => {
                            setIsAdsVisible(false)
                        }}
                        style={SearchStyle.searchButton}
                    >
                        <Text style={SearchStyle.searchText}>
                            Retour à la Recherche
                        </Text>
                    </TouchableOpacity>
                    <Text style={SearchStyle.noAdText}>Aucune annonce</Text>
                </View>
            )}
            {errorMessage && (
                <Text style={SearchStyle.errorMessage}>
                    Tous les champs sont requis
                </Text>
            )}

            <NavBar navigation={navigation} />
        </View>
    )
}
export default Search
