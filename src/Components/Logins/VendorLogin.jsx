import React, { Component } from "react";
import vendorIcon from "../db/images/vendorIcon.svg";
import VendorLoginForm from "../Forms/VendorLoginForm";

class VendorLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <img src={vendorIcon} alt="works" height="80px" />
          <h1> Welcome to Supplier Panel</h1>
          <h2> Sign-in your store account to continue</h2>
        </section>
        <VendorLoginForm />
      </React.Fragment>
    );
  }
}

export default VendorLogin;
