import axios from 'axios'
import { apiUrl } from '../../url'
import { storeData } from '../Utils/localStorage'

export async function loginFunction(email, password) {
    let url = `${apiUrl}login`
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    }

    return axios
        .get(url, axiosConfig, { email: email, password: password })
        .then((res) => {
            storeData('token', res.data.token)
            storeData('avatar', res.data.avatar)
            storeData('username', res.data.username)
            return res
        })
}

export async function registerFunction(email, password, firstName) {
    let axiosConfig = {
        headers: {
            'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
    }
    let url = `${API_URL}auth/signup`

    return await axios
        .post(
            url,
            { email: email, password: password, firstName: firstName },
            axiosConfig
        )
        .then((res) => res)
}
