import React, { Component } from "react";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import MaterialTable from "material-table";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.theme = createMuiTheme({
      palette: {
        primary: {
          main: "#3f50b5",
        },
        secondary: {
          main: "#f44336",
        },
      },
    });
  }

  render() {
    return (
      <MuiThemeProvider theme={this.theme}>
        <MaterialTable
          style={{ width: "100%", marginTop: "20px" }}
          title={this.props.cart.store_name}
          columns={[
            {
              title: "Name",
              field: "name",
            },
            { title: "Requested By", field: "requested_by" },
            {
              title: "Price",
              field: "price",
              type: "numeric",
            },
          ]}
          data={[
            {
              name: "Apples",
              price: 4.99,
              requested_by: "Jason",
            },
            {
              name: "Oranges",
              price: 3.99,
              requested_by: "Jason",
            },
          ]}
          options={{
            selection: true,
            search: false,
            showTextRowsSelected: false,
            draggable: false,
          }}
        />
      </MuiThemeProvider>
    );
  }
}

export default Cart;
