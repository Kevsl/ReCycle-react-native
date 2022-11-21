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

import { ChatPageStyle } from '../Styles/Chat'
import { TextInput } from 'react-native-gesture-handler'

export const Chat = ({ navigation }) => {
  const [Datas, setDatas] = useState([
    {
      id: 1,
      user: 'Jacques123',
      message: 'Bonjour, Je suis intéréssé par l Angleterre ',
      unread: 3,
      status: 'client',
    },
    {
      id: 2,
      user: 'Moi',
      message: 'D accord, que diriez vous de 200€? ',
      unread: 3,
    },
    {
      id: 3,
      user: 'Jacques123',
      message: 'Un peu trop cher  ',
      unread: 5,
      status: 'client',
    },
    {
      id: 4,
      user: 'Jacques123',
      message: 'Que diriez vous de 100€',
      unread: 9,
      status: 'client',
    },
    {
      id: 5,
      user: 'Jacques123',
      message: 'Que diriez vous de 100€',
      status: 'client',
    },
    {
      id: 6,
      user: 'Jacques123',
      message: 'Que diriez vous de 100€',
      status: 'client',
    },
    {
      id: 7,
      user: 'Jacques123',
      message: 'Que diriez vous de 100€',
      status: 'client',
    },
    {
      id: 8,
      user: 'Moi',
      message: 'OK ',
    },
    {
      id: 9,
      user: 'Moi',
      message: 'D accord',
    },
  ])

  const [userInput, setUserInput] = useState('')

  return (
    <View style={ChatPageStyle.container}>
      <View style={ChatPageStyle.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={goBackArrow}
            style={ChatPageStyle.goBackArrow}
            accessibilityLabel="Retourner sur la page précèdente"
          />
        </TouchableOpacity>
        <Text style={ChatPageStyle.userPseudo}>Pseudo123</Text>
        <Image source={englishpm} style={ChatPageStyle.userPic} />
      </View>
      <View style={ChatPageStyle.warningMessage}>
        <Text style={ChatPageStyle.warningMessageText}>
          Ne communiquez jamais votre email / N° de téléphone pour via ce
          service de messagerie. Toute insulte, injure ou fome de rasisme est
          formellmement interdit.
        </Text>
      </View>

      <ScrollView style={ChatPageStyle.scrollView}>
        {Datas.map((data) => {
          return data.status === 'client' ? (
            <View style={ChatPageStyle.clientMessage}>
              <Text style={ChatPageStyle.messageClientName}>{data.user}</Text>
              <Text style={ChatPageStyle.messageClientMessage}>
                {data.message}
              </Text>
            </View>
          ) : (
            <View style={ChatPageStyle.ownerMessage}>
              <Text style={ChatPageStyle.messageOwnerName}>{data.user}</Text>
              <Text style={ChatPageStyle.messageOwnerMessage}>
                {data.message}
              </Text>
            </View>
          )
        })}
      </ScrollView>
      <View style={ChatPageStyle.inputContainer}>
        <TextInput
          value={userInput}
          style={ChatPageStyle.input}
          onChangeText={setUserInput}
          placeholder="Ecrire un message"
        />
      </View>

      <NavBar navigation={navigation} />
    </View>
  )
}
