import { StyleSheet } from 'react-native'

export const CategoryMenuStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    styleContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginVertical: 20,
        marginLeft: '5%',
        flexWrap: 'wrap',
    },
    styleButton: {
        marginHorizontal: 5,
        marginVertical: 7,
    },
    styleText: {
        color: '#91C788',
        borderColor: '#91C788',
        borderWidth: 1,
        borderRadius: 9,
        paddingTop: 4,
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        height: 25,
        paddingHorizontal: 20,
    },
    styleTextClicked: {
        color: 'white',
        backgroundColor: '#91C788',
        borderColor: '#91C788',
        borderWidth: 1,
        borderRadius: 9,
        paddingVertical: 2,
        width: '100%',
        textAlign: 'center',
        fontSize: 12,
        height: 25,
        paddingHorizontal: 20,
    },

    label: {
        paddingLeft: '10%',
        fontWeight: 'bold',
        fontSize: 16,
    },
}))
