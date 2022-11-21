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
import greenSearch from '../Assets/greenSearch.png'
import englishpm from '../Assets/englishpm.jpeg'

import { MessengerPageStyle } from '../Styles/Messenger'
import { TextInput } from 'react-native-gesture-handler'

export const Messenger = ({ navigation }) => {
  const [Datas, setDatas] = useState([
    {
      name: 'Jacques123',
      message: 'Je suis intéréssé par l Angleterre ',
      unread: 3,
      image: englishpm,
    },
    {
      name: 'Ernesto',
      message: 'Je suis intéréssé par l Angleterre ',
      unread: 3,
      image: englishpm,
    },
    {
      name: 'Jacques123',
      message: 'Je suis intéréssé par l Angleterre ',
      unread: 5,
      image: englishpm,
    },
    {
      name: 'Jacques123',
      message: 'Je suis intéréssé par l Angleterre ',
      unread: 9,
      image: englishpm,
    },
    {
      name: 'Jacques123',
      message: 'Je suis intéréssé par l Angleterre ',
      image: englishpm,
    },
  ])

  const [searchQuery, setSearchQuery] = useState('')

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
      <View style={MessengerPageStyle.inputContainer}>
        <Image source={greenSearch} style={MessengerPageStyle.searchIcon} />
        <TextInput
          value={searchQuery}
          style={MessengerPageStyle.input}
          onChangeText={setSearchQuery}
          placeholder="Rechercher"
        />
      </View>
      <ScrollView style={MessengerPageStyle.scrollView}>
        {Datas.map((data) => (
          // eslint-disable-next-line prettier/prettier
          <View style={MessengerPageStyle.messageContainer}>
            <Image source={data.image} style={MessengerPageStyle.userPic} />
            <View style={MessengerPageStyle.messageDatas}>
              <Text style={MessengerPageStyle.messageUserName}>
                {data.name}
              </Text>
              <Text style={MessengerPageStyle.messageContent}>
                {data.message}
              </Text>
            </View>
            <View style={MessengerPageStyle.notificationContainer}>
              {data.unread ? (
                <View style={MessengerPageStyle.notification}>
                  <Text style={MessengerPageStyle.notificationText}>
                    {data.unread}
                  </Text>
                </View>
              ) : null}
            </View>
          </View>
        ))}
      </ScrollView>

      <NavBar navigation={navigation} />
    </View>
  )
}
