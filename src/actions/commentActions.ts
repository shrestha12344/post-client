import {
  FETCH_COMMENT,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_ERROR,
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  comment,
  commentActionTypes
} from "./commentTypes"

export const fetchComment = (): commentActionTypes => {
  return {
    type: FETCH_COMMENT
  }
}

export const fetchCommentSuccess = (data: comment[]): commentActionTypes => {
  return {
    type: FETCH_COMMENT_SUCCESS,
    data
  }
}

export const fetchCommentError = (error: object): commentActionTypes => {
  return {
    type: FETCH_COMMENT_ERROR,
    error
  }
}

export const createComment = (data: comment): commentActionTypes => {
  return {
    type: CREATE_COMMENT,
    data
  }
}

export const createCommentSuccess = (): commentActionTypes => {
  return {
    type: CREATE_COMMENT_SUCCESS
  }
}

export const createCommentError = (error: object): commentActionTypes => {
  return {
    type: CREATE_COMMENT_ERROR,
    error
  }
}