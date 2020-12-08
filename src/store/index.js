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
    fullname: ''
  },
  mutations: {
    SET_FULLNAME: function(state, name) {
      state.fullname = name
    }
  },
  actions: {
    actionFullname: function({ commit }, name) {
      commit('SET_FULLNAME', name)
    }
  },
  modules: {},
  plugins: [vuexLocalStorage.plugin]
})
