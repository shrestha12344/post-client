import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import moment from "moment";
import _ from "lodash";
import { deletePost } from "actions/postActions";
import ReplyComment from "components/ReplyComment";
import Comments from "components/Comments";
import postSchema from "schemas/post";
import { updatePost } from "actions/postActions";

import { InitialState as authState } from "reducers/authReducer";
import { InitialState as commentState } from "reducers/commentReducer";
import { InitialState as postState } from "reducers/postReducer";
import { InitialState as profileState } from "reducers/profileReducer";

interface RootState {
  auth: authState;
  comment: commentState;
  post: postState;
  profile: profileState;
}

const Post: React.FC<Props> = (props) => {
  const { post } = props;
  const dispatch = useDispatch();

  const selectComments = (state: RootState) =>
    _.filter(state.comment.comments, { post: post._id });

  const comments = useSelector(selectComments);

  const onDelete = (_id: string): void => {
    dispatch(deletePost(_id));
  };

  const [editMode, setEditMode] = useState<boolean>(false);
  const [commentMode, setCommentMode] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const [postContent, setPostContent] = useState<string>(post.content);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setPostContent(e.target.value);
  };

  const handleClick = (): void => {
    const result = postSchema.validate({ post: postContent });
    if (result.error) {
      setError(result.error.details[0].message);
    } else {
      setError("");
      setEditMode(false);
      dispatch(updatePost({ _id: post._id, content: postContent }));
    }
  };

  return (
    <>
      <div className="card bg-light mb-3">
        <div className="card-body">
          <div className="user-title">
            <img className="user-image" src={post.user.photo} alt="User" />
            <div className="ml-2">
              <h5 className="card-title">{post.user.username}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                {moment(post.date).format("hh:mm A | M/DD/YYYY ")}
              </h6>
            </div>
          </div>
          {editMode ? (
            <textarea
              className={`form-control mt-2 mb-2 ${error ? "is-invalid" : ""}`}
              rows={5}
              name="post"
              value={postContent}
              onChange={(e) => handleChange(e)}
            ></textarea>
          ) : (
            <p className="card-text mt-2 mb-2">{postContent}</p>
          )}
          {error && <small className="form-text text-danger">{error}</small>}
          {!_.isEmpty(comments) && <hr className="my-3"></hr>}
          {!_.isEmpty(comments) &&
            _.map(
              comments,
              (comment) =>
                !comment.parentComment && (
                  <Comments
                    key={comment._id}
                    comment={comment}
                    comments={comments}
                    post={post._id}
                  />
                )
            )}
          <hr className="my-3"></hr>
          <div className="card-edit pb-2">
            {localStorage.getItem("user") && (
              <button
                type="button"
                className="btn btn-link"
                onClick={() => setCommentMode(!commentMode)}
              >
                Comment
              </button>
            )}
            {localStorage.getItem("user") === post.user._id && (
              <>
                {editMode ? (
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => handleClick()}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-link"
                    onClick={() => setEditMode(true)}
                  >
                    Edit
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-link text-danger"
                  onClick={() => onDelete(post._id)}
                >
                  Delete
                </button>
              </>
            )}
          </div>
          {localStorage.token && commentMode && (
            <ReplyComment
              post={post._id}
              toggle={() => setCommentMode(false)}
            />
          )}
        </div>
      </div>
    </>
  );
};
type Props = { post: any };

export default Post;
