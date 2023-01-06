import { StyleSheet } from 'react-native'

export const BalancePageStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '20%',
    },
    goBackArrow: { position: 'absolute', left: '5%', top: '10%' },
    titleContainer: {
        marginTop: '10%',
        marginHorizontal: '5%',
    },
    title: {
        color: '#6A6F7D',
        fontSize: 30,
        fontFamily: 'baloo',
    },
    navBar: {
        position: 'absolute',
        bottom: 0,
    },

    balanceContainer: {
        width: '90%',
        marginHorizontal: '5%',
        height: '20%',
        marginVertical: '10%',
        backgroundColor: '#91C788',
        borderRadius: 25,
    },
}))
