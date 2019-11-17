import React, { Component } from "react";
import SupplierLoginForm from "./SupplierLoginForm";
import StaticSupplierLogin from "./StaticSupplierLogin";

class SupplierLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <StaticSupplierLogin />
        <SupplierLoginForm />
      </React.Fragment>
    );
  }
}

export default SupplierLogin;
