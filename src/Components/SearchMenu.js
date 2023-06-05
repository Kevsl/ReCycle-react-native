import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { getCitiesList } from '../Services/Listings.service'
import { CategoryMenu } from './CategoryMenu'
import { TextInput } from 'react-native-gesture-handler'
import { SearchMenuStyle } from '../Styles/Components/SearchMenu'

export const SearchMenu = ({
    setIsAdsVisible,
    listingTypeId,
    setListingTypeId,
    listingSubTypeId,
    setListingSubTypeId,
    listingCategoryId,
    setListingCategoryId,
    listingSubCategoryId,
    setListingSubCategoryId,
    city,
    setCity,
    setLatitude,
    setLongitude,
    round,
    setRound,
    handleSearch,
    isNewAdd,
    handleSubmit,
    setZip,
}) => {
    const [coordinatesList, setCoordinatesList] = useState([])
    const [query, setQuery] = useState([])
    const [queryFound, setQueryFound] = useState(false)
    const [isCitiesListVisible, setIsCitiesListVisible] = useState(false)

    useEffect(() => {
        if (query.length > 2 && !queryFound) {
            getCitiesList(query).then((res) => {
                setCoordinatesList(res)
            })
        }
    }, [query, queryFound])

    function handleCity(resultCity) {
        setCity(resultCity.properties.label)
        setLongitude(resultCity.geometry.coordinates[0])
        setLatitude(resultCity.geometry.coordinates[1])
        setQueryFound(true)
        setCoordinatesList([])
        setZip(resultCity.properties.postcode)
    }
    return (
        <ScrollView style={SearchMenuStyle.scrollView}>
            <CategoryMenu
                listingTypeId={listingTypeId}
                setListingTypeId={setListingTypeId}
                listingSubTypeId={listingSubTypeId}
                setListingSubTypeId={setListingSubTypeId}
                listingCategoryId={listingCategoryId}
                setListingCategoryId={setListingCategoryId}
                listingSubCategoryId={listingSubCategoryId}
                setListingSubCategoryId={setListingSubCategoryId}
            />
            <View>
                <Text style={SearchMenuStyle.label}>Lieu</Text>
                {isCitiesListVisible && (
                    <View style={SearchMenuStyle.citiesList}>
                        {coordinatesList.map((resultCity) => {
                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        handleCity(resultCity)
                                        setIsCitiesListVisible(false)
                                    }}
                                    key={resultCity.properties.score}
                                >
                                    <Text style={SearchMenuStyle.city}>
                                        {`${resultCity.properties.label} ${resultCity.properties.postcode}`}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                )}
                <TextInput
                    value={queryFound ? city : query}
                    style={SearchMenuStyle.cityInput}
                    onChangeText={(text) => {
                        setQueryFound(false)
                        setQuery(text)
                        setIsCitiesListVisible(true)
                    }}
                    placeholder="Ville"
                />

                {!isNewAdd && (
                    <View style={SearchMenuStyle.roundView}>
                        <TextInput
                            value={round}
                            style={SearchMenuStyle.round}
                            onChangeText={(text) => {
                                setRound(text)
                            }}
                            placeholder="Kms autour"
                        />
                    </View>
                )}
            </View>
            {isNewAdd ? (
                <TouchableOpacity
                    style={SearchMenuStyle.sumbitButton}
                    onPress={() => {
                        handleSubmit()
                    }}
                >
                    <Text style={SearchMenuStyle.sumbit}>Publier</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    style={SearchMenuStyle.sumbitButton}
                    onPress={() => {
                        handleSearch()
                    }}
                >
                    <Text style={SearchMenuStyle.sumbit}>Rechercher</Text>
                </TouchableOpacity>
            )}
        </ScrollView>
    )
}
