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
import greenSearch from '../Assets/greenSearch.png'
import { MessengerPageStyle } from '../Styles/Messenger'
import { TextInput } from 'react-native-gesture-handler'
import { getConversations } from '../Services/ConversationsService'
import { GoBackArrow } from '../Components/GoBackArrow'
export const Messenger = ({ navigation }) => {
    const [Datas, setDatas] = useState([])

    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        getConversations().then((res) => {
            setDatas(res)
        })
    }, [])

    return (
        <View style={MessengerPageStyle.container}>
            <GoBackArrow />
            <View style={MessengerPageStyle.titleContainer}>
                <Text style={MessengerPageStyle.title}>Messagerie </Text>
            </View>
            <View style={MessengerPageStyle.inputContainer}>
                <Image
                    source={greenSearch}
                    style={MessengerPageStyle.searchIcon}
                />
                <TextInput
                    value={searchQuery}
                    style={MessengerPageStyle.input}
                    onChangeText={setSearchQuery}
                    placeholder="Rechercher"
                />
            </View>
            <ScrollView style={MessengerPageStyle.scrollView}>
                {Datas.map((data) => (
                    <TouchableOpacity
                        style={MessengerPageStyle.messageContainer}
                        key={data.id}
                        onPress={() =>
                            navigation.navigate('chat', {
                                userId: data.id,
                                avatar: data.avatar,
                                name: data.contact,
                            })
                        }
                    >
                        <Image
                            source={{ uri: data.avatar }}
                            style={MessengerPageStyle.userPic}
                        />
                        <View style={MessengerPageStyle.messageDatas}>
                            <Text style={MessengerPageStyle.messageUserName}>
                                {data.contact}
                            </Text>
                            <Text style={MessengerPageStyle.messageContent}>
                                {data.lastMessage}
                            </Text>
                        </View>
                        <View style={MessengerPageStyle.notificationContainer}>
                            {data.unread ? (
                                <View style={MessengerPageStyle.notification}>
                                    <Text
                                        style={
                                            MessengerPageStyle.notificationText
                                        }
                                    >
                                        {data.unread}
                                    </Text>
                                </View>
                            ) : null}
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
            <NavBar navigation={navigation} />
        </View>
    )
}
