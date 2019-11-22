import React, { Component } from "react";
import UserRegisterForm from "./../Forms/UserRegisterForm";
class UserRegister extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1> Register as a Traveler</h1>
        <UserRegisterForm />
      </React.Fragment>
    );
  }
}

export default UserRegister;
