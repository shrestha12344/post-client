import {
  FETCH_COMMENT,
  FETCH_COMMENT_SUCCESS,
  FETCH_COMMENT_ERROR,
  CREATE_COMMENT,
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_ERROR,
  comment,
  commentActionTypes
} from "actions/commentTypes";

export interface InitialState {
  fetchCommentLoading: boolean,
  fetchCommentSuccess: boolean,
  fetchCommentError: object,
  createCommentLoading: boolean,
  createCommentSuccess: boolean,
  createCommentError: object,
  comments?: comment[]
}

const initialState: InitialState = {
  fetchCommentLoading: false,
  fetchCommentSuccess: false,
  fetchCommentError: {},
  createCommentLoading: false,
  createCommentSuccess: false,
  createCommentError: {},
  comments: []
}

const commentReducer = (state: InitialState = initialState, action: commentActionTypes): InitialState => {
  switch (action.type) {
    case FETCH_COMMENT:
      return {
        ...state, fetchCommentLoading: true, fetchCommentSuccess: false, fetchCommentError: {}
      }
    case FETCH_COMMENT_SUCCESS:
      return {
        ...state, fetchCommentLoading: false, fetchCommentSuccess: true, fetchCommentError: {}, comments: action.data
      }
    case FETCH_COMMENT_ERROR:
      return {
        ...state, fetchCommentLoading: false, fetchCommentSuccess: false, fetchCommentError: action.error
      }
    case CREATE_COMMENT:
      return {
        ...state, createCommentLoading: true, createCommentSuccess: false, createCommentError: {}
      }
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state, createCommentLoading: false, createCommentSuccess: true, createCommentError: {}
      }
    case CREATE_COMMENT_ERROR:
      return {
        ...state, createCommentLoading: false, createCommentSuccess: false, createCommentError: action.error
      }
    default:
      return state
  }
}

export default commentReducer;