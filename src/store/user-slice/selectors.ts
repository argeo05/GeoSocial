import { State } from "../../types/state";
import { NameSpace } from "../../utils/const";

export const getAuthStatus = (state: State) => state[NameSpace.User].authStatus
export const getUser = (state: State) => state[NameSpace.User].user