import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import goBackArrow from '../Assets/goBackArrow.png'

import { SearchPageStyle } from '../Styles/SearchPage'

export const SearchPage = ({ navigation }) => {
  return (
    <View style={SearchPageStyle.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={goBackArrow}
          style={SearchPageStyle.goBackArrow}
          accessibilityLabel="Retourner sur la page précèdente"
        />
      </TouchableOpacity>
      <View style={SearchPageStyle.SearchContainer}></View>
      <View style={SearchPageStyle.navBar}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  )
}
