import { StyleSheet } from 'react-native'

export const SearchMenuStyle = (StyleSheet.createstyle = StyleSheet.create({
    cityInput: {
        width: '80%',
        height: 40,
        marginTop: 20,
        marginLeft: '10%',
        paddingLeft: 15,
        paddingBottom: 10,
        borderRadius: 9,
        borderColor: '#6A6F7D',
        borderWidth: 1,
        fontSize: 15,
    },
    scrollView: {
        height: '80%',
    },
    sumbitButton: {
        width: '40%',
        backgroundColor: '#91C788',
        borderRadius: 9,
        height: 30,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: '30%',
        marginVertical: 10,
    },
    sumbit: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    roundView: {
        display: 'flex',
        justifyContent: 'space-between',
        marginVertical: 20,
        height: 40,
        width: '50%',
        marginLeft: '25%',
    },
    round: {
        fontSize: 16,
        borderColor: '#6A6F7D',
        borderWidth: 1,
        borderRadius: 9,
        paddingLeft: 10,
    },
    label: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
    citiesList: {
        width: '80%',
        marginLeft: '10%',
        marginTop: 15,
        border: '#91C788',
        borderWidth: 1,
        borderRadius: 9,
        paddingVertical: 5,
    },
    city: {
        height: 35,
        paddingLeft: 10,
    },
}))
