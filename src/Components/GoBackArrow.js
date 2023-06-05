/* eslint-disable semi */
import { Image, TouchableOpacity } from 'react-native'
import GoBackArrowImage from '../Assets/goBackArrow.png'
import { GoBackArrowStyle } from '../Styles/Components/GoBackArrow'
import React from 'react'
export const GoBackArrow = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={GoBackArrowImage}
                style={GoBackArrowStyle.goBackArrow}
                accessibilityLabel="Retourner sur la page précèdente"
            />
        </TouchableOpacity>
    )
}
