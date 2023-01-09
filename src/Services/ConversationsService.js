import axios from 'axios'
import { apiUrl } from '../../url'

export async function getConversations() {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    let url = `${apiUrl}userHasConversations`

    return axios.get(url, axiosConfig).then((res) => {
        return res.data
    })
}
export async function getSpecificConversation() {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    let url = `${apiUrl}conversation/123`

    return axios.get(url, axiosConfig).then((res) => {
        return res.data
    })
}

//conversation/123
