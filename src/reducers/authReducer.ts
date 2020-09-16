import {
  SIGNIN,
  SIGNIN_SUCCESS,
  SIGNIN_ERROR,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_ERROR,
  GOOGLE_SIGNIN,
  GOOGLE_SIGNUP,
  userData,
  authActionTypes,
} from "actions/authTypes";

export interface InitialState {
  signinLoading: boolean,
  signinSuccess: boolean,
  signinError: object,
  signupLoading: boolean,
  signupSuccess: boolean,
  signupError: object,
  isSignedin: boolean,
  user?: userData
}

const initialState: InitialState = {
  signinLoading: false,
  signinSuccess: false,
  signinError: {},
  signupLoading: false,
  signupSuccess: false,
  signupError: {},
  isSignedin: false,
  user: {}
}

const authReducer = (state: InitialState = initialState, action: authActionTypes): InitialState => {
  switch (action.type) {
    case SIGNIN:
      return {
        ...state, signinLoading: true, signinSuccess: false, isSignedin: false, signinError: {}
      }
    case SIGNIN_SUCCESS:
      return {
        ...state, signinLoading: false, signinSuccess: true, isSignedin: true, signinError: {}, user: action.data
      }
    case SIGNIN_ERROR:
      return {
        ...state, signinLoading: false, signinSuccess: false, isSignedin: false, signinError: action.error
      }
    case SIGNUP:
      return {
        ...state, signupLoading: true, signupSuccess: false, isSignedin: false, signupError: {}
      }
    case SIGNUP_SUCCESS:
      return {
        ...state, signupLoading: false, signupSuccess: true, isSignedin: true, signupError: {}, user: action.data
      }
    case SIGNUP_ERROR:
      return {
        ...state, signupLoading: false, signupSuccess: false, isSignedin: false, signupError: action.error
      }
    case GOOGLE_SIGNIN:
      return {
        ...state, signinLoading: true, signinSuccess: false, isSignedin: false, signinError: {}
      }
    case GOOGLE_SIGNUP:
      return {
        ...state, signupLoading: true, signupSuccess: false, isSignedin: false, signupError: {}
      }
    default:
      return state
  }
}

export default authReducer;