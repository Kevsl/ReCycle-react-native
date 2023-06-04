/* eslint-disable semi */
import axios from 'axios'
import { API_URL } from '@env'
import { config } from '../Utils/Consts'
export async function getCategories() {
    let url = `${API_URL}/listings`

    return axios.get(url, config).then((res2) => {
        return res2
    })
}
// kevin@gmail.com
