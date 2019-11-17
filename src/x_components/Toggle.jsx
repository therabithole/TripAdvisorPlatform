import React, { Component } from "react";
import { Link } from "react-router-dom";
class Toggle extends Component {
  state = {};
  render() {
    return (
      <nav>
        <Link to="/login"> Sign In</Link> <span> / </span>
        <Link to="/create-account"> Create Account</Link>
      </nav>
    );
  }
}

export default Toggle;
