import { StyleSheet } from 'react-native'

export const HomeStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '10%',
        borderRadius: 9,
    },
    titleContainer: {
        marginTop: '10%',
        marginHorizontal: '5%',
    },
    title: {
        color: '#6A6F7D',
        fontSize: 24,
        fontFamily: 'baloo',
        marginBottom: '5%',
    },
    titleCategory: {
        color: '#6A6F7D',
        fontSize: 24,
        fontFamily: 'baloo',
        marginBottom: '5%',
        marginLeft: '10%',
    },

    AdsContainerTitle: {
        fontSize: 18,
        marginLeft: '5%',
        marginVertical: '2%',
        fontFamily: 'Baloo',
    },

    categoryButton: {
        backgroundColor: '#6A6F7D',
        marginVertical: 20,
        borderRadius: 9,
        height: 25,
        width: '60%',
    },
    categoryButtonText: {
        color: 'white',
        paddingLeft: 10,
        textAlign: 'center',
        paddingTop: 3,
    },
    categories: {
        marginTop: 40,
    },
    scrollAds: {
        height: '72%',
    },
}))
