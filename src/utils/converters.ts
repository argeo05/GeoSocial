import { LoginResponse, RegistrationResponse } from "../types/api-types";

export const convertRegistrationResponse = (response: RegistrationResponse) => {
   return {
      ...response,
      "data": {
         "$id": response.data['$id'],
         "id": String(response.data.Id),
         "name": response.data.Name,
         "email": response.data.Email,
         "token": response.data.Token
      }
   }
}

export const convertLoginResponse = (response: LoginResponse) => {
   return {
      ...response,
      "data": {
         "$id": response.data['$id'],
         "id": String(response.data.Id),
         "name": response.data.Name,
         "email": response.data.Email,
         "token": response.data.Token
      }
   }
}