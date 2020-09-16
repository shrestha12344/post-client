import { call, put, takeLatest } from "redux-saga/effects";
import { fetchProfile as _fetchProfile, updateProfile as _updateProfile } from "apis/profile";

import {
  fetchProfileSuccess,
  fetchProfileError,
  updateProfileSuccess,
  updateProfileError,
} from "actions/profileActions";

import { FETCH_PROFILE, UPDATE_PROFILE } from "actions/profileTypes";

import { userData } from "actions/authTypes";

interface data {
  _id: string;
  type: string;
  profile: userData;
}

const user = localStorage.getItem("user");

function* fetchProfile(data: any) {
  try {
    const profile = yield call(_fetchProfile, user);
    yield put(fetchProfileSuccess(profile.user));
  } catch (error) {
    yield put(fetchProfileError(error));
  }
}

function* updateProfile(data: any) {
  try {
    const profile = yield call(_updateProfile, data.data);
    yield put(updateProfileSuccess(profile.user));
  } catch (error) {
    yield put(updateProfileError(error));
  }
}

export default function* postSaga() {
  yield takeLatest(FETCH_PROFILE, fetchProfile);
  yield takeLatest(UPDATE_PROFILE, updateProfile);
}