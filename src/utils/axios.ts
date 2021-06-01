import Axios from 'axios'
import { message } from 'ant-design-vue'

const baseURL = '/'

const axios = Axios.create({
  baseURL,
  timeout: 20000
})

axios.interceptors.request.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  (response: any) => {
    return response
  },
  (error: any) => {
    if (error.response && error.response.data) {
      const code = error.response.status
      const msg = error.response.data.message
      message.error(`Code:${code} , Message:${msg}`)
      console.error(`[Axios error]:`, error.response)
    } else {
      message.error(`${error}`)
    }
    return Promise.reject(error)
  }
)

export default axios
