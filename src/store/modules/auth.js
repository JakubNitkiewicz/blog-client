import axiosApi from '../../axios-api'
import Cookies from 'js-cookie'
import router from '../../router'

const state = {}

const mutations = {
  storeUser(state, userData) {
    Cookies.set('token', userData.token, { expires: 30 })
    Cookies.set('refreshToken', userData.refreshToken, { expires: 30 })
    Cookies.set('userId', userData.id, { expires: 30 })
    Cookies.set('username', userData.username, { expires: 30 })
  },
  removeUser() {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    Cookies.remove('userId')
    Cookies.remove('username')
  }
}

const actions = {
  login({ commit }, payload) {
    const url = 'auth/signin'
    axiosApi
      .post(url, {
        email: payload.email,
        password: payload.password
      })
      .then((response) => {
        commit('storeUser', {
          token: response.data.token,
          refreshToken: response.data.refreshToken,
          id: response.data.id,
          username: response.data.username
        })
        router.push('/')
        router.go()
      })
      .catch((err) => console.log(err))
  },
  logout({ commit }) {
    commit('removeUser')
    router.push('/')
    router.go()
  },
  signup({ commit }, payload) {
    const url = 'auth/signup'
    axiosApi
      .post(url, {
        username: payload.username,
        email: payload.email,
        password: payload.password
      })
      .then((response) => {
        commit('storeUser', {
          token: response.data.token,
          refreshToken: response.data.refreshToken,
          id: response.data.id,
          username: response.data.username
        })
        router.push('/')
        router.go()
      })
  },
  checkAuthentication({ commit }) {
    const url = 'auth/refresh'
    axiosApi
      .post(url)
      .then((response) => {
        commit('storeUser', {
          token: response.data.token,
          refreshToken: response.data.refreshToken,
          id: response.data.id,
          username: response.data.username
        })
      })
      .catch((error) => {
        commit('removeUser')
      })
  }
}

const getters = {
  username() {
    return Cookies.get('username')
  },
  userId() {
    return Cookies.get('userId')
  },
  isAuthenticated() {
    return Cookies.get('token') != null
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
