import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserSlice } from "../../types/state";
import { AuthStatus, NameSpace } from "../../utils/const";
import { checkAuthAction, loginAction, logoutAction } from '../api-action'

//slice for main page


const initialState: UserSlice = {
   authStatus: AuthStatus.Unknown
}

export const userSlice = createSlice({
   name: NameSpace.Main,
   initialState,
   reducers: {
      setAuthStatus: (state, action: PayloadAction<AuthStatus>) => {
         state.authStatus = action.payload
      }
   },
   extraReducers(builder) {
      builder
         .addCase(checkAuthAction.pending, (state, action) => {
            state.authStatus = AuthStatus.Unknown
            state.user = undefined
         })
         .addCase(checkAuthAction.rejected, (state, action) => {
            state.authStatus = AuthStatus.Unauth
            state.user = undefined
         })
         .addCase(checkAuthAction.fulfilled, (state, action) => {
            state.authStatus = AuthStatus.Auth
            state.user = action.payload
         })

         .addCase(loginAction.pending, (state, action) => {
            state.authStatus = AuthStatus.Unknown
            state.user = undefined
         })
         .addCase(loginAction.rejected, (state, action) => {
            state.authStatus = AuthStatus.Unauth
            state.user = undefined
         })
         .addCase(loginAction.fulfilled, (state, action) => {
            state.authStatus = AuthStatus.Auth
            state.user = action.payload
         })

         .addCase(logoutAction.pending, (state, action) => {
            state.authStatus = AuthStatus.Unknown
            state.user = undefined
         })
         .addCase(logoutAction.fulfilled, (state, action) => {
            state.authStatus = AuthStatus.Unauth
            state.user = undefined
         })
   }
})



export const { setAuthStatus } = userSlice.actions