import { NavBar } from '../Components/NavBar'
import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import goBackArrow from '../Assets/goBackArrow.png'
import filters from '../Assets/filters.png'
import shoes from '../Assets/shoes.jpeg'

import { BalancePageStyle } from '../Styles/BalancePage'
import { getBalance } from '../Services/Balance.service'

export const BalancePage = ({ navigation }) => {
    const [balance, setBalance] = useState('')

    useEffect(() => {
        getBalance().then((res) => {
            if (res) {
                setBalance(res)
            }
        })
    }, [])
    return (
        <View style={BalancePageStyle.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={goBackArrow}
                    style={BalancePageStyle.goBackArrow}
                    accessibilityLabel="Retourner sur la page précèdente"
                />
            </TouchableOpacity>
            <View style={BalancePageStyle.titleContainer}></View>
            <View style={BalancePageStyle.balanceContainer}>
                {balance ? (
                    balance.map((item) => {
                        return (
                            <Text style={BalancePageStyle.title}>
                                {balance.amount} Palmiers{' '}
                            </Text>
                        )
                    })
                ) : (
                    <ActivityIndicator size="large" color="#14213D" />
                )}
            </View>
            <View style={BalancePageStyle.navBar}>
                <NavBar navigation={navigation} />
            </View>
        </View>
    )
}
