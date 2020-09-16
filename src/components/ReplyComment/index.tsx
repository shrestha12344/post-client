import React, { useState } from "react";
import { useDispatch } from "react-redux";
import commentSchema from "schemas/comment";
import { createComment } from "actions/commentActions";

const ReplyComment: React.FC<Props> = (props) => {
  const { post, parentComment, toggle } = props;

  const dispatch = useDispatch();

  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setComment(e.target.value);
  };

  const userId = localStorage.getItem("user") || "";

  const handleClick = (): void => {
    const result = commentSchema.validate({ comment: comment });
    if (result.error) {
      setError(result.error.details[0].message);
    } else {
      setComment("");
      setError("");
      toggle();
      dispatch(
        createComment({
          user: userId,
          comment: comment,
          post: post,
          parentComment: parentComment,
        })
      );
    }
  };
  return (
    <div className="card-comment">
      <div className="comment-body">
        <input
          className={`form-control mt-2 mb-2 ${error ? "is-invalid" : ""}`}
          name="comment"
          value={comment}
          onChange={(e) => handleChange(e)}
        />
        {error && <small className="form-text text-danger">{error}</small>}
      </div>
      <div className="comment-button">
        <button type="button" className="btn btn-primary" onClick={handleClick}>
          Comment
        </button>
      </div>
    </div>
  );
};
type Props = { post: string; parentComment?: string; toggle: Function };

export default ReplyComment;
