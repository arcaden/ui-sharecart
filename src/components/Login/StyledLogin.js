import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SignUp from "./Login";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  error: {
    margin: theme.spacing(0, 0, 1),
  },
});

function StyledLogin(props) {
  const { classes } = props;
  return <SignUp classes={classes} />;
}

StyledLogin.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledLogin);
