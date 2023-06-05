/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi */
import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { MessengerPageStyle } from '../Styles/Views/Messenger'
import { TextInput } from 'react-native-gesture-handler'
import { getMyConversations } from '../Services/ConversationsService'
import { GoBackArrow } from '../Components/GoBackArrow'
import {
    getCurrentToken,
    getCurrentUserId,
    setIsNewMessage,
} from '../redux/reducers/navigation'
import { getData } from '../Utils/localStorage'
import { useDispatch, useSelector } from 'react-redux'
import { setConvId } from '../redux/reducers/navigation'

export const Messenger = ({ navigation }) => {
    const [conversations, setConversations] = useState({})
    const ownerId = useSelector(getCurrentUserId)
    const token = useSelector(getCurrentToken)
    const dispatch = useDispatch()
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        getMyConversations(ownerId, token).then((res2) => {
            setConversations(res2.conversations)
            setIsMounted(true)
        })
    }, [])

    return (
        <View style={MessengerPageStyle.container}>
            <GoBackArrow navigation={navigation} />
            <View style={MessengerPageStyle.titleContainer}>
                <Text style={MessengerPageStyle.title}>Messagerie </Text>
            </View>

            <ScrollView style={MessengerPageStyle.scrollView}>
                {
                    conversations &&
                        isMounted &&
                        Object.keys(conversations).map((conversation) => {
                            return (
                                <TouchableOpacity
                                    style={MessengerPageStyle.messageContainer}
                                    key={
                                        conversations[conversation]
                                            .conversationId
                                    }
                                    onPress={() => {
                                        navigation.navigate('chat')
                                        dispatch(
                                            setConvId(
                                                conversations[conversation]
                                                    .conversationId
                                            )
                                        )
                                        dispatch(setIsNewMessage(false))
                                    }}
                                >
                                    <Image
                                        source={{
                                            uri: conversations[conversation]
                                                .listingCoverImage,
                                        }}
                                        style={MessengerPageStyle.userPic}
                                    />
                                    <View
                                        style={MessengerPageStyle.messageDatas}
                                    >
                                        <Text
                                            style={
                                                MessengerPageStyle.messageUserName
                                            }
                                        >
                                            {
                                                conversations[conversation]
                                                    .fkListingTitle
                                            }
                                        </Text>
                                        <Text
                                            style={
                                                MessengerPageStyle.messageContent
                                            }
                                        >
                                            {
                                                conversations[conversation]
                                                    .latestMessageContent
                                            }
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                            )
                        })
                    // : (
                    //     <Text>Pas de conversations</Text>
                    // )
                }
            </ScrollView>
            <NavBar navigation={navigation} />
        </View>
    )
}
