import { getCategories } from '../Services/Categories.service'
import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    ActivityIndicator,
    TouchableOpacity,
} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CategoriesStyle } from '../Styles/Components/Categories'
import { getListingCategories } from '../Services/Listings.service'
import { useSelector } from 'react-redux'
import { getCurrentToken, selectListing } from '../redux/reducers/navigation'
import noPhoto from '../Assets/no-photo.png'
import { Loader } from './Loader'
import { useDispatch } from 'react-redux'

export const Categories = ({
    setIsAdsVisible,
    setCategoryId,
    setCategoryName,
}) => {
    const [categories, setCategories] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const token = useSelector(getCurrentToken)
    const dispatch = useDispatch()

    useEffect(() => {
        setIsLoading(true)
        getListingCategories(token).then((res) => {
            setCategories(res)
            setIsLoading(false)
        })
    }, [token])

    return (
        <View>
            <View style={CategoriesStyle.scrollView}>
                {categories ? (
                    categories.map((categorie) => {
                        return (
                            <View
                                style={CategoriesStyle.adsContainer}
                                key={categorie.id}
                            >
                                <TouchableOpacity
                                    style={CategoriesStyle.ad}
                                    onPress={() => {
                                        setIsAdsVisible(true)
                                        setCategoryId(categorie.id)
                                        setCategoryName(categorie.category)
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri: categorie.image
                                                ? categorie.image
                                                : noPhoto,
                                        }}
                                        style={CategoriesStyle.adImage}
                                    />
                                    <View
                                        style={CategoriesStyle.adInformations}
                                    >
                                        <Text style={CategoriesStyle.adText}>
                                            {categorie.category}
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
        </View>
    )
}
