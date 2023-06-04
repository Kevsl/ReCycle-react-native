/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable semi */

import React, { useState, useEffect, useRef } from 'react'
import { Text, View, Image, ScrollView, TouchableOpacity } from 'react-native'
import { ChatPageStyle } from '../Styles/Views/Chat'
import { TextInput } from 'react-native-gesture-handler'
import { GoBackArrow } from '../Components/GoBackArrow'
import { getData } from '../Utils/localStorage'
import {
    getCurrentConvId,
    getCurrentListingId,
    getCurrentToken,
    getCurrentUserId,
    getNewMessageState,
    setIsNewMessage,
} from '../redux/reducers/navigation'
import { useDispatch, useSelector } from 'react-redux'
import {
    getSpecificConversation,
    sendFirstMessage,
    sendMessage,
} from '../Services/ConversationsService'
import send from '../Assets/send.png'

export const Chat = ({ route, navigation }) => {
    const [messages, setMessages] = useState([])
    const [currentMessage, setCurrentMessage] = useState('')
    const [token, setToken] = useState('')
    const [ownerId, setOwnerId] = useState('')
    const [recipientId, setRecipientId] = useState('')
    const conversationId = useSelector(getCurrentConvId)
    const [isMsgLoading, setIsMsgLoading] = useState(false)
    const messagesEndRef = useRef(null)
    const isNewMessage = useSelector(getNewMessageState)
    const dispatch = useDispatch()
    const [isMounted, setIsMounted] = useState(false)
    const listingId = useSelector(getCurrentListingId)

    // const scrollToBottom = () => {
    //     if (messagesEndRef) {
    //         messagesEndRef.current.scrollToEnd({ animated: true })
    //     }
    // }

    useEffect(() => {
        getData('token').then((res) => {
            setToken(res)
        })
        getData('id').then((res) => {
            setOwnerId(res)
        })
    })

    useEffect(() => {
        if (conversationId && token) {
            fetchSingleConversation()
            setIsMsgLoading(false)
        }
    }, [conversationId, token])

    function fetchSingleConversation() {
        setIsMsgLoading(true)

        getSpecificConversation(conversationId, token).then((res) => {
            setMessages(res)
            if (conversationId) {
                setRecipientId(res.messagesList[0].recipient)
            } else if (conversationId.length > 0 && res.messagesList) {
                setRecipientId(res.messagesList[0].sender)
            }
            setIsMounted(true)
        })
    }

    function handleRefreshPage() {
        if (conversationId) {
            setIsMsgLoading(true)
            fetchSingleConversation()
            setCurrentMessage('')
            setIsMsgLoading(false)
        }
    }

    function handleNewConversation(id, firstMessage) {
        if (listingId && firstMessage) {
            sendFirstMessage(listingId, firstMessage, token).then((res) => {
                dispatch(setIsNewMessage(false))
                navigation.navigate('messenger')
                setCurrentMessage('')
            })
        }
    }

    function handleNewMessage(
        fkConversation,
        fkUserSender,
        fkUserRecipient,
        content
    ) {
        if (fkConversation && content && fkUserSender && fkUserRecipient) {
            sendMessage(
                fkConversation,
                fkUserSender,
                fkUserRecipient,
                content,
                token
            )
            handleRefreshPage()
            setCurrentMessage('')
        }
    }

    function handleSubmit() {
        if (isNewMessage) {
            handleNewConversation(conversationId, currentMessage, token)
        } else {
            handleNewMessage(
                conversationId,
                ownerId,
                recipientId,
                currentMessage,
                token
            )

            handleRefreshPage()
        }
    }

    useEffect(() => {
        const intervalId = setInterval(fetchSingleConversation, 10000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <View style={ChatPageStyle.container}>
            <View style={ChatPageStyle.header}>
                <GoBackArrow navigation={navigation} />
            </View>
            <View style={ChatPageStyle.warningMessage}>
                <Text style={ChatPageStyle.warningMessageText}>
                    Ne communiquez jamais votre email / N° de téléphone pour via
                    ce service de messagerie. Toute insulte, injure ou forme de
                    racisme est formellemement interdit.
                </Text>
            </View>

            <ScrollView style={ChatPageStyle.scrollView}>
                {messages.messagesList &&
                    isMounted &&
                    !isNewMessage &&
                    messages.messagesList.map((message) => {
                        return message.sender != ownerId ? (
                            <View
                                style={ChatPageStyle.clientMessage}
                                key={message.id}
                            >
                                <Text
                                    style={ChatPageStyle.messageClientMessage}
                                >
                                    {message.content}
                                </Text>
                            </View>
                        ) : (
                            <View style={ChatPageStyle.ownerMessage}>
                                <Text style={ChatPageStyle.messageOwnerMessage}>
                                    {message.content}
                                </Text>
                            </View>
                        )
                    })}
                <View ref={messagesEndRef} />
            </ScrollView>
            <View style={ChatPageStyle.inputContainer}>
                <TextInput
                    value={currentMessage}
                    style={ChatPageStyle.input}
                    onChangeText={setCurrentMessage}
                    placeholder="Ecrire un message"
                />
                <TouchableOpacity
                    onPress={() => {
                        handleSubmit()
                    }}
                >
                    <Image source={send} style={ChatPageStyle.sendIcon} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
