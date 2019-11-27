import React, { Component } from "react";
import userIcon from "../db/images/userIcon.svg";
import UserLoginForm from "./../Forms/UserLoginForm";

class UserLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <img src={userIcon} alt="works" height="80px" />
          <h1> Welcome to User Login Panel</h1>
          <h2> Sign-in to book and manage your trip</h2>
        </section>
        <UserLoginForm />
      </React.Fragment>
    );
  }
}

export default UserLogin;
