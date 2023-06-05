import React, { useState, useEffect } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import { BalanceStyle } from '../Styles/Components/Balance'
import { getBalance } from '../Services/Balance.service'

export const Balance = () => {
    const [balance, setBalance] = useState('')

    useEffect(() => {
        getBalance().then((res) => {
            if (res) {
                setBalance(res)
            }
        })
    }, [])
    return (
        <View style={BalanceStyle.container}>
            <View style={BalanceStyle.balanceContainer}>
                {balance ? (
                    <Text style={BalanceStyle.title}>
                        {balance.amount} Palmiers{' '}
                    </Text>
                ) : (
                    <ActivityIndicator size="large" color="#14213D" />
                )}
            </View>
        </View>
    )
}
