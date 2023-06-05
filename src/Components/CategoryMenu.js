/* eslint-disable react-hooks/exhaustive-deps */
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'
import {
    getListingCategories,
    getListingTypes,
    getSubCategoriesByCategoryId,
} from '../Services/Listings.service'
import { useSelector } from 'react-redux'
import { getCurrentToken } from '../redux/reducers/navigation'
import { CategoryMenuStyle } from '../Styles/Components/CategoryMenu'

export const CategoryMenu = ({
    listingTypeId,
    setListingTypeId,
    listingCategoryId,
    setListingCategoryId,
    listingSubCategoryId,
    setListingSubCategoryId,
}) => {
    const [listingTypeList, setListingTypeList] = useState([])
    const [listingCategories, setListingCategories] = useState([])
    const [listingSubCategoriesList, setListingSubCategoriesList] = useState([])
    const token = useSelector(getCurrentToken)

    useEffect(() => {
        getListingCategories(token).then((res2) => {
            console.log('oha')
            setListingCategories(res2)
            console.log(res2)
        })
        getListingTypes(token).then((res) => {
            setListingTypeList(res)
            console.log('oh')
        })
    }, [])
    useEffect(() => {
        if (listingCategoryId) {
            getSubCategoriesByCategoryId(listingCategoryId, token).then(
                (res) => {
                    setListingSubCategoriesList(res)
                }
            )
        }
    }, [listingCategoryId])

    return (
        <View style={CategoryMenuStyle.scrollView}>
            <Text style={CategoryMenuStyle.label}>Type d'annonce</Text>
            <View style={CategoryMenuStyle.styleContainer}>
                {listingTypeList &&
                    listingTypeList.map((listingType) => {
                        return (
                            <TouchableOpacity
                                style={CategoryMenuStyle.styleButton}
                                onPress={() => {
                                    setListingTypeId(listingType.id)
                                }}
                            >
                                <Text
                                    style={
                                        listingType.id == listingTypeId
                                            ? CategoryMenuStyle.styleTextClicked
                                            : CategoryMenuStyle.styleText
                                    }
                                >
                                    {listingType.type}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
            </View>
            <Text style={CategoryMenuStyle.label}>Catégorie</Text>

            <View style={CategoryMenuStyle.styleContainer}>
                {listingCategories &&
                    listingCategories.map((listingCategory) => {
                        return (
                            <TouchableOpacity
                                style={CategoryMenuStyle.styleButton}
                                onPress={() => {
                                    setListingCategoryId(listingCategory.id)
                                }}
                            >
                                <Text
                                    style={
                                        listingCategory.id == listingCategoryId
                                            ? CategoryMenuStyle.styleTextClicked
                                            : CategoryMenuStyle.styleText
                                    }
                                >
                                    {listingCategory.category}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
            </View>
            {listingCategoryId && (
                <Text style={CategoryMenuStyle.label}>Sous-Catégorie</Text>
            )}

            <View style={CategoryMenuStyle.styleContainer}>
                {listingSubCategoriesList &&
                    listingSubCategoriesList.map((listingSubCategory) => {
                        return (
                            <TouchableOpacity
                                style={CategoryMenuStyle.styleButton}
                                onPress={() => {
                                    setListingSubCategoryId(
                                        listingSubCategory.subCategoryId
                                    )
                                }}
                            >
                                <Text
                                    style={
                                        listingSubCategory.subCategoryId ==
                                        listingSubCategoryId
                                            ? CategoryMenuStyle.styleTextClicked
                                            : CategoryMenuStyle.styleText
                                    }
                                >
                                    {listingSubCategory.subCategoryName}
                                </Text>
                            </TouchableOpacity>
                        )
                    })}
            </View>
        </View>
    )
}
