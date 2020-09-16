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
} from "./authTypes";

export const signin = (data: userData): authActionTypes => {
  return {
    type: SIGNIN,
    data
  }
}

export const signinSuccess = (data: userData): authActionTypes => {
  return {
    type: SIGNIN_SUCCESS,
    data
  }
}

export const signinError = (error: object): authActionTypes => {
  return {
    type: SIGNIN_ERROR,
    error
  }
}

export const signup = (data: userData): authActionTypes => {
  return {
    type: SIGNUP,
    data
  }
}

export const signupSuccess = (data: userData): authActionTypes => {
  return {
    type: SIGNUP_SUCCESS,
    data
  }
}

export const signupError = (error: object): authActionTypes => {
  return {
    type: SIGNUP_ERROR,
    error
  }
}

export const googleSignin = (data: userData): authActionTypes => {
  return {
    type: GOOGLE_SIGNIN,
    data
  }
}

export const googleSignup = (data: userData): authActionTypes => {
  return {
    type: GOOGLE_SIGNUP,
    data
  }
}