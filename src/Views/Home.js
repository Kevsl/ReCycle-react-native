import { Text, View } from 'react-native'
import { NavBar } from '../Components/NavBar'
export const Home = ({ navigation }) => {
  return (
    <View>
      <Text>Home</Text>
      <NavBar navigation={navigation} />
    </View>
  )
}
