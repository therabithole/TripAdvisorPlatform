import React, { Component } from "react";
import SupplierLoginForm from "../Forms/SupplierLoginForm";

class SupplierLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <h1> Welcome to Supplier Panel</h1>
          <h2> Sign-in your store account to continue</h2>
        </section>
        <SupplierLoginForm />
      </React.Fragment>
    );
  }
}

export default SupplierLogin;
