import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state";
import { AxiosInstance } from 'axios'
import { Cat, LoginData, User } from "../types/common";
import { dropToken, setToken } from "../services/token";
import browserHistory from "../browser-histrory";
import { AppRoute } from "../routes";

//api-actions to use Axios requests

type UserAuthAnswer = User & { token: string }

export const fetchRandomPhotoAction = createAsyncThunk<Cat, undefined,
   {
      dispatch: AppDispatch,
      state: State,
      extra: AxiosInstance
   }>(
      'data/randomPhoto',
      async (_arg, { dispatch, extra: api }) => {
         const { data } = await api.get<Cat>('https://some-random-api.ml/animal/cat')
         return data
      }
   )

export const checkAuthAction = createAsyncThunk<User, undefined,
   {
      dispatch: AppDispatch,
      state: State,
      extra: AxiosInstance
   }>(
      'user/checkAuth',
      async (_arg, { dispatch, extra: api }) => {
         try {
            const { data } = await api.get<UserAuthAnswer>('https://10.react.pages.academy/six-cities/login')
            return { ...data, token: undefined }
         } catch (e) {
            dropToken()
            throw e;
         }
      }
   )

export const loginAction = createAsyncThunk<User, LoginData,
   {
      dispatch: AppDispatch,
      state: State,
      extra: AxiosInstance
   }>(
      'user/login',
      async (loginData, { dispatch, extra: api }) => {
         const { data } = await api.post<UserAuthAnswer>('https://10.react.pages.academy/six-cities/login',
            loginData)
         setToken(data.token)
         browserHistory.push(AppRoute.Main)
         return { ...data, token: undefined }
      }
   )

export const logoutAction = createAsyncThunk<void, undefined,
   {
      dispatch: AppDispatch,
      state: State,
      extra: AxiosInstance
   }>(
      'user/logout',
      async (_arg, { dispatch, extra: api }) => {
         await api.delete('https://10.react.pages.academy/six-cities/logout')
         dropToken()
      }
   )
