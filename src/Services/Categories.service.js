import axios from 'axios'
import { API_URL } from '@env'
import { getData } from '../Utils/localStorage'

export async function getCategories() {
    let url = `http://0.0.0.0/api/listings`

    getData('token').then(res)
    let config = {
        headers: {
            Authorization: 'Bearer ' + res,
        },
    }
    return axios.get(url, config).then((res2) => {
        return res2
    })
}
// kevin@gmail.com
