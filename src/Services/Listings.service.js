import axios from 'axios'
import { API_URL } from '@env'

export async function getListings() {
    let url = 'http://0.0.0.0:3000/listings'

    return axios.get(url).then((res) => {
        return res.data
    })
}
