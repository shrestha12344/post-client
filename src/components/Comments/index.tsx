import React from "react";
import _ from "lodash";
import Comment from "./Comment";

const Comments: React.FC<Props> = (props) => {
  const { comment, comments, post } = props;
  const childComments = () =>
    _.filter(comments, { parentComment: comment._id });
  return (
    <>
      <Comment key={comment._id} comment={comment} post={post}></Comment>
      {_.map(childComments(), (childComment) => (
        <div  key={childComment._id} className="child-comment">
          <Comments comment={childComment} comments={comments} post={post} />
        </div>
      ))}
    </>
  );
};

type Props = { comment: any; comments: any; post: string };

export default Comments;
