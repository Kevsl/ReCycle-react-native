import { StyleSheet } from 'react-native'

export const CategoryMenuStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    styleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 20,
        flexWrap: 'wrap',
    },
    styleButton: {
        width: '35%',
        marginHorizontal: 5,
        marginVertical: 7,
    },
    styleText: {
        color: '#91C788',
        borderColor: '#91C788',
        borderWidth: 1,
        borderRadius: 9,
        paddingHorizontal: 2,
        paddingVertical: 2,
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        height: 25,
    },
    styleTextClicked: {
        color: 'white',
        backgroundColor: '#91C788',
        borderColor: '#91C788',
        borderWidth: 1,
        borderRadius: 9,
        paddingHorizontal: 2,
        paddingVertical: 2,
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        height: 25,
    },

    label: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 16,
    },
}))
