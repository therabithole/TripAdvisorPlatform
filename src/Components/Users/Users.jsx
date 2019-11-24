import React, { Component } from "react";
class Users extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="m-4">
            Are you an already existing user
            <a href="/users/login"> User Login</a>
          </div>
          <div className="m-4">
            Sign up and Book a travel ticket
            <a href="/users/register"> User Register</a>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Users;
