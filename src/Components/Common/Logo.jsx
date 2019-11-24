import React, { Component } from "react";
import Sitelogo from "../db/images/travel_logo.png";

class Logo extends Component {
  state = {};
  render() {
    return <img src={Sitelogo} height="60px" alt="site-logo" />;
  }
}

export default Logo;
