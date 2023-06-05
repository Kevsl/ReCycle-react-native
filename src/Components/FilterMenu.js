import { Text, Image, View, TouchableOpacity } from 'react-native'
import filters from '../Assets/filters.png'
import { FiltersMenuStyle } from '../Styles/Components/FiltersMenu'
export const FilterMenu = ({ navigation }) => {
    return (
        <View style={FiltersMenuStyle.secondMenu}>
            <View style={FiltersMenuStyle.secondMenuProductButtons}>
                <TouchableOpacity
                    onPress={console.log('En cours ')}
                    style={FiltersMenuStyle.offersButton}
                >
                    <Text style={FiltersMenuStyle.offersButtonText}>
                        Offres
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={console.log('En cours ')}
                    style={FiltersMenuStyle.ordersButton}
                >
                    <Text style={FiltersMenuStyle.ordersButtonText}>
                        Demandes
                    </Text>
                </TouchableOpacity>
            </View>
            <TouchableOpacity
                onPress={console.log('En cours ')}
                style={FiltersMenuStyle.filtersButton}
            >
                <Image
                    source={filters}
                    style={FiltersMenuStyle.filterIcon}
                    accessibilityLabel="Retourner sur la page précèdente"
                />
                <Text style={FiltersMenuStyle.filtersButtonText}>Filtres</Text>
                <View style={FiltersMenuStyle.notificationFilter}>
                    <Text style={FiltersMenuStyle.notificationText}>2</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
