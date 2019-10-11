import axios from 'axios'

const instance = axios.create({
  // baseURL: process.env.API_URL
  baseURL: 'http://localhost:3300/api/'
})

export default instance
