import React, { Component } from "react";
import "./styles/hotels.css";

import SideBars from "../Common/SideBars";
import Slider from "./../Common/Slider";
import Picker from "./../Common/Picker";

// Hotel Database : Hotels List
import { getHotels } from "../db/fakeSupplierService";

// DB: SideBar List
import { hotelSideBar } from "./../db/sideBarService";
// common features:
import Bookmark from "./../Common/Bookmark";
import Pagination from "./../Common/Pagination";
import { paginate } from "./../Common/paginate";

// WORK
class Hotels extends Component {
  state = {
    hotels: [],
    sidebars: [],
    selectedHotel: [],
    pageSize: 5,
    currentPage: 1
  };
  // setting and initialising the empty state

  // Adding Custom titles - COMPONENT DID MOUNT

  componentDidMount() {
    this.setState(
      {
        hotels: getHotels(),
        sidebars: hotelSideBar
      },
      () => {
        // console.log("Display Sidebar", this.state.sidebars);
        // console.log("actual data", this.state.restaurants);
      }
    );
  }
  //// pagechange - pagination

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  //// Handling sidebars Func()

  handleSelectedSideBar = name => {
    this.setState({ selectedSideBar: name }, () => {
      console.log(this.state.selectedSideBar, "Selected Sidebar");
    });
  };

  handleSelectedItems = item => {
    this.setState({ selectedItem: item }, () => {
      console.log(this.state.selectedItem, "Selected item");
    });
  };

  // setting STATE of Data for sidebars and Main Content : - COMPONENT DID MOUNT

  handleBooking = hotel => {
    const selectedHotel = hotel.name;
    const selectedPrice = hotel.pricesPerNight.singleRoom;
    const result = selectedHotel + " Booked for " + selectedPrice;
    console.log(result);
  };

  handleBookmark = hotel => {
    const hotels = [...this.state.hotels];
    const index = hotels.indexOf(hotel);
    hotels[index] = { ...hotels[index] };
    hotels[index].bookmarked = !hotels[index].bookmarked;
    this.setState({ hotels });
  };

  render() {
    const { length: count } = this.state.hotels;

    const { pageSize, currentPage, hotels: allHotels } = this.state;

    const hotels = paginate(allHotels, currentPage, pageSize);

    return (
      <React.Fragment>
        <main className="hotelsMain">
          <Picker />
          <Slider
            title="THE BEST BEDS, MAGIC SLEEP"
            subtitle="Select the desired filters and find out your best hotel"
          />

          <section className="content-wrapper row">
            <div className="col-2">
              <SideBars
                sideBars={this.state.sidebars}
                selectedSideBar={this.state.selectedSideBar}
                handleSelectedSideBar={this.handleSelectedSideBar}
                selectedItem={this.state.selectedItem}
                handleSelectedItems={this.handleSelectedItems}
              />
            </div>
            <div className="col">
              <div>
                Ay!, You're seeing
                {this.state.hotels.length} Hotels
                {/* we are NOT using restaurants.length BUT> this.state because that is original array/amount without pagination method*/}
              </div>
              <div>
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
                      <div className="hotel-custom-ranking">custom ranking</div>
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
                          <div className="chat-with-the-hotel-management"></div>
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
              </div>
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Hotels;

//  textProperty="name" defaultProps used
// valueProperty="id" defaultProps used
