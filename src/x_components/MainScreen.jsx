import React, { Component } from "react";
import { Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import Toggle from "./Toggle";

class MainScreen extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <main>
          <section>
            <div>
              <h1> Welcome to Supplier Panel</h1>
              <h2> Sign In to your store account to continue</h2>{" "}
            </div>
            <Toggle />
            <Route path="/login" component={LoginForm} />
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default MainScreen;

/*
import { Route } from "react-router-dom";
import LoginForm from "./LoginForm";
import RegistrationForm from "./RegistrationForm";



<Route path="/signin" component={LoginForm} />
<Route path="/create-account" component={RegistrationForm} />
            
*/
