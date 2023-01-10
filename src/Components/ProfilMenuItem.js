import rightArrow from '../Assets/rightArrow.png'
import { Text, Image, TouchableOpacity } from 'react-native'
import { ProfileMenuStyle } from '../Styles/Components/ProfileMenu'
import { useEffect } from 'react'
import { clearAll, getData } from '../Utils/localStorage'
export const ProfilMenuItem = ({ navigation, title, url, logout }) => {
    useEffect(() => {
        if (logout === true) {
            clearAll()
            navigation.navigate('login')
        }
    }, [])

    return (
        <TouchableOpacity
            style={ProfileMenuStyle.mainMenunuItem}
            onPress={() => {
                navigation.navigate(url)
            }}
        >
            <Text style={ProfileMenuStyle.menuText}>{title}</Text>
            <Image source={rightArrow} style={ProfileMenuStyle.rightArrow} />
        </TouchableOpacity>
    )
}
