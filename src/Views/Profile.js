import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import goBackArrow from '../Assets/goBackArrow.png'
import englandPm from '../Assets/englishpm.jpeg'
import pen from '../Assets/pen.png'
import rightArrow from '../Assets/rightArrow.png'

import { ProfileStyle } from '../Styles/Profile'

export const Profile = ({ navigation }) => {
  return (
    <View style={ProfileStyle.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={goBackArrow}
          style={ProfileStyle.goBackArrow}
          accessibilityLabel="Retourner sur la page précèdente"
        />
      </TouchableOpacity>
      <View style={ProfileStyle.titleContainer}>
        <Text style={ProfileStyle.title}>Profil </Text>
      </View>

      <View style={ProfileStyle.infoContainer}>
        <View style={ProfileStyle.imageContainer}>
          <Image
            source={englandPm}
            style={ProfileStyle.profilePic}
            accessibilityLabel="Retourner sur la page précèdente"
          />
          <TouchableOpacity
            style={ProfileStyle.imageEditIcon}
            onPress={console.log('Une bonne chose de faite ! ')}
          >
            <Image style={ProfileStyle.penIcon} source={pen} />
          </TouchableOpacity>
        </View>
        <Text style={ProfileStyle.name}>John Doe</Text>
        <Text style={ProfileStyle.mail}>johndoe@email.com </Text>
      </View>
      <View style={ProfileStyle.mainMenu}>
        <TouchableOpacity style={ProfileStyle.mainMenunuItem}>
          <Text style={ProfileStyle.menuText}>Modifier mes informations</Text>
          <Image source={rightArrow} style={ProfileStyle.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={ProfileStyle.mainMenunuItem}>
          <Text style={ProfileStyle.menuText}>Mes annonces</Text>
          <Image source={rightArrow} style={ProfileStyle.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={ProfileStyle.mainMenunuItem}>
          <Text style={ProfileStyle.menuText}>Mon solde</Text>
          <Image source={rightArrow} style={ProfileStyle.rightArrow} />
        </TouchableOpacity>
        <TouchableOpacity style={ProfileStyle.mainMenunuItem}>
          <Text style={ProfileStyle.menuText}>Créer un autre compte</Text>
          <Image source={rightArrow} style={ProfileStyle.rightArrow} />
        </TouchableOpacity>
      </View>
      <View style={ProfileStyle.navBar}>
        <NavBar navigation={navigation} />
      </View>
    </View>
  )
}
