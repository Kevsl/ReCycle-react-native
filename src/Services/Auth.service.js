/* eslint-disable semi */
import axios from 'axios'
import { apiUrl } from '../../url'
import { storeData } from '../Utils/localStorage'
import { API_URL } from '@env'
import jwt_decode from 'jwt-decode'

export async function loginFunction(email, password) {
    let url = `${apiUrl}api/login_check`
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    return axios
        .post(url, { username: email, password: password }, axiosConfig)
        .then((res) => {
            storeData('token', res.data.token)
            let id = jwt_decode(res.data.token).id
            storeData('id', id.toString())
            return res
        })
}

export async function registerFunction(email, password, pseudo, avatar) {
    let url = `${API_URL}api/register`

    return await axios
        .post(url, {
            email: email,
            password: password,
            pseudo: pseudo,
            avatar: avatar,
        })
        .then((res) => res)
}
export async function getAllAvatars() {
    let url = `${API_URL}avatar`

    return axios.get(url).then((res) => {
        return res.data
    })
}
