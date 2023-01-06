import {Image, Text, TouchableOpacity, View} from 'react-native'
import {ProductStyle} from "../Styles/Product";
import {GoBackArrow} from "../Components/GoBackArrow";
import {HomeStyle} from "../Styles/Home";
import React from "react";

export const Product = ({navigation, route}) => {

    return (
        <View style={ProductStyle.container}>
            <GoBackArrow navigation={navigation}/>

            <View style={ProductStyle.productContainer}>
                <Image source={route.params.image} style={ProductStyle.productImage}/>
                <Text style={ProductStyle.productTitle}>{route.params.title}</Text>
            </View>


        </View>
    )
}
