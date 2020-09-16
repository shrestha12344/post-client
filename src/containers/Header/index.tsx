import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAuthorizationToken } from "utils/authorizationToken";
import { searchPost } from "actions/postActions";
import querySchema from "schemas/search";

const Header: React.FC<Props> = (props) => {
  const signout = () => {
    localStorage.clear();
    setAuthorizationToken(null);
    window.location.reload();
  };

  const dispatch = useDispatch();

  const [query, setQuery] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setQuery(e.target.value);
  };

  const handleClick = (): void => {
    const result = querySchema.validate({ query: query });
    if (result.error) {
      setError(result.error.details[0].message);
    } else {
      setError("");
      dispatch(dispatch(searchPost(query)));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          <Link to="/">Post Client</Link>
        </span>
        <div className="col-md-4 col-sm-12 input-group">
          <input
            type="text"
            className={`form-control ${error ? "is-invalid" : ""}`}
            placeholder="Search posts"
            name="query"
            value={query}
            onChange={(e) => handleChange(e)}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={handleClick}
            >
              Search
            </button>
          </div>
        </div>
        <form className="form-inline">
          {!localStorage.token ? (
            <>
              <Link to="/signin">
                <button className="btn btn-primary mr-2" type="button">
                  Sign in
                </button>
              </Link>
              <Link to="/signup">
                <button className="btn btn-primary" type="button">
                  Sign up
                </button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/profile">
                <button className="btn btn-primary mr-2" type="button">
                  Profile
                </button>
              </Link>
              <button
                className="btn btn-secondary mr-2"
                type="button"
                onClick={signout}
              >
                Sign out
              </button>
            </>
          )}
        </form>
      </nav>
    </>
  );
};
type Props = {};

export default Header;
