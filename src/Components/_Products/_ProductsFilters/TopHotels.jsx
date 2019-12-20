import React, { Component } from "react";

import { getTopSelectedHotels } from "../../db/fakeSupplierService";

class TopHotels extends Component {
  state = {
    topSelectedHotels: []
  };
  componentDidMount() {
    this.setState({
      topSelectedHotels: getTopSelectedHotels()
    });
  }
  render() {
    const { topSelectedHotels } = this.state;
    return (
      <section>
        <h1> TOP SELECTED HOTELS</h1>
        <p>
          Disover Hotels in popular destinations — Find hotels & motels near you
        </p>
        <div> Select your season</div>
        <button> Search Now</button>
        {topSelectedHotels.map(topSelectedHotel => (
          <div className="topSelectedHotels-content-container">
            <div className="topSelectedHotels-information">
              <div className="topSelectedHotels-name">
                {topSelectedHotel.name}
              </div>
              <div className="topSelectedHotels-address">
                {topSelectedHotel.address.streetAddress} <span>, </span>
                {topSelectedHotel.address.city}
              </div>
              <div className="topSelectedHotels-amenities-features"> </div>
              <div className="topSelectedHotels-food-features"> </div>
              <div className="topSelectedHotels-special-quality"> </div>
            </div>
            <div className="topSelectedHotels-how-to-contact">
              <div className="topSelectedHotels-customer-service"> </div>
              <div className="topSelectedHotels-website"> </div>
              <div className="topSelectedHotels-chat"> </div>
            </div>
            <div className="topSelectedHotels-gallery"> </div>
            <div className="topSelectedHotels-adminFeatures"> </div>
            <div className="topSelectedHotels-booking-information">
              <button> Book NOW</button>
            </div>
          </div>
        ))}
      </section>
    );
  }
}

export default TopHotels;
