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
} from "actions/postTypes";

export interface InitialState {
  fetchPostLoading: boolean,
  fetchPostSuccess: boolean,
  fetchPostError: object,
  createPostLoading: boolean,
  createPostSuccess: boolean,
  createPostError: object,
  updatePostLoading: boolean,
  updatePostSuccess: boolean,
  updatePostError: object,
  deletePostLoading: boolean,
  deletePostSuccess: boolean,
  deletePostError: object,
  post?: post,
  posts?: post[]
}

const initialState: InitialState = {
  fetchPostLoading: false,
  fetchPostSuccess: false,
  fetchPostError: {},
  createPostLoading: false,
  createPostSuccess: false,
  createPostError: {},
  updatePostLoading: false,
  updatePostSuccess: false,
  updatePostError: {},
  deletePostLoading: false,
  deletePostSuccess: false,
  deletePostError: {},
  post: {},
  posts: []
}

const postReducer = (state: InitialState = initialState, action: postActionTypes): InitialState => {
  switch (action.type) {
    case SEARCH_POST:
      return {
        ...state, fetchPostLoading: true, fetchPostSuccess: false, fetchPostError: {}
      }
    case FETCH_POST:
      return {
        ...state, fetchPostLoading: true, fetchPostSuccess: false, fetchPostError: {}
      }
    case FETCH_POST_SUCCESS:
      return {
        ...state, fetchPostLoading: false, fetchPostSuccess: true, fetchPostError: {}, posts: action.data
      }
    case FETCH_POST_ERROR:
      return {
        ...state, fetchPostLoading: false, fetchPostSuccess: false, fetchPostError: action.error
      }
    case CREATE_POST:
      return {
        ...state, createPostLoading: true, createPostSuccess: false, createPostError: {}
      }
    case CREATE_POST_SUCCESS:
      return {
        ...state, createPostLoading: false, createPostSuccess: true, createPostError: {}
      }
    case CREATE_POST_ERROR:
      return {
        ...state, createPostLoading: false, createPostSuccess: false, createPostError: action.error
      }
    case UPDATE_POST:
      return {
        ...state, updatePostLoading: true, updatePostSuccess: false, updatePostError: {}
      }
    case UPDATE_POST_SUCCESS:
      return {
        ...state, updatePostLoading: false, updatePostSuccess: true, updatePostError: {}
      }
    case UPDATE_POST_ERROR:
      return {
        ...state, updatePostLoading: false, updatePostSuccess: false, updatePostError: action.error
      }
    case DELETE_POST:
      return {
        ...state, deletePostLoading: true, deletePostSuccess: false, deletePostError: {}
      }
    case DELETE_POST_SUCCESS:
      return {
        ...state, deletePostLoading: false, deletePostSuccess: true, deletePostError: {}
      }
    case DELETE_POST_ERROR:
      return {
        ...state, deletePostLoading: false, deletePostSuccess: false, deletePostError: action.error
      }
    default:
      return state
  }
}

export default postReducer;