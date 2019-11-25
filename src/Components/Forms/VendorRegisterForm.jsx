import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
class VendorRegisterForm extends Form {
  state = {
    data: {
      vendorName: "",
      vendorEmail: "",
      vendorPassword: ""
    },
    errors: {}
  };

  schema = {
    vendorName: Joi.string().required(),
    vendorEmail: Joi.string()
      .email()
      .required(),
    vendorPassword: Joi.string()
      .min(4)
      .required()
  };

  onSubmit = () => {
    /* 3*/ console.log(" Handle Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput(
          "VendorName",
          "Business Name: ",
          "Enter your business name"
        )}
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

        {this.FormButton("Register as a business")}
      </form>
    );
  }
}

export default VendorRegisterForm;
