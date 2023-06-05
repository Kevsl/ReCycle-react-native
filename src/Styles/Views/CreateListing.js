import { StyleSheet } from 'react-native'

export const CreateListingStyle = (StyleSheet.createstyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingTop: '20%',
    },
    titleInput: {
        borderBottomColor: '#495566',
        borderBottomWidth: 1,
        marginVertical: 20,
        width: '80%',
        marginLeft: '10%',
        fontSize: 16,
    },
    descriptionInput: {
        borderBottomColor: '#495566',
        borderBottomWidth: 1,
        marginBottom: 30,
        width: '80%',
        marginLeft: '10%',
        fontSize: 16,
    },
    title: {
        marginVertical: 20,
        width: '80%',
        marginLeft: '10%',
        fontSize: 20,
    },
    errorMessage: {
        color: '#DA2D2D',
        textAlign: 'center',
    },
    view: {
        height: '75%',
    },
    icon: {
        width: 30,
        height: 30,
    },
    iconView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        width: '50%',
        marginLeft: '10%',
        marginVertical: 30,
    },
    imagesView: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 0,
        backgroundColor: '#d3dce6',
        paddingVertical: 10,
        paddingHorizontal: 5,
        width: '80%',
        marginLeft: '10%',
        borderRadius: 9,
    },
    imageButton: {
        backgroundColor: '#d3dce6',
        width: 50,
        height: 50,
        marginHorizontal: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 9,
    },
    imagePreview: {
        width: 80,
        height: 80,
        marginHorizontal: 10,
        borderRadius: 9,
    },
}))
