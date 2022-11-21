import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'

import { SearchPageStyle } from '../Styles/SearchPage'

export const SearchPage = ({ navigation }) => {
  return (
    <View style={SearchPageStyle.container}>
      <View style={SearchPageStyle.SearchContainer}></View>
      <View style={SearchPageStyle.navBar}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  )
}
