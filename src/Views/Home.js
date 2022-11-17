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
import filters from '../Assets/filters.png'
import shoes from '../Assets/shoes.jpeg'

import { HomeStyle } from '../Styles/Home'

export const Home = ({ navigation }) => {
  return (
    <View style={HomeStyle.container}>
      <TouchableOpacity onPress={console.log('Une bonne chose de faite ! ')}>
        <Image
          source={goBackArrow}
          style={HomeStyle.goBackArrow}
          accessibilityLabel="Retourner sur la page précèdente"
        />
      </TouchableOpacity>
      <View style={HomeStyle.titleContainer}>
        <Text style={HomeStyle.title}>Mes annonces </Text>
      </View>
      <View style={HomeStyle.secondMenu}>
        <View style={HomeStyle.secondMenuProductButtons}>
          <TouchableOpacity
            onPress={console.log('Une bonne chose de faite ! ')}
            style={HomeStyle.offersButton}
          >
            <Text style={HomeStyle.offersButtonText}>Offres</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={console.log('Une bonne chose de faite ! ')}
            style={HomeStyle.ordersButton}
          >
            <Text style={HomeStyle.ordersButtonText}>Demandes</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={console.log('Une bonne chose de faite ! ')}
          style={HomeStyle.filtersButton}
        >
          <Image
            source={filters}
            style={HomeStyle.filterIcon}
            accessibilityLabel="Retourner sur la page précèdente"
          />
          <Text style={HomeStyle.filtersButtonText}>Filtres</Text>
          <View style={HomeStyle.notificationFilter}>
            <Text style={HomeStyle.notificationText}>2</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Text style={HomeStyle.adsContainerTitle}>Annonces</Text>
      <ScrollView style={HomeStyle.AdScrollContainer}>
        <View style={HomeStyle.adsContainer}>
          <View style={HomeStyle.ad}>
            <Image source={shoes} style={HomeStyle.adImage} />
            <Text style={HomeStyle.adText}>Shoes</Text>
          </View>
          <View style={HomeStyle.ad}>
            <Image source={shoes} style={HomeStyle.adImage} />
            <Text style={HomeStyle.adText}>Shoes</Text>
          </View>
          <View style={HomeStyle.ad}>
            <Image source={shoes} style={HomeStyle.adImage} />
            <Text style={HomeStyle.adText}>Shoes</Text>
          </View>
          <View style={HomeStyle.ad}>
            <Image source={shoes} style={HomeStyle.adImage} />
            <Text style={HomeStyle.adText}>Shoes</Text>
          </View>
          <View style={HomeStyle.ad}>
            <Image source={shoes} style={HomeStyle.adImage} />
            <Text style={HomeStyle.adText}>Shoes</Text>
          </View>
          <View style={HomeStyle.ad}>
            <Image source={shoes} style={HomeStyle.adImage} />
            <Text style={HomeStyle.adText}>Shoes</Text>
          </View>
        </View>
      </ScrollView>
      <NavBar />
    </View>
  )
}
