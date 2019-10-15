import Vue from "vue";
import Vuex from "vuex";

import auth from './modules/auth'
import news from './modules/news'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    news
  }
});
