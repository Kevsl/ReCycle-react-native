import axios from 'axios'
const qs = require('qs')
import { REACT_APP_API_URL } from '@env'

export async function loginFunction(email, password) {
  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  let url = `${REACT_APP_API_URL}auth/signin`

  return await axios
    .post(url, qs.stringify({ email: email, password: password }), axiosConfig)
    .then((res) => res)
}

export async function registerFunction(email, password, firstName) {
  let axiosConfig = {
    headers: {
      'content-type': 'application/x-www-form-urlencoded;charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    },
  }
  let url = `${REACT_APP_API_URL}auth/signup`

  return await axios
    .post(
      url,
      qs.stringify({ email: email, password: password, firstName: firstName }),
      axiosConfig
    )
    .then((res) => res)
}
