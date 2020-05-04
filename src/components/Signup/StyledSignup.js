import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SignUp from "./SignUp";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

function StyledSignup(props) {
  const { classes } = props;
  console.log(classes);
  return <SignUp classes={classes} />;
}

StyledSignup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledSignup);
