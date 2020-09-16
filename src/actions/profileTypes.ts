import { userData } from "./authTypes";

export const FETCH_PROFILE = "FETCH_PROFILE"
export const FETCH_PROFILE_SUCCESS = "FETCH_PROFILE_SUCCESS"
export const FETCH_PROFILE_ERROR = "FETCH_PROFILE_ERROR"
export const UPDATE_PROFILE = "UPDATE_PROFILE"
export const UPDATE_PROFILE_SUCCESS = "UPDATE_PROFILE_SUCCESS"
export const UPDATE_PROFILE_ERROR = "UPDATE_PROFILE_ERROR"

interface fetchProfileAction {
  type: typeof FETCH_PROFILE,
  data: any
}

interface fetchProfileSuccessAction {
  type: typeof FETCH_PROFILE_SUCCESS,
  data: userData
}

interface fetchProfileErrorAction {
  type: typeof FETCH_PROFILE_ERROR,
  error: object
}

interface updateProfiletAction {
  type: typeof UPDATE_PROFILE,
  data: userData
}

interface updateProfiletSuccessAction {
  type: typeof UPDATE_PROFILE_SUCCESS,
  data: userData
}

interface updateProfiletErrorAction {
  type: typeof UPDATE_PROFILE_ERROR,
  error: object
}

export type profileActionTypes = fetchProfileAction |
  fetchProfileSuccessAction |
  fetchProfileErrorAction |
  updateProfiletAction |
  updateProfiletSuccessAction |
  updateProfiletErrorAction

