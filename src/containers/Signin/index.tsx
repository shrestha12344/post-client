import React, { useState, useEffect } from "react";
import { connect, ConnectedProps } from "react-redux";
import { compose } from "redux";
import { History } from "history";
import { GoogleLogin } from "react-google-login";
import _ from "lodash";
import authSchema from "schemas/auth";
import { userData as userDataType } from "actions/authTypes";
import { rootState, dispatchType } from "store";
import { signin, googleSignin } from "actions/authActions";

const Signin: React.FC<Props> = (props) => {
  const {
    dispatch,
    history,
    isSignedin,
    signinLoading,
    signinError: _signinError,
  } = props;
  useEffect(() => {
    if (localStorage.token) {
      history.push("/");
    }
  }, [isSignedin]);

  const onSuccess = (response: any): void => {
    const googleData = {
      email: response.profileObj.email,
      password: response.profileObj.email,
      username: response.profileObj.name,
      photo: response.profileObj.imageUrl,
      information: "Your password is same as your email please change it",
    };
    dispatch(googleSignin(googleData));
  };
  
  const onFailure = (response: { error: string }): void => {
    setSigninError(true);
    setErrorMessage(response.error);
  };

  const [signinError, setSigninError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [userData, setUserData] = useState<userDataType>({
    email: "",
    password: "",
  });

  interface errorTypes {
    email?: "";
    password?: "";
  }
  const [errors, setErrors] = useState<errorTypes>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleClick = (): void => {
    const result = authSchema.validate(userData, { abortEarly: false });
    if (result.error) {
      const groupedErrors = _.groupBy(result.error.details, (f) => f.path[0]);
      const newErrors = _.mapValues(groupedErrors, (e) => e[0].message);
      setErrors(newErrors);
    } else {
      setErrors({ email: "", password: "" });
      dispatch(signin(userData));
    }
  };

  return (
    <div className="container">
      <div className="auth-container">
        <div className="col-md-4 col-sm-12">
          {signinError && errorMessage && (
            <div className="alert alert-danger" role="alert">
              {errorMessage}
            </div>
          )}
          {!_.isEmpty(_signinError) && (
            <div className="alert alert-danger" role="alert">
              {_signinError}
            </div>
          )}
          <div className="card">
            <h5 className="card-header text-center">Sign in</h5>
            <div className="card-body">
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? "is-invalid" : ""}`}
                  id="email"
                  name="email"
                  value={userData.email}
                  onChange={(e) => handleChange(e)}
                />
                {errors.email && (
                  <small className="form-text invalid-feedback">
                    {errors.email}
                  </small>
                )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className={`form-control ${
                    errors.password ? "is-invalid" : ""
                  }`}
                  id="password"
                  name="password"
                  value={userData.password}
                  onChange={(e) => handleChange(e)}
                />
                {errors.password && (
                  <small className="form-text invalid-feedback">
                    {errors.password}
                  </small>
                )}
              </div>
              <button
                className="btn btn-primary btn-block mb-3"
                onClick={handleClick}
                disabled={signinLoading}
              >
                {signinLoading ? (
                  <span
                    className="spinner-grow spinner-grow-sm"
                    role="status"
                    aria-hidden="true"
                  ></span>
                ) : (
                  "Sign in"
                )}
              </button>
              <div className="text-center">
                <GoogleLogin
                  clientId="563297060118-jnhb2vjh2qp2gb9qrktb7h59aeds947i.apps.googleusercontent.com"
                  buttonText="Sign in with Google"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: rootState) => ({
  isSignedin: state.auth.isSignedin,
  signinLoading: state.auth.signinLoading,
  signinError: state.auth.signinError,
});

function mapDispatchToProps(dispatch: dispatchType) {
  return {
    dispatch,
  };
}

const connector = connect(mapStateToProps, mapDispatchToProps);
type PropsFromRedux = ConnectedProps<typeof connector>;
type Props = PropsFromRedux & { history: History };

export default compose(connector)(Signin);
