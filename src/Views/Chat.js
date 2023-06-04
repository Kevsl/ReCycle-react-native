import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import { ChatPageStyle } from '../Styles/Views/Chat'
import { TextInput } from 'react-native-gesture-handler'
import { getSpecificConversation } from '../Services/ConversationsService'
import { GoBackArrow } from '../Components/GoBackArrow'
import { getData } from '../Utils/localStorage'

export const Chat = ({ route, navigation }) => {
    const [Datas, setDatas] = useState([])
    const [userInput, setUserInput] = useState('')
    const userId = 123
    const userAvatar = route.params.avatar
    const userName = route.params.name
    const [ownerAvatar, seOwnerAvatar] = useState('')
    const ownerId = '412'
    useEffect(() => {
        getData('avatar').then((res) => {
            seOwnerAvatar(res)
        })
    }, [])
    useEffect(() => {
        getSpecificConversation().then((res) => {
            setDatas(res)
        })
    }, [])

    return (
        <View style={ChatPageStyle.container}>
            <View style={ChatPageStyle.header}>
                <GoBackArrow navigation={navigation} />
                <Text style={ChatPageStyle.userPseudo}>{userName}</Text>
                <Image
                    source={{ uri: userAvatar }}
                    style={ChatPageStyle.userPic}
                />
            </View>
            <View style={ChatPageStyle.warningMessage}>
                <Text style={ChatPageStyle.warningMessageText}>
                    Ne communiquez jamais votre email / N° de téléphone pour via
                    ce service de messagerie. Toute insulte, injure ou fome de
                    rasisme est formellmement interdit.
                </Text>
            </View>

            <ScrollView style={ChatPageStyle.scrollView}>
                {Datas.map((data) => {
                    return data.sender === userId ? (
                        <View style={ChatPageStyle.clientMessage}>
                            <View style={ChatPageStyle.userCred}>
                                <Image
                                    source={{ uri: userAvatar }}
                                    style={ChatPageStyle.userPicInMessage}
                                />
                                <Text style={ChatPageStyle.messageClientName}>
                                    {userName}
                                </Text>
                            </View>
                            <Text style={ChatPageStyle.messageClientMessage}>
                                {data.message}
                            </Text>
                        </View>
                    ) : (
                        <View style={ChatPageStyle.ownerMessage}>
                            <View style={ChatPageStyle.userCred}>
                                <Text style={ChatPageStyle.messageOwnerName}>
                                    Vous
                                </Text>
                                <Image
                                    source={{ uri: ownerAvatar }}
                                    style={ChatPageStyle.userPicInMessage}
                                />
                            </View>
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
