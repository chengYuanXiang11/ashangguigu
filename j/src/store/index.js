import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    clientHeight: 0,//屏幕高度
    clientWidth: 0,//屏幕宽度
    asideMleft: 200,//左边框左边距
    isCollapse: false,//左侧是否
    asideMleftB:0,
    asideMleftc:20
  },
  mutations: {
    DOCHEIGHT(state, ploay) {
      state.clientHeight = ploay
    },
    DOCWIDTH(state, ploay) {
      state.clientWidth = ploay
    },
    MODIFR_AML71(state, ploay) {

        state.asideMleft = 40
        state.asideMleftB = 20
        state.asideMleftc = 0

    },
    MODIFR_AML200(state, ploay) {

      state.asideMleft = 200
      state.asideMleftB = 0
      state.asideMleftc = 20

  },
    MODIFR_ISCOLLAPSE(state) {
      state.isCollapse = !state.isCollapse
    }
  },
  actions: {
    SIDERBAR({commit}){
      commit('MODIFR_AML')

      setTimeout(() => {
      commit('MODIFR_ISCOLLAPSE')

      }, 1500)
    }
  },
  modules: {
  }
})
