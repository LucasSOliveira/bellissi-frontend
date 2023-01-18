import axios from 'axios'

const WEB = 'WEB'
export const baseURL = 'http://localhost:1337'
const responseType = 'json'
const instance = axios.create({ baseURL, responseType })

instance.interceptors.request.use((config: any) => {
  config.headers.client = WEB
  config.headers['Access-Control-Allow-Origin'] = '*'
  config.headers.Accept = '*/*'
  return config
}, (error: any) => Promise.reject(error))

export default instance
