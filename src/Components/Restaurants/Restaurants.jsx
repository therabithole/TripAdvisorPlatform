import React, { Component } from "react";

import Slider from "./../Common/Slider";

class Restaurants extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Slider
          title="THE BEST RESTAURANTS IN TOWN"
          subtitle="Select the desired filters and find out your best restaurant"
        />
        <div> Dinner in Lahore</div>
        <div> Lunch in Lahore</div>
        <div> Fine Dining in Lahore</div>
        <div> Mid-range Restaurants in Lahore</div>
        <div> Afghan Restaurants in Lahore</div>
        <div> Barbecue in Lahore</div>
        <div> Cafes in Lahore</div>
        <div> Thai Restaurants in Lahore</div>
        <div> Breakfast in Lahore</div>
        <div> Chinese Restaurants in Lahore</div>
        <div> Middle-Eastern Restaurants in Lahore</div>
        <div> Pizza in Lahore</div>
      </React.Fragment>
    );
  }
}

export default Restaurants;
