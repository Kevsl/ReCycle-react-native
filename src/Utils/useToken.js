import { getData } from './localStorage'
import { useState, useEffect } from 'react'

export const useToken = () => {
    const [token, setToken] = useState()

    useEffect(() => {
        getData.then((res) => {
            setToken(res)
        })
    }, [])

    return token
}
