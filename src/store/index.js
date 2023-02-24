import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// import * as Cookies from 'js-cookie'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    userinfo: {},
    role: ['manageindex', 'message'], // 允许访问的地址
    test: '',
    routes: [],
    token: '',
    userToken: '',
    isAddRoutes: 0
  },
  // 需要页面同步进行刷新的操作请在这里配置
  mutations: {
    SAVE_USERINFO (state, info) {
      state.userinfo = info
    },
    SAVE_USERROLE (state, info) {
      state.role = info
    },
    CHANGE_TOKEN (state, info) {
      state.token = info
    },
    ADD_ROUTES (state, info) {
      state.routes = info
      console.log(info)
      console.log(state.routes)
    },
    CHANGE_ADDROUTERCODE (state, info) {
      state.isAddRoutes = info
    }
  },
  // 可以或者需要进行异步操作的在action里声明
  actions: {
  },
  plugins: [
    createPersistedState({
      storage: {
        getItem: key => sessionStorage.getItem(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) => sessionStorage.setItem(key, value, { expires: 3, secure: true }),
        removeItem: key => sessionStorage.removeItem(key)
      },
      reducer (val) {
        return {
        // 需要持久化的字段在这里配置
          userinfo: val.userinfo,
          routes: val.routes,
          token: val.token,
          role: val.role
        }
      }
    })
  ]
})
export default store
