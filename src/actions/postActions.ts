import {
  SEARCH_POST,
  FETCH_POST,
  FETCH_POST_SUCCESS,
  FETCH_POST_ERROR,
  CREATE_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_ERROR,
  UPDATE_POST,
  UPDATE_POST_SUCCESS,
  UPDATE_POST_ERROR,
  DELETE_POST,
  DELETE_POST_SUCCESS,
  DELETE_POST_ERROR,
  post,
  postActionTypes
} from "./postTypes";

export const searchPost = (query: string): postActionTypes => {
  return {
    type: SEARCH_POST,
    query
  }
}

export const fetchPost = (): postActionTypes => {
  return {
    type: FETCH_POST
  }
}

export const fetchPostSuccess = (data: post[]): postActionTypes => {
  return {
    type: FETCH_POST_SUCCESS,
    data
  }
}

export const fetchPostError = (error: object): postActionTypes => {
  return {
    type: FETCH_POST_ERROR,
    error
  }
}

export const createPost = (data: post): postActionTypes => {
  return {
    type: CREATE_POST,
    data
  }
}

export const createPostSuccess = (): postActionTypes => {
  return {
    type: CREATE_POST_SUCCESS
  }
}

export const createPostError = (error: object): postActionTypes => {
  return {
    type: CREATE_POST_ERROR,
    error
  }
}

export const updatePost = (data: post): postActionTypes => {
  return {
    type: UPDATE_POST,
    data
  }
}

export const updatePostSuccess = (): postActionTypes => {
  return {
    type: UPDATE_POST_SUCCESS,
  }
}

export const updatePostError = (error: object): postActionTypes => {
  return {
    type: UPDATE_POST_ERROR,
    error
  }
}

export const deletePost = (_id: string): postActionTypes => {
  return {
    type: DELETE_POST,
    _id
  }
}

export const deletePostSuccess = (): postActionTypes => {
  return {
    type: DELETE_POST_SUCCESS,
  }
}

export const deletePostError = (error: object): postActionTypes => {
  return {
    type: DELETE_POST_ERROR,
    error
  }
}