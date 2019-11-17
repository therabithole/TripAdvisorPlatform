import React, { Component } from "react";

/* Home components */
import HomeHeader from "./sub_components/Header_H";
import Teasers from "./sub_components/Teaser_H";
import TopDestinationsFilter from "./sub_components/TopDestinationsFilter";
import TopPartners from "./sub_components/TopPartners";
import RestaurantsFilter from "./sub_components/RestaurantsFilter";
import HotelsFilter from "./sub_components/HotelsFilter";
import NorthernAreasFilter from "./sub_components/NorthernAreasFilter";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <HomeHeader />
        <Teasers />
        <TopDestinationsFilter />
        <NorthernAreasFilter />
        <HotelsFilter />
        <RestaurantsFilter />
        <TopPartners />
      </React.Fragment>
    );
  }
}

export default HomePage;
