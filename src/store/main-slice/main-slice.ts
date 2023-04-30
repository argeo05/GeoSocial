import { createSlice } from "@reduxjs/toolkit";
import { MainSlice } from "../../types/state";
import { NameSpace } from "../../utils/const";
import { fetchRandomPhoto } from '../api-action'

//slice for main page

const initialState: MainSlice = {
   isDailyPhotoLoading: false,
   isDailyPhotoError: false,
}

export const mainSlice = createSlice({
   name: NameSpace.Main,
   initialState,
   reducers: {},
   extraReducers(builder) {
      builder
         .addCase(fetchRandomPhoto.pending, (state, action) => {
            state.isDailyPhotoLoading = true
         })
         .addCase(fetchRandomPhoto.rejected, (state, action) => {
            state.isDailyPhotoLoading = false
            state.isDailyPhotoError = false
         })
         .addCase(fetchRandomPhoto.fulfilled, (state, action) => {
            state.isDailyPhotoLoading = false
            state.isDailyPhotoError = false
            state.dailyPhoto = action.payload
         })
   }
})