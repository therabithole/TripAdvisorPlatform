import React from "react";
import { Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";

// Navigation
import NavBar from "./Components/_commonUI/NavBar";

// Pages
import HomePage from "./Components/HomePage";

import Hotels from "./Components/_Products/Hotels";
import Restaurants from "./Components/_Products/Restaurants";
import ThingsToDo from "./Components/_Products/ThingsToDo";

// Logins
import UserLogin from "./Components/Logins/UserLogin";
import VendorLogin from "./Components/Logins/VendorLogin";

// Registers
import UserRegister from "./Components/Register/UserRegister";
import VendorRegister from "./Components/Register/VendorRegister";
import Vendors from "./Components/Vendors/Vendors";
//    <Route path="/hotels" component={Hotels} />
import "./App.css";
import "./fonts.css";
import Users from "./Components/Users/Users";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/vendors/login" component={VendorLogin} />
        <Route path="/vendors/register" component={VendorRegister} />
        <Route path="/vendors" component={Vendors} />

        <Route
          path="/hotels"
          render={props => <Hotels sortBy="Best Value" {...props} />}
        />

        <Route path="/restaurants" component={Restaurants} />
        <Route path="/things-to-do" component={ThingsToDo} />
        <Route path="/users/login" component={UserLogin} />
        <Route path="/users/register" component={UserRegister} />
        <Route path="/Users" component={Users} />
        <Route path="/" component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
