import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

import Email from './modules/emali/index'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters,
  modules: {
    Email
  },
  actions,
  mutations
})
