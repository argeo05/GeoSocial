import axios from "axios"
const REQUEST_TIMEOT = 5000

export const createApi = () => {
   const api = axios.create({
      timeout: REQUEST_TIMEOT
   })

   return api
}