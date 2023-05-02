import { store } from "../store/store";
import { AuthStatus } from "../utils/const";
import { Cat, User } from "./common";

export type MainSlice = {
   isDailyPhotoLoading: boolean,
   isDailyPhotoError: boolean,
   dailyPhoto?: Cat,
}

export type UserSlice = {
   authStatus: AuthStatus,
   user?: User
}

export type AppDispatch = typeof store.dispatch
export type State = ReturnType<typeof store.getState>