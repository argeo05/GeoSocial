import axios, { AxiosError } from "axios"
import { toast } from "react-toastify"
import { getToken } from "./token"
const REQUEST_TIMEOT = 5000

export const createApi = () => {
   const api = axios.create({
      timeout: REQUEST_TIMEOT
   })

   api.interceptors.request.use((config) => { 
      config.headers['Authorization'] = getToken()
      return config
   })

   api.interceptors.response.use(
      (response) => response,
      (error: AxiosError) => {
         toast.warn(error.message)
      }
   )

   return api
}