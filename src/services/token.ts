const AUTH_TOKEN_KEY_NAME = 'geo-social-token'


type Token = string

export const EMPTY_TOKEN = 'Bearer '

export const setToken = (token: Token) => {
   localStorage.setItem(AUTH_TOKEN_KEY_NAME, token)
}

export const dropToken = () => {
   localStorage.removeItem(AUTH_TOKEN_KEY_NAME)
}

export const getToken = () : Token => {
   return 'Bearer ' + (localStorage.getItem(AUTH_TOKEN_KEY_NAME) ?? '')
}