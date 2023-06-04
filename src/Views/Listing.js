import { NavBar } from '../Components/NavBar'
import { Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import { ListingStyle } from '../Styles/Views/Listing'
import { GoBackArrow } from '../Components/GoBackArrow'
import React, { useState, useEffect } from 'react'
import { getListing } from '../Services/Listings.service'
import { useSelector } from 'react-redux'
import {
    getCurrentListingId,
    setIsNewMessage,
} from '../redux/reducers/navigation'
import chevronLeft from '../Assets/chevron-left.png'
import chevronRight from '../Assets/chevron-right.png'
import { useDispatch } from 'react-redux'

const Listing = ({ navigation }) => {
    const [listingData, setListingData] = useState([])
    const [carousselPosition, setCarousselPosition] = useState(0)
    const id = useSelector(getCurrentListingId)
    const [isLoading, setIsLoading] = useState(false)
    const [isMounted, setIsMounted] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        getListing(id).then((res) => {
            setIsLoading(true)
            setListingData(res)
            setIsLoading(false)
            setIsMounted(true)
        })
    }, [id])

    function handleCaroussel(direction) {
        if (direction === 'right') {
            let value = carousselPosition
            setCarousselPosition((value += 1))
            if (carousselPosition === listingData[0].images.length - 1) {
                setCarousselPosition(0)
            }
        } else {
            let value = carousselPosition
            setCarousselPosition((value -= 1))
            if (carousselPosition < 1) {
                setCarousselPosition(2)
            }
        }
    }

    return (
        <View style={ListingStyle.container}>
            <GoBackArrow navigation={navigation} />
            <View>
                {isLoading ? (
                    <View>
                        <Text>Chargement</Text>
                    </View>
                ) : listingData && isMounted ? (
                    listingData.map((data) => {
                        return (
                            <View key={data.id}>
                                <View style={ListingStyle.card}>
                                    <Image
                                        source={{
                                            uri: data.images[carousselPosition],
                                        }}
                                        style={ListingStyle.image}
                                        alt={data.images[carousselPosition]}
                                    />
                                    <TouchableOpacity
                                        style={ListingStyle.leftButton}
                                        onPress={() => {
                                            handleCaroussel('-')
                                        }}
                                    >
                                        <Image
                                            source={chevronLeft}
                                            style={ListingStyle.chevron}
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        style={ListingStyle.rightButton}
                                        onPress={() => {
                                            handleCaroussel('right')
                                        }}
                                    >
                                        <Image
                                            source={chevronRight}
                                            style={ListingStyle.chevron}
                                        />
                                    </TouchableOpacity>
                                </View>
                                <ScrollView style={ListingStyle.data}>
                                    <View style={ListingStyle.categories}>
                                        <Text style={ListingStyle.category}>
                                            {data.listingCategory}
                                        </Text>
                                        <Text style={ListingStyle.category}>
                                            {data.listingSubCategory}
                                        </Text>
                                    </View>
                                    <Text style={ListingStyle.title}>
                                        {data.title}
                                    </Text>
                                    <View style={ListingStyle.cardDatas}>
                                        <View style={ListingStyle.flex}>
                                            <Image
                                                source={{ uri: data.photo }}
                                                alt={data.title}
                                                style={ListingStyle.avatarPic}
                                            />
                                            <View>
                                                <Text
                                                    style={
                                                        ListingStyle.userName
                                                    }
                                                >
                                                    {data.name}
                                                </Text>
                                                <Text
                                                    style={
                                                        ListingStyle.infoUser
                                                    }
                                                >
                                                    {new Date(
                                                        data.createdAt.date
                                                    ).toLocaleDateString(
                                                        'fr-fr'
                                                    )}
                                                </Text>
                                            </View>
                                        </View>
                                        <TouchableOpacity
                                            style={ListingStyle.contactButton}
                                            onPress={() => {
                                                navigation.navigate('chat')
                                                dispatch(setIsNewMessage(true))
                                            }}
                                        >
                                            <Text
                                                style={
                                                    ListingStyle.contactButtonText
                                                }
                                            >
                                                Contacter
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View>
                                        <View style={ListingStyle.locationData}>
                                            <View>
                                                <Text
                                                    style={ListingStyle.label}
                                                >
                                                    Lieu
                                                </Text>
                                                <Text>{data.city}</Text>
                                            </View>
                                            <View>
                                                <Text
                                                    style={ListingStyle.label}
                                                >
                                                    Type
                                                </Text>
                                                <Text>
                                                    {data.fkListingType}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={ListingStyle.description}>
                                            <Text style={ListingStyle.label}>
                                                Description :
                                            </Text>
                                            <Text
                                                style={
                                                    ListingStyle.descriptionText
                                                }
                                            >
                                                {data.description}
                                            </Text>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        )
                    })
                ) : (
                    <Text>
                        Problème de chargement, veuillez réessayer plus tard
                    </Text>
                )}
                <NavBar navigation={navigation} />
            </View>
        </View>
    )
}
export default Listing
