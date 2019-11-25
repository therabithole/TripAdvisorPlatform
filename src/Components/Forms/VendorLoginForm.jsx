import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class VendorLoginForm extends Form {
  /* replace state : {} object with data  17 - code review - for reusable components as*/
  /*  19 - replace all state.account with state.data */
  state = {
    /* 4*/ data: { /* 7 */ vendorEmail: "", vendorPassword: "" },
    /* 9 */ errors: {}
  };

  /* 13 */ schema = {
    vendorEmail: Joi.string()
      .required()
      .email()
      .label("Email"),
    vendorPassword: Joi.string()
      .required()
      .label("Password")
  };

  onSubmit = () => {
    /* 3*/ console.log(" Handle Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput(
          "vendorEmail",
          "Business Email: ",
          "Enter your business email"
        )}
        {this.renderInput(
          "vendorPassword",
          "Password: ",
          "Enter your password",
          "password"
        )}

        {this.FormButton("Login to Dashboard")}
      </form>
    );
  }
}

export default VendorLoginForm;
