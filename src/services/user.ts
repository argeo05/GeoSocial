const NAME_TOKEN_KEY_NAME = 'user-id'


type Id = string

export const EMPTY_TOKEN = 'Bearer  '

export const setId = (id: Id) => {
   localStorage.setItem(NAME_TOKEN_KEY_NAME, id)
}

export const dropId = () => {
   localStorage.removeItem(NAME_TOKEN_KEY_NAME)
}

export const getId = (): Id => {
   return localStorage.getItem(NAME_TOKEN_KEY_NAME) ?? ''
}