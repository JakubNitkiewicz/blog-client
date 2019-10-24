import axiosApi from '../../axios-api'
import router from '../../router'

const state = {}

const mutations = {}

const actions = {
  addNews({ commit }, payload) {
    const url = 'news'
    axiosApi
      .post(url, {
        title: payload.title,
        introductionText: payload.introductionText,
        expandedText: payload.expandedText
      })
      .then((response) => {
        const newsId = response.data.id
        router.push(`/news/${newsId}`)
      })
      .catch((err) => console.log(err))
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
