import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/state";
import axios, { AxiosInstance } from 'axios'
import { Cat, User } from "../types/common";
import { dropToken, setToken } from "../services/token";
import browserHistory from "../browser-histrory";
import { AppRoute } from "../routes";
import { LoginData, LoginResponse, RegistrationData, RegistrationResponse } from "../types/api-types";
import { toast } from "react-toastify";
import { dropId, getId, setId } from "../services/user";
import { convertRegistrationResponse } from "../utils/converters";

//api-actions to use Axios requests

type UserAuthAnswer = User & { token: string }

export const registrationAction = createAsyncThunk<User, RegistrationData,
   {
      dispatch: AppDispatch,
      state: State,
      extra: AxiosInstance
   }>(
      'user/registration',
      async (registrationData, { dispatch, extra: api }) => {
         const { data: notParsedresponse } = await api.post<RegistrationResponse>('http://restapi.adequateshop.com/api/authaccount/registration',
            registrationData)
         const response = convertRegistrationResponse(notParsedresponse)
         
         if (response.code == 0) {
            setToken(response.data.token)
            setId(response.data.id)
            browserHistory.push(AppRoute.Main)
            return { ...response.data, token: undefined }
         } else {
            toast.warn(response.message)
            throw Error(response.message)
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
         const { data: notParsedresponse } = await api.post<LoginResponse>('http://restapi.adequateshop.com/api/authaccount/login',
            loginData)
         const response = convertRegistrationResponse(notParsedresponse)

         if (response.code == 0) {
            setToken(response.data.token)
            setId(String(response.data.id))
            browserHistory.push(AppRoute.Main)
            return { ...response.data, token: undefined }
         } else {
            toast.warn(response.message)
            throw new Error(response.message)
         }
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
            const id = getId()
            const { data } = await api.get<UserAuthAnswer>('http://restapi.adequateshop.com/api/users/' + id)
            return { ...data}
         } catch (e) {
            dropToken()
            throw e;
         }
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
         dropToken()
         dropId()
      }
   )

export const fetchRandomPhotoAction = createAsyncThunk<Cat, undefined,
   {
      dispatch: AppDispatch,
      state: State,
      extra: AxiosInstance
   }>(
      'data/randomPhoto',
      async (_arg, { dispatch, extra: api }) => {
         const [{ data: imgdata }, { data: factdata }] = await Promise.all([
            api.get<[{ url: string }]>('https://api.thecatapi.com/v1/images/search'),
            api.get<{ fact: string }>('https://catfact.ninja/fact')]
         )
         return { image: imgdata[0].url, fact: factdata.fact } as Cat
      }
   )