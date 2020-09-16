import React, { useEffect, useState } from "react";
import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";
import _ from "lodash";
import { rootState, dispatchType } from "store";
import { fetchPost, createPost } from "actions/postActions";
import { fetchComment } from "actions/commentActions";
import postSchema from "schemas/post";
import Post from "components/Post";

const HomePage: React.FC<Props> = (props) => {
  const {
    dispatch,
    posts,
    fetchPostLoading,
    fetchPostError,
    createPostLoading,
  } = props;
  useEffect(() => {
    dispatch(fetchPost());
    dispatch(fetchComment());
  }, []);

  const [post, setPost] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setPost(e.target.value);
  };

  const handleClick = (): void => {
    const result = postSchema.validate({ post: post });
    if (result.error) {
      setError(result.error.details[0].message);
    } else {
      setPost("");
      setError("");
      dispatch(
        createPost({ user: localStorage.getItem("user"), content: post })
      );
    }
  };

  return (
    <>
      <div className="container post-container">
        {localStorage.token && (
          <div className="post mb-3">
            <div className="post-body mb-2">
              <textarea
                className={`form-control ${error ? "is-invalid" : ""}`}
                placeholder="Write a post..."
                rows={3}
                name="post"
                value={post}
                onChange={(e) => handleChange(e)}
              ></textarea>
              {error && (
                <small className="form-text text-danger">{error}</small>
              )}
            </div>
            <div className="post-button">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleClick}
              >
                {createPostLoading ? (
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Post"
                )}
              </button>
            </div>
          </div>
        )}
        <h1 className="display-4">
          {fetchPostLoading ? "Loading..." : "All Posts"}
        </h1>
        <hr className="my-3"></hr>
        {typeof posts === "object" && !_.isEmpty(posts) ? (
          _.map(posts, (post) => <Post key={post._id} post={post} />)
        ) : (
          <p className="font-weight-light">No posts</p>
        )}
      </div>
    </>
  );
};

const mapStateToProps = (state: rootState) => ({
  posts: state.post.posts,
  fetchPostLoading: state.post.fetchPostLoading,
  fetchPostError: state.post.fetchPostError,
  createPostLoading: state.post.createPostLoading,
});

function mapDispatchToProps(dispatch: dispatchType) {
  return {
    dispatch,
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

type Props = PropsFromRedux & {};

export default compose(connector)(HomePage);
