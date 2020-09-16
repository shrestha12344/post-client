import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  profileActionTypes
} from "./profileTypes";

import { userData } from "./authTypes";

export const fetchProfile = (data: any): profileActionTypes => {
  return {
    type: FETCH_PROFILE,
    data
  }
}

export const fetchProfileSuccess = (data: userData): profileActionTypes => {
  return {
    type: FETCH_PROFILE_SUCCESS,
    data
  }
}

export const fetchProfileError = (error: object): profileActionTypes => {
  return {
    type: FETCH_PROFILE_ERROR,
    error
  }
}

export const updateProfile = (data: userData | any): profileActionTypes => {
  return {
    type: UPDATE_PROFILE,
    data
  }
}

export const updateProfileSuccess = (data: userData): profileActionTypes => {
  return {
    type: UPDATE_PROFILE_SUCCESS,
    data
  }
}

export const updateProfileError = (error: object): profileActionTypes => {
  return {
    type: UPDATE_PROFILE_ERROR,
    error
  }
}
