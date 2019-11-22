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
import SupplierLogin from "./Components/Logins/SupplierLogin";

// Registers
import UserRegister from "./Components/Register/UserRegister";
import SupplierRegister from "./Components/Register/SupplierRegister";

//    <Route path="/hotels" component={Hotels} />
import "./App.css";
import "./fonts.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route path="/suppliers/login" component={SupplierLogin} />
        <Route path="/suppliers/register" component={SupplierRegister} />
        <Route
          path="/hotels"
          render={props => <Hotels sortBy="Best Value" {...props} />}
        />
        <Route path="/restaurants" component={Restaurants} />
        <Route path="/Attractions" component={ThingsToDo} />
        <Route path="/users/login" component={UserLogin} />
        <Route path="/users/register" component={UserRegister} />
        <Route path="/" component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
