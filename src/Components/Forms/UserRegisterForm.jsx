import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/Form";

import './regFormData.css'
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
      <div className="regFormdata">
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
    </div>
    );
  }
}

export default UserRegisterForm;
