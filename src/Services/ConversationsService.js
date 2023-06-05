import axios from 'axios'
import { config } from '../Utils/Consts'
import { API_URL } from '@env'

export async function getMyConversations(id, token) {
    let url = `${API_URL}conversation/byUser/${id}`

    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }
    return axios
        .get(url, config2)

        .then((res) => {
            return res.data
        })
}

export async function getSpecificConversation(id, token) {
    let url = `${API_URL}conversation/${id}`
    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }

    return axios.get(url, config2).then((res) => {
        return res.data
    })
}

export async function sendFirstMessage(id, firstMessage, token) {
    let url = `${API_URL}conversation/new/${id}`

    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }

    return axios
        .post(url, { firstMessage: firstMessage }, config2)
        .then((res) => {
            return res.data
        })
}

export async function sendMessage(
    fkConversation,
    fkUserSender,
    fkUserRecipient,
    content,
    token
) {
    let url = `${API_URL}message/new`
    const config2 = {
        headers: { Authorization: `Bearer ${token}` },
    }

    return axios
        .post(
            url,
            {
                fkConversation: fkConversation,
                fkUserSender: fkUserSender,
                fkUserRecipient: fkUserRecipient,
                content: content,
            },
            config2
        )
        .then((res) => console.log(res))
}
