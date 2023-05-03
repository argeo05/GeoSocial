import { User } from "./common"

export type LoginData = {
   password: string,
   email: string
}

export type RegistrationData = {
   name: string,
   password: string,
   email: string
}

export type RegistrationResponse = {
   "$id": string,
   "code": number,
   "message": string,
   "data": {
      "$id": string,
      "Id": number,
      "Name": string,
      "Email": string,
      "Token": string
   }
}

export type LoginResponse = RegistrationResponse