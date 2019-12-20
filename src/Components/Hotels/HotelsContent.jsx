import React, { Component } from "react";
import Hotels from "./Hotels";
// common widgets:

import Bookmark from "./../Common/Bookmark";
import Chat from "./../Common/Chat";
import Pagination from "./../Common/Pagination";

import { paginate } from "./../Common/paginate";

// Hotel Database : Hotels List
import { getHotels } from "../db/fakeSupplierService";
// Hotel Database: Filtering Hotels List

import { getRoomFeatures } from "../db/roomFeatures";
import { getHotelFeatures } from "../db/hotelFeatures";

// WORK
class HotelsContent extends Component {
  state = {
    hotels: [],
    gethotelFeatures: [],
    getRoomFeatures: [],
    selectedHotel: [],
    pageSize: 5,
    currentPage: 1
  };

  componentDidMount() {
    this.setState({
      hotels: getHotels(),
      getHotelFeatures: getHotelFeatures(),
      getRoomFeatures: getRoomFeatures()
    });
  }

  render() {
    const { length: count } = this.state.hotels;

    const { hotels: allHotels } = this.state;
    const { pageSize, currentPage } = this.state;

    const hotels = paginate(allHotels, currentPage, pageSize);
    return (
      <React.Fragment>
        <section className="hotel-content-wrapper">
          <div>Ay!, You're seeing {count} hotels below</div>
          <br></br>
          {hotels.map(hotel => (
            <div className="hotel-content-container">
              <div className="hotel-gallery"> {hotel.length} </div>
              <div className="hotel-data">
                <div className="hotel-name">{hotel.name}</div>
                <div className="hotel-address-and-city">
                  <span>{hotel.address.streetAddress}</span>
                  <span>, </span>
                  <span> {hotel.address.city}</span>
                </div>
                <div className="hotel-custom-ranking"> custom ranking</div>
                <div className="hotel-features-and-prices">
                  <div className="hotel-features">
                    <div className="hotel-features-title">
                      Featured Offerings
                    </div>
                    <div className="hotel-features-content-1">
                      {hotel.hotelProperties.amenities[0]}
                    </div>
                    <div className="hotel-features-content-2">
                      {hotel.hotelProperties.amenities[1]}
                    </div>
                    <div className="hotel-features-content-3">
                      {hotel.hotelProperties.amenities[2]}
                    </div>
                    <div className="hotel-features-content-4">
                      {hotel.reviews} Reviews
                    </div>
                  </div>

                  <div className="interested-to-contact-hotel">
                    <div className="interested-to-contact-hotel-title">
                      Interested in this hotel?
                    </div>
                    <div className="chat-with-the-hotel-management">
                      <Chat />
                    </div>
                    <div className="visit-hotel-website">
                      <a
                        href={hotel.website}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <i className="fa fa-link"></i> Visit their website
                      </a>
                    </div>
                    <Bookmark
                      bookmarked={hotel.bookmarked}
                      onClick={() => this.handleBookmark(hotel)}
                      type={"hotel"}
                    />
                  </div>
                  <div className="prices-and-booking">
                    <div className="price-per-night">
                      <span> Rs. </span>
                      <span>{hotel.pricesPerNight.singleRoom}</span>
                      <span> / night</span>
                    </div>
                    <div>
                      <button
                        className="btn btn-warning"
                        onClick={() => {
                          this.handleBooking(hotel);
                        }}
                      >
                        Book now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
        <Pagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
      </React.Fragment>
    );
  }
}

export default HotelsContent;
