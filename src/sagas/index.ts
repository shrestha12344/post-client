import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
import postSaga from "./postSaga";
import profileSaga from "./profileSaga";
import commentSaga from "./commentSaga";

export const rootSaga = function* root() {
  yield all([fork(authSaga), fork(postSaga), fork(profileSaga), fork(commentSaga)]);
};