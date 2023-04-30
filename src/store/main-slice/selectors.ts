import { State } from "../../types/state";
import { NameSpace } from "../../utils/const";

export const getDailyPhoto = (state: State) => state[NameSpace.Main].dailyPhoto
export const getIsDailyPhotoError = (state: State) => state[NameSpace.Main].isDailyPhotoError
export const getIsDailyPhotoLoading = (state: State) => state[NameSpace.Main].isDailyPhotoLoading