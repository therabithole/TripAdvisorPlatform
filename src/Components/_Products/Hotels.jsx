import React, { Component } from "react";

import Products from "../Products";

/* SideBar  and Data*/
import SideBars from "../_commonFuncs/SideBars";
import { hotelSideBar } from "../db/sideBarService";

/* Products Functions */
import Slider from "../_commonFuncs/Slider";
import Picker from "../_commonUI/Picker";
import Bookmark from "../_commonFuncs/Bookmark";

// Pagination Components //

import Pagination from "../_commonFuncs/Pagination";
import { paginate } from "../_commonFuncs/paginate";

// Hotel Data
import { getHotels } from "../db/fakeSupplierService";

class Hotels extends Products {
  state = {
    products: [],
    sidebars: [],
    selectedItem: [],
    selectedSideBar: [],
    pageSize: 5,
    currentPage: 1
  };
  componentDidMount() {
    this.setState(
      {
        products: getHotels(),
        sidebars: hotelSideBar
      },
      () => {
        console.log("all states", this.state);
        console.log("Display Sidebar", this.state.sidebars);
        console.log("actual data", this.state.products);
      }
    );
  }

  componentDidUpdate() {
    this.handleSelectedSideBar = name => {
      this.setState({ selectedSideBar: name }, () => {
        console.log(this.state.selectedSideBar, "Selected Sidebar");
      });
    };

    this.handleSelectedItems = item => {
      this.setState({ selectedItem: item }, () => {
        console.log(this.state.selectedItem, "Selected item");
      });
    };
  }

  render() {
    const { length: count } = this.state.products;

    const { pageSize, currentPage, products: allHotels } = this.state;
    const { selectedItem, selectedSideBar } = this.state;

    const { name: selectedSideBarName } = this.state.selectedSideBar;
    const { name: selectedItemName } = this.state.selectedItem;

    const filteredProducts =
      selectedSideBar && selectedItem
        ? allHotels.filter(hotel => {
            hotel.hotelProperties.filter(hotelDBSideBar => {
              console.log(selectedItemName, "clicked Item");
              console.log(selectedSideBarName, "Clicked Sidebar");
              if (hotelDBSideBar.name === selectedSideBar.name) {
                hotelDBSideBar.items.filter(item => {
                  item.name === selectedItem.name;
                });
              }
            });
          })
        : allHotels;

    const products /* const will be replaced by filetedProducts*/ = paginate(
      allHotels,
      currentPage,
      pageSize
    );

    return (
      <React.Fragment>
        <main className="hotelsMain">
          <Picker />
          <Slider
            title="THE BEST BEDS, MAGIC SLEEP"
            subtitle="Select the desired filters and find out your best hotel"
          />

          <section className="content-wrapper row">
            <div className="">
              <SideBars
                sideBars={this.state.sidebars}
                selectedSideBar={this.state.selectedSideBar}
                handleSelectedSideBar={this.handleSelectedSideBar}
                selectedItem={this.state.selectedItem}
                handleSelectedItems={this.handleSelectedItems}
              />
            </div>
            <div className="">
              <div>
                Ay!, You're seeing
                {this.state.products.length} Hotels
                {/* we are NOT using restaurants.length BUT> this.state because that is original array/amount without pagination method*/}
              </div>
              <div>
                {products.map(product => (
                  <div className="hotel-content-container">
                    <div className="hotel-gallery"> {product.length} </div>
                    <div className="hotel-data">
                      <div className="hotel-name">{product.name}</div>
                      <div className="hotel-address-and-city">
                        <span>{product.address.streetAddress}</span>
                        <span>, </span>
                        <span> {product.address.city}</span>
                      </div>
                      <div className="hotel-custom-ranking">custom ranking</div>
                      <div className="hotel-features-and-prices">
                        <div className="hotel-features">
                          <div className="hotel-features-title">
                            Featured Offerings
                          </div>
                          <div className="hotel-features-content-1">
                            {/* {product.hotelProperties.amenities[0]} */}
                          </div>
                          <div className="hotel-features-content-2">
                            {/*  {product.hotelProperties.amenities[1]} */}
                          </div>
                          <div className="hotel-features-content-3">
                            {/*  {product.hotelProperties.amenities[2]} */}
                          </div>
                          <div className="hotel-features-content-4">
                            {product.reviews} Reviews
                          </div>
                        </div>

                        <div className="interested-to-contact-hotel">
                          <div className="interested-to-contact-hotel-title">
                            Interested in this hotel?
                          </div>
                          <div className="chat-with-the-hotel-management"></div>
                          <div className="visit-hotel-website">
                            <a
                              href={product.website}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className="fa fa-link"></i> Visit their website
                            </a>
                          </div>
                          <Bookmark
                            bookmarked={product.bookmarked}
                            onClick={() => this.handleProductBookmark(product)}
                            type={"hotel"}
                          />
                        </div>
                        <div className="prices-and-booking">
                          <div className="price-per-night">
                            <span> Rs. </span>
                            <span>{product.pricesPerNight.singleRoom}</span>
                            <span> / night</span>
                          </div>
                          <div>
                            <button
                              className="btn btn-warning"
                              onClick={() => {
                                this.handleProductReservation(product);
                              }}
                            >
                              Book now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}{" "}
                */}
              </div>
            </div>
            <div className="">
              <Pagination
                itemsCount={count} // or {this.state.restaurants.length}
                pageSize={pageSize} /* or count*/
                currentPage={currentPage}
                onPageChange={this.handlePageChange}
              />
            </div>
          </section>
        </main>
      </React.Fragment>
    );
  }
}

export default Hotels;

/* <Picker />
          <Slider
            title="THE BEST BEDS, MAGIC SLEEP"
            subtitle="Select the desired filters and find out your best hotel"
          />*/
