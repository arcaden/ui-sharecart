import React from "react";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "../App";
import StyledLogin from "../components/Login/StyledLogin";
import StyledSignup from "../components/Signup/StyledSignup";
import { Provider } from "react-redux";
import RequireAuth from "./RequireAuth";
import NoMatch from "./NoMatch";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/signup" component={StyledSignup} />
        <Route path="/login" component={StyledLogin} />
        <Route path="/home" component={RequireAuth} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};

export default Root;
