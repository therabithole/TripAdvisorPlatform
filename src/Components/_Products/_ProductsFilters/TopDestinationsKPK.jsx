import React, { Component } from "react";

import { getNorthernAreasHotels } from "../../db/fakeSupplierService";

class TopDestinationsKPK extends Component {
  state = {
    northernAreasHotels: [],
    northernAreasRestaurants: [],
    northernAreasTourOperators: []
  };
  componentDidMount() {
    this.setState({ northernAreasHotels: getNorthernAreasHotels() });
  }
  render() {
    const { northernAreasHotels } = this.state;

    return (
      <section className="Top-Destionations-KPK-container">
        <div className="Top-Destionations-KPK-data-and-information">
          <div className="Top-Destionations-KPK-data-count">
            <div className="Top-Destionations-KPK-data-count-header">
              \ACTIVITIES IN KHYBER PAKHTUNKHAWA
            </div>
            <div className="Top-Destionations-KPK-hotels-count">
              {northernAreasHotels.length} - hotels
            </div>
            <button> Learn more</button>
          </div>
        </div>
        <div className="Top-Destionations-KPK-weather-and-image"></div>
      </section>
    );
  }
}

export default TopDestinationsKPK;
