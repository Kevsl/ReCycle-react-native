import { StyleSheet } from 'react-native'

export const CategoriesStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '20%',
    },
    scrollView: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingHorizontal: '5%',
        justifyContent: 'space-between',
        height: '80%',
    },
    adsContainer: {
        width: '40%',
        height: 200,
        borderRadius: 16,
        marginHorizontal: '5%',
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
        maxHeight: 150,
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
        height: 20,
        textAlign: 'center',
        marginTop: -20,
        borderRadius: 16,
    },

    adCity: {
        fontSize: 12,
        textAlign: 'left',
        paddingLeft: '5%',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    adInformations: {
        backgroundColor: '#EAF2FF',
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
    },
    heart: {
        marginLeft: 'auto',
        marginRight: '5%',
    },
}))
