import React, { Component } from "react";
import loginbackground from "../db/images/thinking-women-login-background.svg";
import UserRegisterForm from "./../Forms/UserRegisterForm";
import './userRegister.css'
class UserRegister extends Component {
  state = {};
  render() {
    return (
      <div class="row indexRegTop">
        <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 RegisterImage">
          <img src={loginbackground} alt="login-bg" />
        </div>
        <div class="col-lg-5 col-md-6 col-sm-12 col-xs-12 UserRegisterationForm">
            <UserRegisterForm />
        </div>

      </div>

    );
  }
}

export default UserRegister;
