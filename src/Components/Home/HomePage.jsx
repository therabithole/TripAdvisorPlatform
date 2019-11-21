import React, { Component } from "react";

/* Header */
import Header from "../Headers/Header";

/* Data Filters*/
import Teasers from "./components/Teaser_H";
import TopDestinationsFilter from "./components/TopDestinationsFilter";
import TopPartners from "./components/TopPartners";
import RestaurantsFilter from "./components/RestaurantsFilter";
import TopHotels from "./components/TopHotels";
import NorthernAreasFilter from "./components/NorthernAreasFilter";

/* Footer */
import Footer from "../Footers/Footer";

class HomePage extends Component {
  state = {
    hotels: [],
    restaurants: []
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Teasers />
        <TopDestinationsFilter />
        <NorthernAreasFilter />
        <TopHotels />
        <RestaurantsFilter />
        <TopPartners />
        <Footer />
      </React.Fragment>
    );
  }
}

export default HomePage;
