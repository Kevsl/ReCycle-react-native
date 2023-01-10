import AsyncStorage from '@react-native-async-storage/async-storage'

export const storeData = async (key, value) => {
    try {
        await AsyncStorage.setItem(key, value)
    } catch (e) {}
}

export const getData = async (key) => {
    try {
        const value = await AsyncStorage.getItem(key)
        return value
    } catch (e) {
        // error reading value
    }
}

export const removeValue = async (key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        // remove error
    }

    console.log('Done.')
}

export const clearAll = async () => {
    try {
        await AsyncStorage.clear()
    } catch (e) {
        // clear error
    }
}
