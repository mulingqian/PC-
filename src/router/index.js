import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index'),
    meta: {
      name: '用户登录',
      isCommon: true
    }
  },
  {
    path: '/management',
    name: 'management',
    component: () => import('@/views/manage/layout'),
    redirect: '/manageindex',
    meta: {
      name: '后台首页',
      isCommon: true
    },
    children: [
      {
        path: '/manageindex',
        name: 'manageindex',
        component: () => import('@/views/manage/index'),
        meta: {
          name: '我的消息'
        }
      },
      {
        path: '/message',
        name: 'message',
        component: () => import('@/views/manage/message'),
        meta: {
          name: '我的消息'
        }
      },
      {
        path: '/role',
        name: 'role',
        component: () => import('@/views/manage/role'),
        meta: {
          name: '权限管理'
        }
      }
    ]
  }
]
const router = new Router({
  // mode: 'history', // require service support
  routes: routes
})

export default router
