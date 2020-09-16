import {
  FETCH_PROFILE,
  FETCH_PROFILE_SUCCESS,
  FETCH_PROFILE_ERROR,
  UPDATE_PROFILE,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_ERROR,
  profileActionTypes
} from "actions/profileTypes";

import { userData } from "actions/authTypes";

export interface InitialState {
  fetchProfileLoading: boolean,
  fetchProfileSuccess: boolean,
  fetchProfileError: object,
  updateProfileLoading: boolean,
  updateProfileSuccess: boolean,
  updateProfileError: object,
  user?: userData,
}

const initialState: InitialState = {
  fetchProfileLoading: false,
  fetchProfileSuccess: false,
  fetchProfileError: {},
  updateProfileLoading: false,
  updateProfileSuccess: false,
  updateProfileError: {},
}

const profileReducer = (state: InitialState = initialState, action: profileActionTypes): InitialState => {
  switch (action.type) {
    case FETCH_PROFILE:
      return {
        ...state, fetchProfileLoading: true, fetchProfileSuccess: false, fetchProfileError: {}
      }
    case FETCH_PROFILE_SUCCESS:
      return {
        ...state, fetchProfileLoading: false, fetchProfileSuccess: true, fetchProfileError: {}, user: action.data
      }
    case FETCH_PROFILE_ERROR:
      return {
        ...state, fetchProfileLoading: false, fetchProfileSuccess: false, fetchProfileError: action.error
      }
    case UPDATE_PROFILE:
      return {
        ...state, updateProfileLoading: true, updateProfileSuccess: false, updateProfileError: {}
      }
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state, updateProfileLoading: false, updateProfileSuccess: true, updateProfileError: {}, user: action.data
      }
    case UPDATE_PROFILE_ERROR:
      return {
        ...state, updateProfileLoading: false, updateProfileSuccess: false, updateProfileError: action.error
      }
    default:
      return state
  }
}

export default profileReducer;