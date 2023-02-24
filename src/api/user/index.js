import $axios from '../../utils/index'

// 接口地址统一管理
export function login (a, b) {
  return $axios.post(`user/login?accountNumber=${a}&password=${b}`)
}
