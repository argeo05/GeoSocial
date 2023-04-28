import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch, State } from "../types/store";
import { AxiosInstance } from 'axios'
import { Cat } from "../types/api";

export const getRandomPhoto = createAsyncThunk<
   Cat,
   undefined,
   {
      dispatch: AppDispatch,
      state: State,
      extra: AxiosInstance
   }
>
(
   'data/randomPhoto',
   async (_arg, { dispatch, extra: api }) => {
      const {data} = await api.get<Cat>('https://some-random-api.ml/animal/cat')
      return data
   }
)