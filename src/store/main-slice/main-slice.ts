import { createSlice } from "@reduxjs/toolkit";
import { MainSlice } from "../../types/state";
import { NameSpace } from "../../utils/const";
import { fetchRandomPhotoAction } from '../api-action'

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
         .addCase(fetchRandomPhotoAction.pending, (state, action) => {
            state.isDailyPhotoLoading = true
         })
         .addCase(fetchRandomPhotoAction.rejected, (state, action) => {
            state.isDailyPhotoLoading = false
            state.isDailyPhotoError = false
         })
         .addCase(fetchRandomPhotoAction.fulfilled, (state, action) => {
            state.isDailyPhotoLoading = false
            state.isDailyPhotoError = false
            state.dailyPhoto = action.payload
         })
   }
})