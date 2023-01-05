import { StyleSheet } from 'react-native'
import { color } from 'react-native-reanimated'

export const MapStyle = (StyleSheet.createstyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: '20%',
  },
  goBackArrow: { position: 'absolute', left: '5%', top: '10%' },
  titleContainer: {
    marginTop: '10%',
    marginHorizontal: '5%',
  },
  title: {
    color: '#6A6F7D',
    fontSize: 30,
    fontFamily: 'baloo',
  },
  subTitle: {
    color: '#6A6F7D',
    fontSize: 16,
    marginVertical: 5,
    fontFamily: 'baloo',
    fontStyle: 'normal',
  },
}))
