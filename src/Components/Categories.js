import { getCategories } from '../Services/Categories.service'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, ActivityIndicator } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { CategoriesStyle } from '../Styles/Components/Categories'

export const Categories = () => {
    const [datas, setDatas] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getCategories().then((res) => {
            setDatas(res)
            console.log(res.data)
            setIsLoading(false)
        })
    }, [])
    return (
        <View>
            {datas && datas !== undefined ? (
                datas.map((data) => {
                    return (
                        <View>
                            <ScrollView
                                style={CategoriesStyle.AdScrollContainer}
                            >
                                <View style={CategoriesStyle.adsContainer}>
                                    <View style={CategoriesStyle.ad}>
                                        <Image
                                            source={data.categoryImage}
                                            style={CategoriesStyle.adImage}
                                        />
                                        <Text style={CategoriesStyle.adText}>
                                            {data.category}
                                        </Text>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                    )
                })
            ) : (
                <ActivityIndicator size="large" color="#14213D" />
            )}
        </View>
    )
}
