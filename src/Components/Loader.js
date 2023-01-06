import { LoaderStyle } from '../Styles/LoaderStyle'
import { View, ActivityIndicator } from 'react-native'

export const Loader = ({ color }) => {
    return (
        <View style={LoaderStyle.container}>
            <ActivityIndicator size="large" color={color} />
        </View>
    )
}
