import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import StyledHome from "./Home/StyledHome";

const RequireAuth = ({ match: { path }, isAuthenticated }) =>
  !isAuthenticated ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <Route path="/home" component={StyledHome} />
    </div>
  );

export default connect((state) => ({
  isAuthenticated: state.login.user,
}))(RequireAuth);
