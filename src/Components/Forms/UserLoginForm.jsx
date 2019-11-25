import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";
class UserLoginForm extends Form {
  state = {
    data: { userEmail: "", userPassword: "" },
    errors: {}
  };

  /* 13 */ schema = {
    userEmail: Joi.string()
      .required()
      .email()
      .label("User Email"),
    userPassword: Joi.string()
      .required()
      .label("Password")
  };

  onSubmit = () => {
    /* 3*/ console.log(" Handle Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("userEmail", "User Email: ", "Enter your email")}
        {this.renderInput(
          "userPassword",
          "Password: ",
          "Enter your password",
          "password"
        )}

        {this.FormButton("Login User")}
      </form>
    );
  }
}

export default UserLoginForm;
