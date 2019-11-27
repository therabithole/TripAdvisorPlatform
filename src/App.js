import React from "react";
import { Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";

// Navigation
import NavBar from "./Components/NavBar/NavBar";

// Pages
import HomePage from "./Components/Home/HomePage";
import Hotels from "./Components/Hotels/Hotels";
import Restaurants from "./Components/Restaurants/Restaurants";
import ThingsToDo from "./Components/Things to do/ThingstoDo";

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
function App()
 {
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
        <Route path="/tours" component={ThingsToDo} />
        <Route path="/users/login" component={UserLogin} />
        <Route path="/users/register" component={UserRegister} />
        <Route path="/Users" component={Users} />
        <Route path="/" component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
