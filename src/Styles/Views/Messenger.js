import { StyleSheet } from 'react-native'

export const MessengerPageStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '10%',
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

    scrollView: {
        width: '90%',
        marginHorizontal: '5%',
        marginVertical: '5%',
    },
    messageContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginVertical: '5%',
        alignItems: 'center',
    },
    userPic: {
        width: 50,
        height: 50,
        borderRadius: 999,
        marginRight: '3%',
    },
    messageDatas: {
        width: '70%',
    },
    notification: {
        backgroundColor: '#91C788',
        width: 30,
        height: 30,
        borderRadius: 999,
    },
    notificationText: {
        color: 'white',
        textAlign: 'center',
        marginTop: 7,
    },
    messageUserName: {
        color: '#1F2024',
        fontSize: 12,
        fontFamily: 'Baloo',
    },
    messageContent: {
        color: '#6A6F7D',
        fontSize: 12,
        fontFamily: 'Baloo',
    },
    notificationContainer: {
        width: '10%',
    },
}))
