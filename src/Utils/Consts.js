/* eslint-disable semi */
import { getData } from './localStorage'

export const config = {
    headers: { Authorization: `Bearer ${getData('token')}` },
}
