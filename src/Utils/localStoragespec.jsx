// import AsyncStorage from '@react-native-async-storage/async-storage'

// describe(
//     'storeData',
//     (async = () => {
//         it('should store data successfully', async () => {
//              storeData('key', 'value')
//             const storedValue =  AsyncStorage.getItem('key')
//             expect(storedValue).toEqual('value')
//         })

//         it('should handle exceptions', async () => {
//             AsyncStorage.setItem = jest.fn(() => {
//                 throw new Error()
//             })
//             await expect(storeData('key', 'value')).resolves.not.toThrow()
//         })
//     })
// )

// describe('getData', () => {
//     it('should return stored data', async () => {
//         await AsyncStorage.setItem('key', 'value')
//         const value = await getData('key')
//         expect(value).toEqual('value')
//     })

//     it('should handle exceptions', async () => {
//         AsyncStorage.getItem = jest.fn(() => {
//             throw new Error()
//         })
//         await expect(getData('key')).resolves.not.toThrow()
//     })
// })

// describe('removeValue', () => {
//     it('should remove value', async () => {
//         await AsyncStorage.setItem('key', 'value')
//         await removeValue('key')
//         const value = await AsyncStorage.getItem('key')
//         expect(value).toBeNull()
//     })

//     it('should handle exceptions', async () => {
//         AsyncStorage.removeItem = jest.fn(() => {
//             throw new Error()
//         })
//         await expect(removeValue('key')).resolves.not.toThrow()
//     })
// })

// describe('clearAll', () => {
//     it('should clear all stored data', async () => {
//         await AsyncStorage.setItem('key1', 'value1')
//         await AsyncStorage.setItem('key2', 'value2')
//         await clearAll()
//         const keys = await AsyncStorage.getAllKeys()
//         expect(keys).toEqual([])
//     })

//     it('should handle exceptions', async () => {
//         AsyncStorage.clear = jest.fn(() => {
//             throw new Error()
//         })
//         await expect(clearAll()).resolves.not.toThrow()
//     })
// })
