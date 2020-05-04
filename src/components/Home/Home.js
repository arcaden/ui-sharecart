import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Cart from "./Cart";
import { connect } from "react-redux";
import { fetchCarts } from "../../actions/actions";

class Home extends Component {
  handleFetch = (event) => {
    event.preventDefault();
    this.props.getCarts(this.props.user);
  };

  componentDidMount() {
    this.props.getCarts(this.props.user);
  }

  render() {
    let cards;
    if (this.props.carts) {
      cards = this.props.carts;
    } else {
      cards = [];
    }
    const classes = this.props.classes;
    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <ShoppingCartIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" noWrap>
              ShareCart
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Typography
                component="h1"
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Carts
              </Typography>
              <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                  <Grid item>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={this.handleFetch}
                    >
                      Refresh
                    </Button>
                  </Grid>
                </Grid>
              </div>
            </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={8}>
              {cards.map((cart) => (
                <Cart className={classes.card} cart={cart} />
              ))}
            </Grid>
          </Container>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography
            variant="subtitle1"
            align="center"
            color="textSecondary"
            component="p"
          >
            Made by Glen Wu
          </Typography>
        </footer>
        {/* End footer */}
      </React.Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getCarts: (user) => dispatch(fetchCarts(user)),
});

const mapStateToProps = (state) => {
  return {
    user: state.login.user,
    carts: state.cart.carts,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
