import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import goBackArrow from "../Assets/goBackArrow.png";
import { GoBackArrowStyle } from "../Styles/GoBackArrow";
import {NavBarStyle} from "../Styles/NavBarStyle";
import {ValidateBtnStyle} from "../Styles/ValidateBtn";

export const ValidateBtn = ({navigation, navigationTarget, btnText}) => {
  return (
    <View>
        <TouchableOpacity
            style={ValidateBtnStyle}
            onPress={() => navigation.navigate('home')}
        >
            <Text style={ValidateBtnStyle.btnText}>{ btnText }</Text>
        </TouchableOpacity>
    </View>
  )
}
