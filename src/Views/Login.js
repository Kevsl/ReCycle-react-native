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
import { loginFunction } from '../Services/authService'
import { LoginStyle } from '../Styles/Login'
import goBackArrow from '../Assets/goBackArrow.png'
import redCross from '../Assets/redCross.png'
import greenCheck from '../Assets/greenCheck.png'

export const Login = ({ navigation }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [emailOk, setEmailOk] = useState(false)
  const [passOK, setPassOk] = useState(false)

  useEffect(() => {}, [])

  async function handleLogin() {
    // return checkEmail(email) === true && checkPassword(password) === true
    //   ? (setIsLoading(true),
    //     loginFunction(email, password).then((res) => {
    //       if (res.status === 200) {
    //         dispatch(setAccessToken(res.data.access_token))
    //         dispatch(setUserName(res.data.firstName))
    //         dispatch(setId(res.data.userId))
    //         setIsLoading(false)
    //         setData('access_token', res.data.access_token)
    //         setData('utilisateur_id', res.data.userId)
    //         setData('first_name', res.data.firstName)
    //         navigation.navigate('Home')
    //       }
    //     }))
    //   : null
  }

  function handleEmail(value) {
    checkEmail(value) === true ? setEmailOk(true) : setEmailOk(false)
  }
  function handlePass(value) {
    checkPassword(value) === true ? setPassOk(true) : setPassOk(false)
  }

  return (
    <View style={LoginStyle.container}>
      <TouchableOpacity onPress={console.log('Une bonne chose de faite ! ')}>
        <Image
          source={goBackArrow}
          style={LoginStyle.goBackArrow}
          accessibilityLabel="Retourner sur la page précèdente"
        />
      </TouchableOpacity>
      <View style={LoginStyle.titleContainer}>
        <Text style={LoginStyle.title}>Bonjour</Text>
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
            onChangeText={(email) => {
              handleEmail(email)
              setEmail(email)
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
            Le mot de passe doit avoir 1 majuscule,1minuscule,1 caractère
            spécial, 8 caractères minimum
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
            // secureTextEntry={true}
            onChangeText={(password) => {
              handlePass(password)
              setPassword(password)
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
        <Text style={LoginStyle.forgot_button}>Mot de passe oublié?</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={LoginStyle.loginBtn}
        onPress={() => handleLogin()}
      >
        <Text style={LoginStyle.loginText}>Connexion</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Register')}
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
    </View>
  )
}
