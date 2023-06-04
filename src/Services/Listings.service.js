import axios from 'axios'
import { API_URL } from '@env'
import { config } from '../Utils/Consts'

export async function getListings() {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    let url = `${API_URL}listing/images`

    return axios.get(url, axiosConfig).then((res) => {
        return res.data
    })
}

export async function getListing(id) {
    let url = `${API_URL}listing/view/${id}`

    return axios.get(url, config).then((res) => {
        return res.data
    })
}
