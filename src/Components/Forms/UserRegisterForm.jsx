import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

class UserRegisterForm extends Form {
  state = {
    data: {
      userName: "",
      userEmail: "",
      userPassword: ""
    },
    errors: {}
  };

  schema = {
    userName: Joi.string().required(),
    userEmail: Joi.string()
      .email()
      .required(),
    userPassword: Joi.string()
      .min(4)
      .required()
  };

  onSubmit = () => {
    /* 3*/ console.log(" Handle Submitted");
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderInput("userName", "User Name: ", "Enter a unique username")}
        {this.renderInput(
          "userEmail",
          "User Email: ",
          "Enter your preferred email"
        )}
        {this.renderInput(
          "userPassword",
          "Password: ",
          "Enter your password",
          "password"
        )}
        {this.FormButton("Register User")}
      </form>
    );
  }
}

export default UserRegisterForm;
