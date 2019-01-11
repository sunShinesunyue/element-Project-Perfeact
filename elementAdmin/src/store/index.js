import Vue from 'vue'
import Vuex from 'vuex'
import createLogger from 'vuex/dist/logger';  // 打印日志

// 数据子模块
import app from './modules/app'
import errorLog from './modules/errorLog'
import permission from './modules/permission'
import tagsView from './modules/tagsView'
import user from './modules/user'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    app,
    errorLog,
    permission,
    tagsView,
    user
  },
  getters,
  plugins:[createLogger()] // 打印日志
})

export default store
