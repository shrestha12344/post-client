export const FETCH_COMMENT = "FETCH_COMMENT"
export const FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS"
export const FETCH_COMMENT_ERROR = "FETCH_COMMENT_ERROR"
export const CREATE_COMMENT = "CREATE_COMMENT"
export const CREATE_COMMENT_SUCCESS = "CREATE_COMMENT_SUCCESS"
export const CREATE_COMMENT_ERROR = "CREATE_COMMENT_ERROR"

export interface comment {
  _id?: string
  user?: string
  comment?: string
  post?: string
  parentComment?: string
  date?: string
}

interface fetchCommentAction {
  type: typeof FETCH_COMMENT,
}

interface fetchCommentSuccessAction {
  type: typeof FETCH_COMMENT_SUCCESS,
  data: comment[]
}

interface fetchCommentErrorAction {
  type: typeof FETCH_COMMENT_ERROR,
  error: object
}

interface createCommentAction {
  type: typeof CREATE_COMMENT,
  data: comment
}

interface createCommentSuccessAction {
  type: typeof CREATE_COMMENT_SUCCESS
}

interface createCommentErrorAction {
  type: typeof CREATE_COMMENT_ERROR,
  error: object
}

export type commentActionTypes = fetchCommentAction |
  fetchCommentSuccessAction |
  fetchCommentErrorAction |
  createCommentAction |
  createCommentSuccessAction |
  createCommentErrorAction 