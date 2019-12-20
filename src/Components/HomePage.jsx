import React, { Component } from "react";

/* Header */
import Header from "./_commonUI/Header";

/* Data Filters*/
import Teasers from "./_Products/_ProductsFilters/Teaser_H";
import TopDestinationsFilter from "./_Products/_ProductsFilters/TopDestinationsFilter";
import TopPartners from "./_Products/_ProductsFilters/TopPartners";
import RestaurantsFilter from "./_Products/_ProductsFilters/RestaurantsFilter";
import TopHotels from "./_Products/_ProductsFilters/TopHotels";
import NorthernAreasFilter from "./_Products/_ProductsFilters/NorthernAreasFilter";

/* Footer */
import Footer from "./_commonUI/Footer";
import Picker from "./_commonUI/Picker";

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
