import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    ScrollView,
} from 'react-native'
import goBackArrow from '../Assets/goBackArrow.png'
import filters from '../Assets/filters.png'

import { HomeStyle } from '../Styles/Home'
import { Listings } from '../Components/Listings'
import { FilterMenu } from '../Components/FilterMenu'
import { GoBackArrow } from '../Components/GoBackArrow'

export const Home = ({ navigation }) => {
    return (
        <View style={HomeStyle.container}>
            <GoBackArrow />
            <View style={HomeStyle.titleContainer}>
                <Text style={HomeStyle.title}>Mes annonces </Text>
            </View>
            <FilterMenu navigation={navigation} />
            <Text style={HomeStyle.AdsContainerTitle}>Annonces</Text>
            <Listings />
            <NavBar navigation={navigation} />
        </View>
    )
}
