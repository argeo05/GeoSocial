import axios from "axios"
import { getToken } from "./token"
const REQUEST_TIMEOT = 5000

export const createApi = () => {
   const api = axios.create({
      timeout: REQUEST_TIMEOT
   })

   api.interceptors.request.use((config) => { 
      config.headers['X-Token'] = getToken()
      return config
   })

   return api
}