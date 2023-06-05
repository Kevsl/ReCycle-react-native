import AsyncStorage from '@react-native-async-storage/async-storage'
import { useSelector } from 'react-redux'
import { getCurrentToken } from '../redux/reducers/navigation'

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e)
    }
}

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (e) {
        console.log(e)
    }
}

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // remove error
    }
}

export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }
}
