import React from "react";
import { withRouter } from "react-router";
import { Switch, Route, Redirect } from "react-router-dom";
import "./app.scss";
import Header from "./containers/Header";
import HomePage from "./containers/HomePage";
import Signin from "./containers/Signin";
import Signup from "./containers/Signup";
import Profile from "./containers/Profile";

const App: React.FC<any> = (props) => {
  const { history } = props;
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/signin">
          <Signin history={history} />
        </Route>
        <Route exact path="/signup">
          <Signup history={history} />
        </Route>
        <Route exact path="/profile">
          {localStorage.token ? <Profile /> : <Redirect to="/signin" />}
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </>
  );
};

export default withRouter(App);
