import { State } from "../../types/state";
import { NameSpace } from "../../utils/const";

export const getDailyPhoto = (state: State) => state[NameSpace.Main].dailyPhoto
export const getisDailyPhotoError = (state: State) => state[NameSpace.Main].isDailyPhotoError
export const getisDailyPhotoLoading = (state: State) => state[NameSpace.Main].isDailyPhotoLoading