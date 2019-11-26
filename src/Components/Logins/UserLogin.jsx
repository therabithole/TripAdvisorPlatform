import React, { Component } from "react";
import userIcon from "../db/images/userIcon.svg";
import UserLoginForm from "./../Forms/UserLoginForm";
import './LoginFormData.css'
class UserLogin extends Component {
  state = {};
  render() {
    return (
      <div class="row indexRegTop">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 LoginImg">
          <img src={userIcon} alt="works" height="50vh" />
          <div>
            <h3> Welcome to User Login Panel sign-in to book and manage your trip</h3>
            </div>

        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 Loginform">
            <UserLoginForm />
        </div>

      </div>

    );
  }
}

export default UserLogin;
