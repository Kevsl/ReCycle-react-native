import { StyleSheet } from 'react-native'

export const BalanceStyle = (StyleSheet.createstyle = StyleSheet.create({
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
        color: '#fff',
        fontSize: 20,
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
}))
