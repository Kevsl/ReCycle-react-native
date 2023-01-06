import axios from 'axios'
import { API_URL } from '@env'
import { getData } from '../Utils/localStorage'

export async function getBalance() {
    let url = `http://0.0.0.0:3000/balance`

    return axios.get(url).then((res) => {
        return res.data
    })
}
// kevin@gmail.com
