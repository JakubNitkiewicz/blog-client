import axios from 'axios'
import Cookies from 'js-cookie'
import store from './store/store'
import { router } from './main'
require('dotenv').config()

const baseURL = 'http://localhost:3300/api/'
// const baseURL = process.env.API_URL
// TODO - FIX IT, it has to be from .env file

const instance = axios.create({
  baseURL
})

// append current token to every request
instance.interceptors.request.use(
  (request) => {
    const token = Cookies.get('token')
    if (token) {
      request.headers['auth-token'] = token
    }
    return request
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    const originalRequest = error.config
    if (error.response.status !== 401) {
      return error
    }

    // Redirect to /logout if refresh didnt work
    if (error.config.url == `${baseURL}auth/refresh`) {
      store.dispatch('logout')
    }

    // Try to get new token
    const refreshToken = Cookies.get('refreshToken')
    if (refreshToken) {
      const url = 'auth/refresh'
      return instance
        .post(url, {
          refreshToken
        })
        .then((response) => {
          store.commit('storeUser', response.data)
        
          originalRequest.headers['auth-token'] = response.data.token
          return axios(originalRequest)
        })
        .catch((err) => console.log(err))
    }
  }
)

export default instance
