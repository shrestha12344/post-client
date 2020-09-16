export const SIGNIN = "SIGNIN"
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS"
export const SIGNIN_ERROR = "SIGNIN_ERROR"
export const SIGNUP = "SIGNUP"
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS"
export const SIGNUP_ERROR = "SIGNUP_ERROR"
export const GOOGLE_SIGNIN = "GOOGLE_SIGNIN"
export const GOOGLE_SIGNUP = "GOOGLE_SIGNUP"

export interface userData {
  _id?: string
  email?: string
  password?: string
  username?: string
  photo?: string
  information?: string
}

interface signinAction {
  type: typeof SIGNIN,
  data: userData
}

interface signinSuccessAction {
  type: typeof SIGNIN_SUCCESS,
  data: userData
}

interface signinErrorAction {
  type: typeof SIGNIN_ERROR,
  error: object
}

interface signupAction {
  type: typeof SIGNUP,
  data: userData
}

interface signupSuccessAction {
  type: typeof SIGNUP_SUCCESS,
  data: userData
}

interface signupErrorAction {
  type: typeof SIGNUP_ERROR,
  error: object
}

interface googleSignin {
  type: typeof GOOGLE_SIGNIN,
  data: userData
}

interface googleSignup {
  type: typeof GOOGLE_SIGNUP,
  data: userData
}

export type authActionTypes = signinAction |
  signinSuccessAction |
  signinErrorAction |
  signupAction |
  signupSuccessAction |
  signupErrorAction |
  googleSignin |
  googleSignup