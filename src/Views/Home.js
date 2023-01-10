import { NavBar } from '../Components/NavBar'
import { Text, View } from 'react-native'
import { HomeStyle } from '../Styles/Views/Home'
import { Listings } from '../Components/Listings'
import { FilterMenu } from '../Components/FilterMenu'
import { GoBackArrow } from '../Components/GoBackArrow'

export const Home = ({ navigation }) => {
    return (
        <View style={HomeStyle.container}>
            <GoBackArrow />
            <View style={HomeStyle.titleContainer}>
                <Text style={HomeStyle.title}>Mes annonces </Text>
            </View>
            <FilterMenu navigation={navigation} />
            <Text style={HomeStyle.AdsContainerTitle}>Annonces</Text>
            <Listings />
            <NavBar navigation={navigation} />
        </View>
    )
}
