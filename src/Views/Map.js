import {Image, Text, TouchableOpacity, View} from 'react-native'
import {MapStyle} from "../Styles/Map";
import {GoBackArrow} from "../Components/GoBackArrow";
import {ValidateBtn} from "../Components/ValidationBtn";
import {HeaderTitleStyle} from "../Styles/HeaderTitle";
import {HeaderTitle} from "../Components/HeaderTitle";

export const Map = ({navigation}) => {
    return (
        <View style={MapStyle.container}>
            <GoBackArrow navigation={navigation}/>
            <View style={MapStyle.titleContainer}>
                <HeaderTitle title={"Géolocalisation"}/>
                <Text style={MapStyle.subTitle}>
                    [adresse actuelle]
                </Text>
                <Text style={MapStyle.subTitle}>
                    Ce n'est pas le bon lieu ? Activez votre géolocalisation
                </Text>
            </View>

            <ValidateBtn navigation={navigation} navigationTarget={'create-ad'} btnText={"Valider"}/>
        </View>
    )
}
