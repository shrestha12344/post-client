import React, { useState } from "react";
import ReplyComment from "components/ReplyComment";

const Comment: React.FC<Props> = (props) => {
  const { comment, post } = props;
  const [commentMode, setCommentMode] = useState<boolean>(false);
  return (
    <>
      <div className="comment mb-1">
        <div>
          <img className="user-image" src={comment.user.photo} alt="User" />{" "}
        </div>
        <div className="ml-2">
          <h6>{comment.user.username}</h6>
          {comment.comment}
        </div>
      </div>
      {localStorage.getItem("user") && (
        <div className="comment-reply">
          <button
            type="button"
            className="btn btn-link"
            onClick={() => setCommentMode(!commentMode)}
          >
            Reply
          </button>
        </div>
      )}
      {localStorage.token && commentMode && (
        <ReplyComment post={post} parentComment={comment._id} toggle={()=>setCommentMode(false)} />
      )}
    </>
  );
};

type Props = { comment: any; post: string };

export default Comment;
