import {Text, View} from 'react-native'
import React from 'react'
import {HeaderTitleStyle} from "../Styles/HeaderTitle";

export const HeaderTitle = ({title}) => {
    return (
        <View style={HeaderTitleStyle.titleContainer}>
            <Text style={HeaderTitleStyle.title}>{title}</Text>
        </View>
    )
}
