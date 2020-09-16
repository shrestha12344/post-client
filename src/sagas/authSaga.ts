import { call, put, takeLatest } from "redux-saga/effects";
import {
  signinSuccess, signinError, signupSuccess, signupError
} from "actions/authActions";
import {
  SIGNIN, SIGNUP, GOOGLE_SIGNIN,
  GOOGLE_SIGNUP, userData as userDataType
} from "actions/authTypes";
import { signin as _signin, signup as _signup, googleAuth } from "apis/auth";
import { setAuthorizationToken } from "utils/authorizationToken";

interface data {
  type: string;
  data: userDataType;
}

function* signin(userData: data) {
  const { data } = userData;
  try {
    const response = yield call(_signin, data);
    if (response.token) {
      localStorage.setItem("user", response.user._id);
      localStorage.setItem("token", response.token);
      setAuthorizationToken(response.token);
      yield put(signinSuccess(response.user));
      window.location.reload();
    }
    else {
      yield put(signinError(response.message));
    }
  } catch (error) {
    yield put(signinError(error));
  }
}

function* signup(userData: data) {
  const { data } = userData;
  try {
    const response = yield call(_signup, data);
    if (response.token) {
      localStorage.setItem("user", response.user._id);
      localStorage.setItem("token", response.token);
      setAuthorizationToken(response.token);
      yield put(signupSuccess(response.user));
      window.location.replace("/");
    }
    else {
      yield put(signupError(response.message));
    }
  } catch (error) {
    yield put(signupError(error));
  }
}

function* googleSignin(userData: data) {
  const { data } = userData;
  try {
    const response = yield call(googleAuth, data);
    if (response.token) {
      localStorage.setItem("user", response.user._id);
      localStorage.setItem("token", response.token);
      setAuthorizationToken(response.token);
      yield put(signinSuccess(response.user));
      window.location.reload();
    }
    else {
      yield put(signinError(response.message));
    }
  } catch (error) {
    yield put(signinError(error));
  }
}

function* googleSignup(userData: data) {
  const { data } = userData;
  try {
    const response = yield call(googleAuth, data);
    if (response.token) {
      localStorage.setItem("user", response.user._id);
      localStorage.setItem("token", response.token);
      setAuthorizationToken(response.token);
      yield put(signupSuccess(response.data));
    }
    else {
      yield put(signupError(response.message));
    }
  } catch (error) {
    yield put(signupError(error));
  }
}

export default function* authSaga() {
  yield takeLatest(SIGNIN, signin);
  yield takeLatest(SIGNUP, signup);
  yield takeLatest(GOOGLE_SIGNIN, googleSignin);
  yield takeLatest(GOOGLE_SIGNUP, googleSignup);
}
