import React, { Component } from "react";
import "../../scss/NavBar.css"
import Logo from "./Logo";
class NavBar extends Component {
  state = {};
  render() {
    return (
      <header>
        <Logo />
        <nav className="main-navigation">
          <ul className="main-menu" >
            {/*1) use Link to insted of anchor tag 
              2)  use window.location.href or this.props.history.push
            */}
            <li>
              <a href="/"> Home</a>
            </li>
            <li>
              <a href="/hotels"> Hotels</a>
            </li>

            <li>
              <a href="/restaurants"> Restaurants</a>
            </li>

            <li>
              <a href="/things-to-do"> Things to Do</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="features-menu">
            <li>
              <a href="/trips"> Trips</a>
            </li>
            <li>
              <a href="/inbox"> Inbox</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="user-menu">
            <li>
              <a href="/users"> Users</a>
            </li>
          </ul>
        </nav>
        <nav className="vendor-menu">
          <ul>
            <li>
              <a href="/vendors"> Vendors</a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default NavBar;
