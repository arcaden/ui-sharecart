import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";
import { loginUser } from "../../actions/actions";
import Alert from "@material-ui/lab/Alert";
import { Redirect } from "react-router-dom";

class Login extends Component {
  state = {
    email: "",
    password: "",
    user: null,
    error: null,
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.loginUser(this.state);
  };

  componentWillReceiveProps(newProps) {
    if (newProps.user != this.props.user) {
      this.setState({ user: newProps.user });
    }
    if (newProps.error != this.props.error) {
      this.setState({ error: newProps.error });
    }
  }

  render() {
    const classes = this.props.classes;
    let errorAlert;
    if (this.state.error) {
      errorAlert = (
        <Grid item xs={12}>
          <Alert severity="error" className={classes.submit}>
            Invalid Credentials!
          </Alert>
        </Grid>
      );
    }
    if (this.state.user === null) {
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form
              className={classes.form}
              noValidate
              onSubmit={this.handleSubmit}
            >
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="email"
                name="email"
                autoComplete="email"
                autoFocus
                onChange={this.handleChange}
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={this.handleChange}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.error}
              >
                Sign In
              </Button>
              <Grid container>
                {errorAlert}
                <Grid item>
                  <Link component={RouterLink} to="/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Container>
      );
    } else {
      return (
        <Redirect
          to={{
            pathname: "/home",
          }}
        />
      );
    }
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginUser: (user) => dispatch(loginUser(user)),
});

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    error: state.login.error,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
