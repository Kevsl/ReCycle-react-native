/* eslint-disable semi */
import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native'
import { checkEmail, checkPassword } from '../Utils/regex'
import { LoginStyle } from '../Styles/Views/Login'
import redCross from '../Assets/redCross.png'
import greenCheck from '../Assets/greenCheck.png'
import { loginFunction } from '../Services/Auth.service'
import { GoBackArrow } from '../Components/GoBackArrow'
import jwt_decode from 'jwt-decode'
import { useDispatch } from 'react-redux'
import { setToken, setUserId } from '../redux/reducers/navigation'
import { getData } from '../Utils/localStorage'

export const Login = ({ navigation }) => {
    const [email, setEmail] = useState('kevin@gmail.com')
    const [password, setPassword] = useState('3!bKN;9H,o')
    const [isLoading, setIsLoading] = useState(false)
    const [emailOk, setEmailOk] = useState(false)
    const [passOK, setPassOk] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const dispatch = useDispatch()

    async function handleLogin() {
        return checkEmail(email) === true && checkPassword(password) === true
            ? (setIsLoading(true),
              loginFunction(email, password).then((res) => {
                  dispatch(setToken(res.data.token))
                  dispatch(setUserId(jwt_decode(res.data.token).id))

                  if (res.status === 200) {
                      setIsLoading(false)
                      navigation.navigate('home')
                  }
                  if (res.response.status) {
                      switch (res.response.status) {
                          case 200:
                              navigation.navigate('/connexion')
                              setIsLoading(false)
                              break
                          case 500:
                              setErrorMessage('Problème avec le serveur')
                              setIsLoading(false)

                              break
                          case 400:
                              setErrorMessage('Problème avec votre connexion')
                              setIsLoading(false)

                              break
                          case 401:
                              setErrorMessage('Problème avec vos identifiants')
                              setIsLoading(false)
                              break
                          default:
                              setIsLoading(false)
                      }
                  }
              }))
            : null
    }

    function handleEmail(value) {
        checkEmail(value) === true ? setEmailOk(true) : setEmailOk(false)
    }
    function handlePass(value) {
        checkPassword(value) === true ? setPassOk(true) : setPassOk(false)
    }

    useEffect(() => {
        loginFunction('kevin@gmail.com', '3!bKN;9H,o').then((res) => {
            console.log(res)
            dispatch(setToken(res.data.token))
            dispatch(setUserId(jwt_decode(res.data.token).id))
            navigation.navigate('home')
        })
    })

    return (
        <View style={LoginStyle.container}>
            <GoBackArrow />
            <View style={LoginStyle.titleContainer}>
                <Text style={LoginStyle.title}>Bonjour</Text>
                <Text>kevin@gmail.com</Text>
                <Text>3!bKN;9H,o</Text>

                <Text style={LoginStyle.subTitle}>
                    Connectez-vous pour accèder à l’application
                </Text>
            </View>

            <View style={LoginStyle.inputView}>
                <Text style={LoginStyle.label}>Email</Text>

                {email.length > 0 && emailOk === false && (
                    <Text style={LoginStyle.wrongInput}>
                        Le format de l’email est incorrect
                    </Text>
                )}

                <View style={LoginStyle.flexInput}>
                    <TextInput
                        style={
                            emailOk === true
                                ? LoginStyle.TextInputRight
                                : email.length > 0 && emailOk === false
                                ? LoginStyle.TextInputWrong
                                : LoginStyle.TextInput
                        }
                        placeholderTextColor="#000"
                        onChangeText={(e) => {
                            handleEmail(e)
                            setEmail(e)
                        }}
                    />
                    {emailOk === true ? (
                        <Image source={greenCheck} style={LoginStyle.icone} />
                    ) : email.length > 0 && emailOk === false ? (
                        <Image source={redCross} style={LoginStyle.icone} />
                    ) : null}
                </View>
            </View>

            <View style={LoginStyle.inputView}>
                <Text style={LoginStyle.label}>Mot de passe</Text>
                {password.length > 0 && passOK === false && (
                    <Text style={LoginStyle.wrongInput}>
                        Le mot de passe doit avoir 1 majuscule,1minuscule,1
                        caractère spécial, 8 caractères minimum
                    </Text>
                )}
                <View style={LoginStyle.flexInput}>
                    <TextInput
                        style={
                            passOK === true
                                ? LoginStyle.TextInputRight
                                : password.length > 0 && passOK === false
                                ? LoginStyle.TextInputWrong
                                : LoginStyle.TextInput
                        }
                        placeholderTextColor="#000"
                        onChangeText={(p) => {
                            handlePass(p)
                            setPassword(p)
                        }}
                        secureTextEntry={true}
                    />

                    {passOK === true ? (
                        <Image source={greenCheck} style={LoginStyle.icone} />
                    ) : password.length > 0 && passOK === false ? (
                        <Image source={redCross} style={LoginStyle.icone} />
                    ) : null}
                </View>
            </View>

            <TouchableOpacity>
                <Text style={LoginStyle.forgot_button}>
                    Mot de passe oublié?
                </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={LoginStyle.loginBtn}
                onPress={() => {
                    handleLogin()
                }}
            >
                <Text style={LoginStyle.loginText}>Connexion</Text>
            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('register')}
                style={LoginStyle.noAccount}
            >
                <Text style={LoginStyle.noAccountText}>Pas de compte ?</Text>
                <Text style={LoginStyle.noAccountSpan}> Inscription</Text>
            </TouchableOpacity>
            {isLoading ? (
                <ActivityIndicator
                    size="large"
                    color="#fff"
                    style={LoginStyle.loading}
                />
            ) : null}
            {errorMessage && (
                <Text style={LoginStyle.errorMessage}>{errorMessage}</Text>
            )}
        </View>
    )
}
