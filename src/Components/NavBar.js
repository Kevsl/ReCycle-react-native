import { Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native'
import { NavBarStyle } from '../Styles/NavBarStyle'
export const NavBar = (props) => {
  const navigation = props.navigation
  return (
    <View style={NavBarStyle.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('home')
        }}
      >
        <Text>Accueil</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('chat')
        }}
      >
        <Text>Messagerie</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('search')
        }}
      >
        <Text>Rechercher</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('create-ad')
        }}
      >
        <Text>Créer une annonce</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('profile')
        }}
      >
        <Text>Profile</Text>
      </TouchableOpacity>
    </View>
  )
}
