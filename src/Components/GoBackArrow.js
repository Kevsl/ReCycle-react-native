import { Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import goBackArrow from "../Assets/goBackArrow.png";
import { GoBackArrowStyle } from "../Styles/GoBackArrow";
import {NavBarStyle} from "../Styles/NavBarStyle";

export const GoBackArrow = (props) => {
  const navigation = props.navigation
  return (
    <View>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={goBackArrow}
                style={GoBackArrowStyle.goBackArrow}
                accessibilityLabel="Retourner sur la page précédente"
            />
        </TouchableOpacity>
    </View>
  )
}
