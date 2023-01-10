import { NavBar } from '../Components/NavBar'
import { Text, View } from 'react-native'
import { Listings } from '../Components/Listings'
import { MyAdsStyle } from '../Styles/Views/MyAds'
import { FilterMenu } from '../Components/FilterMenu'
import { GoBackArrow } from '../Components/GoBackArrow'

export const MyAds = ({ navigation }) => {
    return (
        <View style={MyAdsStyle.container}>
            <GoBackArrow navigation={navigation} />
            <Text style={MyAdsStyle.title}>Mes annonces</Text>
            <FilterMenu />
            <Text style={MyAdsStyle.AdsContainerTitle}>Annonces</Text>
            <Listings />
            <NavBar navigation={navigation} />
        </View>
    )
}
