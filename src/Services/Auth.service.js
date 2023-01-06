import axios from 'axios'
import { API_URL } from '@env'
import { storeData } from '../Utils/localStorage'

export async function loginFunction(email, password) {
    let url = 'http://0.0.0.0/api/login_check'

    return axios.post(url, { email: email, password: password }).then((res) => {
        storeData('token', res.data.token)
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
