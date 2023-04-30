import { store } from "../store/store";
import { Cat } from "./common";

export type MainSlice = {
   isDailyPhotoLoading: boolean,
   isDailyPhotoError: boolean,
   dailyPhoto?: Cat,
}

export type AppDispatch = typeof store.dispatch
export type State = ReturnType<typeof store.getState>