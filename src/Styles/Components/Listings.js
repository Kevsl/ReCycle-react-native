import { StyleSheet } from 'react-native'

export const ListingsStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '20%',
    },
    adsContainer: {
        width: '40%',
        marginHorizontal: '5%',
        height: 200,
        marginVertical: '2%',
        borderRadius: 16,
    },
    AdScrollContainer: { borderRadius: 16 },
    adImage: {
        flex: 1,
        borderTopEndRadius: 16,
        borderTopStartRadius: 16,
        borderRadius: 16,
    },
    ad: {
        flex: 1,
        width: '100%',
        maxHeight: 200,
        borderRadius: 16,
    },
    flex: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    adText: {
        backgroundColor: '#EAF2FF',
        fontSize: 14,
        height: '35%',
        textAlign: 'center',
        marginVertical: '5%',
    },
    adCity: {
        fontSize: 12,
        height: '30%',
        textAlign: 'left',
        paddingLeft: '5%',
    },
    adInformations: {
        backgroundColor: '#EAF2FF',
        height: '35%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        paddingBottom: 10,
    },
    heart: {
        marginLeft: 'auto',
        marginRight: '5%',
    },
}))
