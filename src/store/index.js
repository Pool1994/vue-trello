import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from "vuex/dist/logger";
Vue.use(Vuex)
const debug = process.env.MODE_ENV !== 'production';

export default new Vuex.Store(
  {
    strict: debug,
    plugins: debug ? [createLogger()] : [],
    state: {},
    getters: {},
    mutations: {},
    actions: {},
    modules: {}
  })