import React, {useState, useEffect} from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import {checkEmail, checkPassword} from '../Utils/regex'
import {RegisterStyle} from '../Styles/Register'
import goBackArrow from '../Assets/goBackArrow.png'
import redCross from '../Assets/redCross.png'
import greenCheck from '../Assets/greenCheck.png'

export const Register = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirm, setConfirm] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [emailOk, setEmailOk] = useState(false)
    const [passOK, setPassOk] = useState(false)
    const [similarPassOk, setSimilarPassOk] = useState(false)

    useEffect(() => {
    }, [])

    function handleEmail(value) {
        checkEmail(value) === true ? setEmailOk(true) : setEmailOk(false)
    }

    function handlePass(value) {
        checkPassword(value) === true ? setPassOk(true) : setPassOk(false)
    }

    function handleSimilarPasswords(password1, password2) {
        if (password1 === password2) {
            setSimilarPassOk(true)
        } else if (password1 !== password2) {
            setSimilarPassOk(false)
        }
    }

    function handleRegister() {
        if (passOK && emailOk && similarPassOk) {
            navigation.navigate('home')
        } else {
            alert("Problème avec vos identifiants :" +
                "\nemailOk : " + emailOk +
                "\npassOK : " + passOK +
                "\nsimilarPassOk : " + similarPassOk)
        }
    }

    return (
        <View style={RegisterStyle.container}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    source={goBackArrow}
                    style={RegisterStyle.goBackArrow}
                    accessibilityLabel="Retourner sur la page précédente"
                />
            </TouchableOpacity>

            <View style={RegisterStyle.titleContainer}>
                <Text style={RegisterStyle.title}>Bonjour</Text>
                <Text style={RegisterStyle.subTitle}>
                    Création de compte
                </Text>
            </View>

            <View style={RegisterStyle.inputView}>
                <Text style={RegisterStyle.label}>Email</Text>

                {email.length > 0 && emailOk === false && (
                    <Text style={RegisterStyle.wrongInput}>
                        Le format de l’email est incorrect
                    </Text>
                )}

                <View style={RegisterStyle.flexInput}>
                    <TextInput
                        style={
                            emailOk === true
                                ? RegisterStyle.TextInputRight
                                : email.length > 0 && emailOk === false
                                    ? RegisterStyle.TextInputWrong
                                    : RegisterStyle.TextInput
                        }
                        placeholderTextColor="#000"
                        onChangeText={(email) => {
                            handleEmail(email)
                            setEmail(email)
                        }}
                    />
                    {emailOk === true ? (
                        <Image source={greenCheck} style={RegisterStyle.icone}/>
                    ) : email.length > 0 && emailOk === false ? (
                        <Image source={redCross} style={RegisterStyle.icone}/>
                    ) : null}
                </View>
            </View>

            <View style={RegisterStyle.inputView}>
                <Text style={RegisterStyle.label}>Mot de passe</Text>

                {password.length > 0 && passOK === false && (
                    <Text style={RegisterStyle.wrongInput}>
                        Le mot de passe doit contenir au moins 8 caractères, dont 1 minuscule, 1 majuscule, 1 chiffre et
                        un caractère spécial.
                    </Text>
                )}

                <View style={RegisterStyle.flexInput}>
                    <TextInput
                        style={
                            passOK === true
                                ? RegisterStyle.TextInputRight
                                : password.length > 0 && passOK === false
                                    ? RegisterStyle.TextInputWrong
                                    : RegisterStyle.TextInput
                        }
                        placeholderTextColor="#000"
                        onChangeText={(password) => {
                            handlePass(password)
                            setPassword(password)
                        }}
                        secureTextEntry={true}
                    />
                    {passOK === true ? (
                        <Image source={greenCheck} style={RegisterStyle.icone}/>
                    ) : password.length > 0 && passOK === false ? (
                        <Image source={redCross} style={RegisterStyle.icone}/>
                    ) : null}
                </View>

                <Text style={RegisterStyle.label}>Confirmer mot de passe</Text>

                {confirm.length > 0 && similarPassOk === false && (
                    <Text style={RegisterStyle.wrongInput}>
                        Mots de passes différents
                    </Text>
                )}

                <View style={RegisterStyle.flexInput}>
                    <TextInput
                        style={
                            passOK === true
                                ? RegisterStyle.TextInputRight
                                : password.length > 0 && passOK === false
                                    ? RegisterStyle.TextInputWrong
                                    : RegisterStyle.TextInput
                        }
                        placeholderTextColor="#000"
                        onChangeText={(confirm) => {
                            handleSimilarPasswords(password, confirm)
                            setConfirm(confirm)
                        }}
                        secureTextEntry={true}
                    />
                    {confirm.length > 0 && similarPassOk === true ? (
                        <Image source={greenCheck} style={RegisterStyle.icone}/>
                    ) : confirm.length > 0 && similarPassOk === false ? (
                        <Image source={redCross} style={RegisterStyle.icone}/>
                    ) : null}
                </View>
            </View>

            <TouchableOpacity
                style={RegisterStyle.loginBtn}
                onPress={() => {
                    handleRegister()
                }}
            >
                <Text style={RegisterStyle.loginText}>Inscription</Text>
            </TouchableOpacity>

            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#fff"
                    style={RegisterStyle.loading}
                />
            ) : null}
        </View>
    )
}
