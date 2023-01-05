import { Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import {ValidateBtnStyle} from "../Styles/ValidateBtn";

export const ValidateBtn = ({navigation, navigationTarget, btnText}) => {
  return (
    <View>
        <TouchableOpacity
            style={ValidateBtnStyle}
            onPress={() => navigation.navigate(navigationTarget)}
        >
            <Text style={ValidateBtnStyle.btnText}>{ btnText }</Text>
        </TouchableOpacity>
    </View>
  )
}
