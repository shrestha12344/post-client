export const SEARCH_POST = "SEARCH_POST"
export const FETCH_POST = "FETCH_POST"
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS"
export const FETCH_POST_ERROR = "FETCH_POST_ERROR"
export const CREATE_POST = "CREATE_POST"
export const CREATE_POST_SUCCESS = "CREATE_POST_SUCCESS"
export const CREATE_POST_ERROR = "CREATE_POST_ERROR"
export const UPDATE_POST = "UPDATE_POST"
export const UPDATE_POST_SUCCESS = "UPDATE_POST_SUCCESS"
export const UPDATE_POST_ERROR = "UPDATE_POST_ERROR"
export const DELETE_POST = "DELETE_POST"
export const DELETE_POST_SUCCESS = "DELETE_POST_SUCCESS"
export const DELETE_POST_ERROR = "DELETE_POST_ERROR"

export interface post {
  _id?: string
  user?: any
  content?: string
  date?: string
}

interface searchPostAction {
  type: typeof SEARCH_POST,
  query: string
}

interface fetchPostAction {
  type: typeof FETCH_POST,
}

interface fetchPostSuccessAction {
  type: typeof FETCH_POST_SUCCESS,
  data: post[]
}

interface fetchPostErrorAction {
  type: typeof FETCH_POST_ERROR,
  error: object
}

interface createPostAction {
  type: typeof CREATE_POST,
  data: post
}

interface createPostSuccessAction {
  type: typeof CREATE_POST_SUCCESS
}

interface createPostErrorAction {
  type: typeof CREATE_POST_ERROR,
  error: object
}

interface updatePostAction {
  type: typeof UPDATE_POST,
  data: post
}

interface updatePostSuccessAction {
  type: typeof UPDATE_POST_SUCCESS
}

interface updatePostErrorAction {
  type: typeof UPDATE_POST_ERROR,
  error: object
}

interface deletePostAction {
  type: typeof DELETE_POST,
  _id: string
}

interface deletePostSuccessAction {
  type: typeof DELETE_POST_SUCCESS,
}

interface deletePostErrorAction {
  type: typeof DELETE_POST_ERROR,
  error: object
}

export type postActionTypes = searchPostAction |
  fetchPostAction |
  fetchPostSuccessAction |
  fetchPostErrorAction |
  createPostAction |
  createPostSuccessAction |
  createPostErrorAction |
  updatePostAction |
  updatePostSuccessAction |
  updatePostErrorAction |
  deletePostAction |
  deletePostSuccessAction |
  deletePostErrorAction