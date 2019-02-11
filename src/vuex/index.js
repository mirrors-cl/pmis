import  vue from 'vue'
import vuex from 'vuex'
import status from './modules/status/index' //引用模块
Vue.use(Vuex);

export default new vuex.Store({
  modules: {
    //vuex 允许我们将 store 分割成模块（modules）。 每个模块拥有自己的 state,mutation,action
    dataStatus:status,//访问这里面数据的时候要使用'dataStatus'

  }
})

