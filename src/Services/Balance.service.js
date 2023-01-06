import axios from 'axios'
import { API_URL } from '@env'
import { getData } from '../Utils/localStorage'
import { apiUrl } from '../../url'

export async function getBalance() {
    let url = `${apiUrl}/balance`

    return axios.get(url).then((res) => {
        return res.data
    })
}
// kevin@gmail.com
