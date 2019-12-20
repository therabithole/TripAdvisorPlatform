import React, { Component } from "react";
class RestaurantsFilter extends Component {
  state = {};
  render() {
    return (
      <section>
        <h1> TOP SELECTED RESTAURANTS</h1>
        <p>
          Disover our users most popular local-cusisine restaurants, stay-hotels
          and activities offered by tour-operators that our users have loved
          this summer.
        </p>
        <div> Select your season</div>
        <button> Book Now</button>
      </section>
    );
  }
}

export default RestaurantsFilter;
