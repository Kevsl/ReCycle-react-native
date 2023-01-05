import {Text, TouchableOpacity, View} from 'react-native'
import {CreateAdStyle} from "../Styles/CreateAd";
import {GoBackArrow} from "../Components/GoBackArrow";
import {HeaderTitle} from "../Components/HeaderTitle";

export const CreateAd = ({navigation}) => {
    return (
        <View style={CreateAdStyle.container}>
            <GoBackArrow navigation={navigation}/>
            <View style={CreateAdStyle.titleContainer}>
                <HeaderTitle title={"Créer une annonce"}/>
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
