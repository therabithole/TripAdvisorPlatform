import React, { Component } from "react";

import { getHotels } from "../../db/fakeSupplierService";
import TopDestinationsKPK from "./TopDestinationsKPK";

class TopDestinationsFilter extends Component {
  state = {
    hotels: [],
    topSelectedHotels: []
  };

  componentDidMount() {
    this.setState({
      hotels: getHotels()
    });
  }

  render() {
    return (
      <section>
        <h1> TOP DESTINATIONS</h1>
        <div>
          Discover the ultimate travel-experiences and back-pack adventures
          across Punjab and Khyber Pakhtunkhawa.
          <TopDestinationsKPK />
        </div>
      </section>
    );
  }
}

export default TopDestinationsFilter;
