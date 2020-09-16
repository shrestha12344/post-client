import { call, put, takeLatest } from "redux-saga/effects";
import {
  fetchPost as _fetchPost,
  createPost as _createPost,
  deletePost as _deletePost,
  searchPost as _searchPost,
  updatePost as _updatePost
} from "apis/post";
import {
  fetchPostSuccess,
  fetchPostError,
  createPostSuccess,
  createPostError,
  updatePostSuccess,
  updatePostError,
  deletePostSuccess,
  deletePostError
} from "actions/postActions";

import {
  SEARCH_POST,
  FETCH_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  post,
} from "actions/postTypes";

interface data {
  _id: string;
  type: string;
  data: post | post[];
}

function* fetchPost() {
  try {
    const posts = yield call(_fetchPost);
    yield put(fetchPostSuccess(posts));
  } catch (error) {
    yield put(fetchPostError(error));
  }
}

function* createPost(post: data) {
  try {
    yield call(_createPost, post.data);
    yield put(createPostSuccess());
    const posts = yield call(_fetchPost);
    yield put(fetchPostSuccess(posts));
  } catch (error) {
    yield put(createPostError(error));
  }
}

function* updatePost(post: data) {
  try {
    yield call(_updatePost, post.data);
    yield put(updatePostSuccess());
  } catch (error) {
    yield put(updatePostError(error));
  }
}

function* deletePost(post: data) {
  try {
    yield call(_deletePost, post._id);
    yield put(deletePostSuccess());
    const posts = yield call(_fetchPost);
    yield put(fetchPostSuccess(posts));
  } catch (error) {
    yield put(deletePostError(error));
  }
}

function* searchPost(data: any) {
  try {
    const posts = yield call(_searchPost, data.query);
    yield put(fetchPostSuccess(posts));
  } catch (error) {
    yield put(deletePostError(error));
  }
}

export default function* postSaga() {
  yield takeLatest(FETCH_POST, fetchPost);
  yield takeLatest(CREATE_POST, createPost);
  yield takeLatest(UPDATE_POST, updatePost);
  yield takeLatest(DELETE_POST, deletePost);
  yield takeLatest(SEARCH_POST, searchPost);
}
