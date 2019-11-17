import React, { Component } from "react";
class SupplierNavigation extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <a href="/suppliers/bookings"> Bookings</a>
          </li>
          <li>
            <a href="/suppliers/products"> Products</a>
          </li>
          <li>
            <a href="/suppliers/availablity"> Availablity</a>
          </li>
          <li>
            <a href="/suppliers/reports"> Reports</a>
          </li>
          <li>
            <a href="/suppliers/reviews"> Reviews</a>
          </li>
          <li>
            <a href="/suppliers/products"> More</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/suppliers/register"> Supplier Register </a>
          </li>
          <li>
            <a href="/suppliers/login"> Supplier Login</a>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}

export default SupplierNavigation;
