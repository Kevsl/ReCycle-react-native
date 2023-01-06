import axios from 'axios'
import { apiUrl } from '../../url'
export async function getListings() {
    let axiosConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    }
    let url = `${apiUrl}listings`

    return axios.get(url, axiosConfig).then((res) => {
        console.log(url)
        console.log(res)
        return res.data
    })
}
