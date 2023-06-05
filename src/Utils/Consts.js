import { useToken } from './useToken'

export const useHeaders = () => {
    const token = useToken()

    const headers = {
        Authorization: `Bearer ${token}`,
    }

    return headers
}
