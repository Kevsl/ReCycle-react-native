import { StyleSheet } from 'react-native'

export const ProfileStyle = (StyleSheet.createstyle = StyleSheet.create({
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
    navBar: {
        position: 'absolute',
        bottom: 0,
    },
    infoContainer: {
        width: '60%',
        marginHorizontal: '20%',
        marginVertical: '5%',
        fontFamily: 'Baloo',
    },
    profilePic: {
        width: '40%',
        marginHorizontal: '30%',
        height: 80,
        marginTop: '5%',
        borderRadius: 25,
    },
    imageEditIcon: {
        backgroundColor: '#006FFD',
        width: 30,
        height: 30,
        position: 'absolute',
        bottom: 0,
        right: '25%',
        borderRadius: 999,
    },
    penIcon: {
        width: '100%',
        height: 20,
        marginTop: 5,
        borderRadius: 999,
    },
    name: {
        textAlign: 'center',
        marginTop: 10,
        fontFamily: 'Baloo',
        fontSize: 16,
    },
    mail: {
        textAlign: 'center',
        marginTop: 5,
        fontFamily: 'Baloo',
        color: '#71727A',
        fontWeight: 'normal',
    },
    mainMenu: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: '5%',
    },
}))
