import axios from 'axios' // 使用前要先安装依赖：npm install axios
import baseUrl from './baseUrl'
import { ResCode } from '@/api'
import { Message } from 'view-ui-plus'

// 创建axios实例
const service = axios.create({
  // 这里可以放一下公用属性等。
  baseUrl: baseUrl, // 用于配置请求接口公用部分，请求时会自动拼接在你定义的url前面。
  withCredentials: false, // 跨域请求时是否需要访问凭证
  timeout: 6 * 1000, // 请求超时时间
  ws: true,
  // headers是被发送的自定义请求头，请求头内容需要根据后端要求去设置，这里我们使用本项目请求头。
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  }
})

// 请求拦截器
service.interceptors.request.use(config => {
  // 这里可以进行请求加密等操作。如添加token,cookie，修改数据传输格式等。
  return config
})

service.interceptors.response.use(response => {
  // 请求成功进行的操作。// 可以使用switch/if...else对数据先进行处理。
  const { data } = response
  const { respData, respCode, respMessage } = data
  debugger
  // 请求成功
  if (respCode === ResCode.SUCCESS) {
    return respData
  } else {
    Message.error(respMessage)
    const error = { respCode: respCode, respMessage: respMessage }
    return Promise.reject(error)
  }
}, error => {
  // 请求失败进行的操作
  return Promise.reject(error)
})

export default service
