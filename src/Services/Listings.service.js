import axios from 'axios'
import { API_URL } from '@env'
import { useHeaders } from '../Utils/Consts'
import { getData } from '../Utils/localStorage'
import { useSelector } from 'react-redux'

export async function getListings() {
    let url = `${API_URL}listing/images`

    return axios.get(url).then((res) => {
        console.log('chargé')

        return res.data
    })
}

export async function getListing(id) {
    let url = `${API_URL}listing/view/${id}`

    return axios.get(url).then((res) => {
        return res.data
    })
}

export async function getMyListings(id, token) {
    let url = `${API_URL}listing/me/${id}`
    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios.get(url, config2).then((res) => {
        console.log(res)
        return res.data
    })
}
