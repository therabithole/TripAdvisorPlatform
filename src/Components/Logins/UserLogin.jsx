import React, { Component } from "react";

import UserLoginForm from "./../Forms/UserLoginForm";
class UserLogin extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <h1> Welcome to User Login Panel</h1>
          <h2> Sign-in to book and manage your trip</h2>
        </section>
        <UserLoginForm />
      </React.Fragment>
    );
  }
}

export default UserLogin;
