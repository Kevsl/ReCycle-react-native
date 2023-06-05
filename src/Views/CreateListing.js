import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { NavBar } from '../Components/NavBar'
import { createListing, getCitiesList } from '../Services/Listings.service'
import { getCurrentToken, setToken } from '../redux/reducers/navigation'
import { useSelector } from 'react-redux'

const CreateListing = ({ navigation }) => {
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [listingTypeId, setListingTypeId] = useState('')
    const [listingSubTypeId, setListingSubTypeId] = useState(1)
    const [listingCategoryId, setListingCategoryId] = useState('')
    const [listingSubCategoryId, setListingSubCategoryId] = useState('')
    const [acceptedListingImages, setAcceptedListingImages] = useState([])
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [coordinatesList, setCoordinatesList] = useState([])
    const [query, setQuery] = useState([])
    const [queryFound, setQueryFound] = useState(false)
    const token = useSelector(getCurrentToken)

    async function handleSubmit() {
        if (
            title &&
            listingTypeId &&
            listingCategoryId &&
            listingSubTypeId &&
            zip &&
            city &&
            description &&
            latitude &&
            longitude &&
            acceptedListingImages
        ) {
            await createListing(
                title,
                description,
                listingTypeId,
                listingSubTypeId,
                listingCategoryId,
                listingSubCategoryId,
                zip,
                city,
                latitude,
                longitude,
                acceptedListingImages,
                token
            ).then((res) => {
                navigation.navigate('home')
            })
        }
    }
    useEffect(() => {
        if (query.length > 2 && !queryFound) {
            getCitiesList(query).then((res) => {
                setCoordinatesList(res)
            })
        }
    }, [query, queryFound])

    function handleCity(resultCity) {
        setCity(resultCity.properties.label)
        setLatitude(resultCity.geometry.coordinates[0])
        setLongitude(resultCity.geometry.coordinates[1])
        setZip(resultCity.properties.postcode)
        setQueryFound(true)
        setCoordinatesList([])
    }

    return (
        <View>
            <Text>Création d'nnonce</Text>
        </View>
    )
}
export default CreateListing
