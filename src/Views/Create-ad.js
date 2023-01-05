import {Image, Text, TouchableOpacity, View} from 'react-native'
import {MapStyle} from "../Styles/Map";
import goBackArrow from "../Assets/goBackArrow.png";
import {GoBackArrow} from "../Components/GoBackArrow";

export const CreateAd = ({ navigation }) => {
  return (
    <View style={MapStyle.container}>
        <GoBackArrow navigation={navigation} />
        <View style={MapStyle.titleContainer}>
            <Text style={MapStyle.title}>Créer une annonce</Text>
        </View>
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('map')
                }}
            >
                <Text>Afficher la carte</Text>
            </TouchableOpacity>
        </View>
    </View>
  )
}
