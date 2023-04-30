import { combineReducers } from "@reduxjs/toolkit";
import { NameSpace } from "../utils/const";
import { mainSlice } from "./main-slice/main-slice";

export const reducer = combineReducers({
   [NameSpace.Main]: mainSlice.reducer
})