// import {getApiToken} from '@/api/token/index.js'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css'
import store from '@/store'
import router from '@/router'
NProgress.configure({ showSpinner: false }) // 顶部进度条

router.beforeEach((to, from, next) => {
  NProgress.start()
  console.log('Token', store.state.token !== '', to)
  // 判断是否前往登录页
  if (to.name === 'login') {
    next()
    NProgress.done()
    return
  }
  // 判断是否存在token
  if (store.state.token !== '') {
    console.log(to.meta)
    // 判断是否前往公共路由
    if (to.meta.isCommon) {
      next()
      NProgress.done()
    } else {
      console.log(store.state.role.includes(to.name), to.name, store.state.role)
      // 判断用户权限是否包含当前跳转路由
      if (store.state.role.includes(to.name)) {
        next()
        NProgress.done()
      } else {
        next(false)
        NProgress.done()
      }
    }
  } else {
    next('/login')
    NProgress.done()
  }
})
