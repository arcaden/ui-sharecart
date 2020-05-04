import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Home from "./Home";

const styles = (theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: theme.spacing(2),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
});

function StyledHome(props) {
  const { classes } = props;
  console.log(classes);
  return <Home classes={classes} />;
}

StyledHome.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StyledHome);
