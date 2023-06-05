import { StyleSheet } from 'react-native'

export const SearchStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '20%',
        fontFamily: 'Baloo',
    },
    goBackArrow: { position: 'absolute', left: '5%', top: '10%' },
    titleContainer: {
        marginTop: '10%',
        marginHorizontal: '5%',
        fontFamily: 'Baloo',
    },
    title: {
        color: '#6A6F7D',
        fontSize: 30,
        fontFamily: 'baloo',
    },
    searchButton: {
        backgroundColor: '#495566',
        width: 180,
        height: 30,
        borderRadius: 6,
        marginLeft: 20,
        marginBottom: 10,
        paddingTop: 5,
    },
    searchText: {
        color: 'white',
        textAlign: 'center',
    },
    listingContainer: {
        height: '85%',
    },
    noAdText: {
        width: '50%',
        marginLeft: '25%',
        marginTop: 300,
        textAlign: 'center',
    },
    errorMessage: {
        color: '#DA2D2D',
        textAlign: 'center',
    },
}))
