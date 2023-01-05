import {Image, Text, TouchableOpacity, View} from 'react-native'
import {MapStyle} from "../Styles/Map";
import {GoBackArrow} from "../Components/GoBackArrow";
import {ValidateBtn} from "../Components/ValidationBtn";

export const Map = ({ navigation }) => {
  return (
      <View style={MapStyle.container}>
          <GoBackArrow navigation={navigation} />
          <View style={MapStyle.titleContainer}>
              <Text style={MapStyle.title}>Géolocalisation</Text>
              <Text style={MapStyle.subTitle}>
                  [adresse actuelle]
              </Text>
              <Text style={MapStyle.subTitle}>
                  Ce n'est pas le bon lieu ? Activez votre géolocalisation
              </Text>
          </View>

          <ValidateBtn navigation={navigation} btnText={"Valider"}/>
      </View>
  )
}
