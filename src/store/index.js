import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexLocalStorage = new VuexPersist({
  key: 'vuex',
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    fullname: '',
    tab: 0
  },
  mutations: {
    SET_FULLNAME(state, name) {
      state.fullname = name
    },
    SET_TAB(state, tab) {
      state.tab = tab
    }
  },
  actions: {
    actionFullname({ commit }, name) {
      commit('SET_FULLNAME', name)
    },
    actionTab({ commit }, tab) {
      commit('SET_TAB', tab)
    }
  },
  modules: {},
  plugins: [vuexLocalStorage.plugin]
})
