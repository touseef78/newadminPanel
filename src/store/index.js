import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import themeConfig from './theme-config'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    themeConfig,
  },
  strict: process.env.DEV,
})