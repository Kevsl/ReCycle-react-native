import React, { useState, useEffect } from 'react'
import { Text, TouchableOpacity, View, Image } from 'react-native'
import { NavBar } from '../Components/NavBar'
import { createListing, getCitiesList } from '../Services/Listings.service'
import { getCurrentToken, setToken } from '../redux/reducers/navigation'
import { useSelector } from 'react-redux'
import { SearchMenu } from '../Components/SearchMenu'
import { ScrollView } from 'react-native-gesture-handler'
import { TextInput } from 'react-native-gesture-handler'
import { CreateListingStyle } from '../Styles/Views/CreateListing'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import ImagePicker from 'react-native-image-picker'
import imageIcon from '../Assets/photos.png'
import cameraIcon from '../Assets/camera.png'

const CreateListing = ({ navigation }) => {
    const [zip, setZip] = useState('')
    const [city, setCity] = useState('')
    const [description, setDescription] = useState('')
    const [title, setTitle] = useState('')
    const [listingTypeId, setListingTypeId] = useState('')
    const [listingSubTypeId, setListingSubTypeId] = useState(1)
    const [listingCategoryId, setListingCategoryId] = useState('')
    const [listingSubCategoryId, setListingSubCategoryId] = useState('')
    const [acceptedListingImages, setAcceptedListingImages] = useState(null)
    const [latitude, setLatitude] = useState('')
    const [longitude, setLongitude] = useState('')
    const [coordinatesList, setCoordinatesList] = useState([])
    const [query, setQuery] = useState([])
    const [queryFound, setQueryFound] = useState(false)
    const token = useSelector(getCurrentToken)
    const [isNewAdd, setIsNewAdd] = useState(true)
    const [errorMessage, setErrorMessage] = useState(false)
    const [openGallery, setOpenGallery] = useState(false)
    const [openCamera, setOpenCamera] = useState(false)

    useEffect(() => {
        if (openGallery) {
            launchImageLibrary({ mediaType: 'photo', selectionLimit: 3 }).then(
                (res) => {
                    setAcceptedListingImages(res.assets)
                    setOpenGallery(false)
                }
            )
        }
        if (openCamera) {
            launchCamera({ mediaType: 'photo', selectionLimit: 3 }).then(
                (res) => {
                    setAcceptedListingImages(res.assets)
                    setOpenCamera(false)
                }
            )
        }
    }, [openGallery, openCamera])

    async function handleSubmit() {
        if (
            title &&
            listingTypeId &&
            listingCategoryId &&
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
        } else {
            setErrorMessage(true)
        }
    }
    useEffect(() => {
        if (query.length > 2 && !queryFound) {
            getCitiesList(query).then((res) => {
                setCoordinatesList(res)
            })
        }
    }, [query, queryFound])

    return (
        <View style={CreateListingStyle.container}>
            <Text style={CreateListingStyle.title}>Création d'une annonce</Text>
            <ScrollView style={CreateListingStyle.view}>
                <View style={CreateListingStyle.iconView}>
                    <TouchableOpacity
                        style={CreateListingStyle.imageButton}
                        onPress={() => {
                            setOpenGallery(true)
                        }}
                    >
                        <Image
                            source={imageIcon}
                            style={CreateListingStyle.icon}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={CreateListingStyle.imageButton}
                        onPress={() => {

                            setOpenCamera(true)
                        }}
                    >
                        <Image
                            source={cameraIcon}
                            style={CreateListingStyle.icon}
                        />
                    </TouchableOpacity>
                </View>
                {acceptedListingImages && (
                    <View style={CreateListingStyle.imagesView}>
                        {acceptedListingImages.map((image) => {
                            return (
                                <Image
                                    source={image}
                                    style={CreateListingStyle.imagePreview}
                                />
                            )
                        })}
                    </View>
                )}

                <TextInput
                    value={title}
                    style={CreateListingStyle.titleInput}
                    onChangeText={(text) => {
                        setTitle(text)
                    }}
                    placeholder="Titre de l'annonce"
                />
                <TextInput
                    value={description}
                    style={CreateListingStyle.descriptionInput}
                    onChangeText={(text) => {
                        setDescription(text)
                    }}
                    placeholder="Description"
                    numberOfLines={5}
                />
                <SearchMenu
                    setIsAdsVisible={false}
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
                    round={0}
                    setRound={0}
                    handleSearch={false}
                    isNewAdd={isNewAdd}
                    handleSubmit={handleSubmit}
                    setZip={setZip}
                />
            </ScrollView>
            {errorMessage && (
                <Text style={CreateListingStyle.errorMessage}>
                    Tous les champs sont requis
                </Text>
            )}
            <NavBar navigation={navigation} />
        </View>
    )
}
export default CreateListing
