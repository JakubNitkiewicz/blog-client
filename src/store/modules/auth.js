import axiosApi from '../../axios-api'
import Cookies from 'js-cookie'

const state = {}

const mutations = {
  authUser(state, userData) {
    console.log(userData)
    Cookies.set('token', userData.token, { expires: 30 })
    Cookies.set('refreshToken', userData.refreshToken, { expires: 30 })
    Cookies.set('userId', userData.id, { expires: 30 })
  },
  removeUser(state) {
    Cookies.remove('token')
    Cookies.remove('refreshToken')
    Cookies.remove('userId')
  },
  storeUser(state, user) {
    state.user = user
  }
}

import router from 'vue-router'

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
        commit('authUser', {
          token: response.data.token,
          refreshToken: response.data.refreshToken,
          id: response.data.id
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
  signup({ commit }, authData) {
    const url = 'auth/signup'
  }
}

const getters = {
  username(state) {
    return 'test hardcoded'
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
