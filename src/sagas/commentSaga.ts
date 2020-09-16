import { call, put, takeLatest } from "redux-saga/effects";
import { fetchComment as _fetchComment, createComment as _createComment } from "apis/comment";
import {
  fetchCommentSuccess,
  fetchCommentError,
  createCommentSuccess,
  createCommentError,
} from "actions/commentActions";
import {
  FETCH_COMMENT,
  CREATE_COMMENT,
  comment,
} from "actions/commentTypes";

interface data {
  type: string;
  data: comment[];
}

function* fetchComment() {
  try {
    const comments = yield call(_fetchComment);
    yield put(fetchCommentSuccess(comments));
  } catch (error) {
    yield put(fetchCommentError(error));
  }
}

function* createComment(comment: data) {
  try {
    yield call(_createComment, comment.data);
    yield put(createCommentSuccess());
    const comments = yield call(_fetchComment);
    yield put(fetchCommentSuccess(comments));
  } catch (error) {
    yield put(createCommentError(error));
  }
}

export default function* commentSaga() {
  yield takeLatest(FETCH_COMMENT, fetchComment);
  yield takeLatest(CREATE_COMMENT, createComment);
}
