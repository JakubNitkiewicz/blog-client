import axiosApi from '../../axios-api'
import Cookies from 'js-cookie'

const state = {}

const mutations = {
  storeUser(state, userData) {
    console.log(userData)
    Cookies.set('token', userData.token, { expires: 30 })
    Cookies.set('refreshToken', userData.refreshToken, { expires: 30 })
    Cookies.set('userId', userData.id, { expires: 30 })
    Cookies.set('username', userData.username, { expires: 30 })
  },
  removeUser(state) {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    Cookies.remove('userId')
    Cookies.remove('username')
  }
}

const actions = {
  login({ commit, dispatch }, payload) {
    const url = 'auth/signin'
    axiosApi
      .post(url, {
        email: payload.email,
        password: payload.password
      })
      .then((response) => {
        console.log(response)
        commit('storeUser', {
          token: response.data.token,
          refreshToken: response.data.refreshToken,
          id: response.data.id,
          username: response.data.username
        })
        const router = payload.router
        router.push('/')
        router.go()
      })
      .catch((err) => console.log(err))
  },
  logout({ commit }, payload) {
    commit('removeUser')
    const router = payload.router
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
        const router = payload.router
        router.push('/')
        router.go()
      })
  }
}

const getters = {
  username(state) {
    return Cookies.get('username')
  },
  userId(state) {
    return Cookies.get('userId')
  },
  isAuthenticated(state) {
    console.log(Cookies.get('token'))
    return Cookies.get('token') != null
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
