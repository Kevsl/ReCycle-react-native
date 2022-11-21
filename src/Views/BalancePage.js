import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import goBackArrow from '../Assets/goBackArrow.png'
import filters from '../Assets/filters.png'
import shoes from '../Assets/shoes.jpeg'

import { BalancePageStyle } from '../Styles/BalancePage'

export const BalancePage = ({ navigation }) => {
  return (
    <View style={BalancePageStyle.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={goBackArrow}
          style={BalancePageStyle.goBackArrow}
          accessibilityLabel="Retourner sur la page précèdente"
        />
      </TouchableOpacity>
      <View style={BalancePageStyle.titleContainer}>
        <Text style={BalancePageStyle.title}>Mon solde </Text>
      </View>
      <View style={BalancePageStyle.balanceContainer}></View>
      <View style={BalancePageStyle.navBar}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  )
}
