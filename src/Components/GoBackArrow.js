import { Text, Image, View, TouchableOpacity } from 'react-native'
import GoBackArrowImage from '../Assets/goBackArrow.png'
import { GoBackArrowStyle } from '../Styles/GoBackArrow'
export const GoBackArrow = ({ navigation }) => {
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
                source={GoBackArrowImage}
                style={GoBackArrowStyle.goBackArrow}
                accessibilityLabel="Retourner sur la page précèdente"
            />
        </TouchableOpacity>
    )
}
