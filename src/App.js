import React from "react";
import { Route, Switch } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.css";

// Navigation
import NavBar from "./Components/NavBar/NavBar";

//Frontend
import HomePage from "./Components/Main/Home/HomePage";
import Hotels from "./Components/Main/Hotels/Hotels";
import Restaurants from "./Components/Main/Restaurants/Restaurants";
import ThingsToDo from "./Components/Main/Things to do/ThingstoDo";

// User_Backend
import Login from "./Components/Main/Login/Login";
import Register from "./Components/Main/Register/Register";

//Supplier Backend
import SupplierLogin from "./Components/Main/SupplierLogin/SupplierLogin";
import SupplierRegister from "./Components/SupplierView/Pages/Register/SupplierRegister";

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
        <Route path="/users/login" component={Login} />
        <Route path="/users/register" component={Register} />
        <Route path="/" component={HomePage} />
      </Switch>
    </React.Fragment>
  );
}
export default App;
