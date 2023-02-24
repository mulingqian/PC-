import axios from 'axios'
import store from '@/store'
import router from '@/router'
import {Message} from 'element-ui'
// import jsCookie from 'js-cookie'
axios.defaults.timeout = 50000
axios.defaults.baseURL = window.Global_CONFIG.PCAPIHOST
axios.defaults.withCredentials = true
// 添加请求拦截器
axios.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  // console.log(config.getCookies())
  if (store.state.token) {
    config.headers.token = store.state.token
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})
// 添加响应拦截器
axios.interceptors.response.use(response => {
  // 对响应数据做点什么
  console.log('response', response)
  if (response.data.status === '200000001') {
    Message.error('登录状态失效')
    store.commit('CHANGE_APITOKEN', '')
    router.push('/index')
  }
  return response
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error)
})
const xhr = {
  get (url, data, config) {
    return new Promise((resolve, reject) => {
      axios.get(url, { params: data }, config).then(res => {
        if (res.data.status === '200') {
          // 请求数据成功处理
          resolve(res.data)
        } else {
          // 请求数据异常处理
          console.log(res.data.msg)
          reject(res.data)
        }
      }).catch(err => {
        reject(err)
        console.log('get接口调用失败')
      })
    })
  },
  post (url, data, config) {
    return new Promise((resolve, reject) => {
      axios.post(url, data, config).then(res => {
        if (res.data.status === '200') {
          // 请求数据成功处理
          resolve(res.data)
        } else {
          // 请求数据异常处理
          console.log(res.data.msg)
          reject(res.data)
        }
      }).catch(err => {
        console.log('post接口调用失败')
        reject(err)
      })
    })
  }
}

export default xhr
