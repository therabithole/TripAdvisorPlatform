import React, { Component } from "react";
import signupteam from "../db/images/teamworking.svg";
import loggingteam from "../db/images/loggingteam.svg";
import loginbackground from "../db/images/thinking-women-login-background.svg";
class Vendors extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <section>
          <div className="m-4">
            Are you already a Member?
            <a href="/vendors/login"> Vendor Login</a>
            <img src={signupteam} />
          </div>
          <div className="m-4">
            Sign up and Grow your business with TripbyMap
            <a href="/vendors/register"> Vendor Register</a>
          </div>{" "}
          <img src={loggingteam} />
        </section>
      </React.Fragment>
    );
  }
}

export default Vendors;
