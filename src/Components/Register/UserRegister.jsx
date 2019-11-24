import React, { Component } from "react";
import loginbackground from "../db/images/thinking-women-login-background.svg";
import UserRegisterForm from "./../Forms/UserRegisterForm";
class UserRegister extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img src={loginbackground} alt="login-bg" />
        <h1> Register as a Traveler</h1>
        <UserRegisterForm />
      </React.Fragment>
    );
  }
}

export default UserRegister;
