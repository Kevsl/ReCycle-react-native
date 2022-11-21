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

import { MessengerPageStyle } from '../Styles/Messenger'

export const Messenger = ({ navigation }) => {
  return (
    <View style={MessengerPageStyle.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={goBackArrow}
          style={MessengerPageStyle.goBackArrow}
          accessibilityLabel="Retourner sur la page précèdente"
        />
      </TouchableOpacity>

      <View style={MessengerPageStyle.titleContainer}>
        <Text style={MessengerPageStyle.title}>Messagerie </Text>
      </View>

      <NavBar navigation={navigation} />
    </View>
  )
}
