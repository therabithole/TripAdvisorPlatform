import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import Products from "../Products";

/* SideBar  and Data*/
import SideBars from "../_commonFuncs/SideBars";
import { restaurantSideBar } from "../db/sideBarService";

/* Products Functions */
import Slider from "../_commonFuncs/Slider";
import Picker from "../_commonUI/Picker";
import Bookmark from "../_commonFuncs/Bookmark";

// Pagination Components //
import Pagination from "../_commonFuncs/Pagination";
import { paginate } from "../_commonFuncs/paginate";

// Restaurant Data
import { getRestaurants } from "../db/fakeSupplierService";

class Restaurants extends Products {
  state = {
    products: [],
    sidebars: [],
    selectedHotel: [],
    selectedSideBar: [],
    pageSize: 5,
    currentPage: 1
  };

  componentDidMount() {
    this.setState(
      {
        products: getRestaurants(),
        sidebars: restaurantSideBar
      },
      () => {
        console.log("all states", this.state);
        console.log("actual data", this.state.products);
        console.log("Display Sidebar", this.state.sidebars);
      }
    );
  }
  render() {
    const { length: count } = this.state.products;

    const { pageSize, currentPage, products: allRestaurants } = this.state;

    const products = paginate(allRestaurants, currentPage, pageSize);
    return (
      <React.Fragment>
        <div> {this.filtered}</div>
        <Slider
          title="THE BEST RESTAURANTS IN TOWN"
          subtitle="Select the desired filters and find out your best restaurant"
        />
        <section className="restaurant-content-wrapper row">
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
              {this.state.products.length} restaurants
              {/* we are NOT using restaurants.length BUT> this.state because that is original array/amount without pagination method*/}
            </div>
            <div>
              {products.map(product => (
                <div key={product._id}>
                  <li style={{ listStyle: "none" }}> {product.name}</li>
                  <li style={{ listStyle: "none" }}>
                    Cuisines : /
                    {/* {product.restaurantProperties.cuisine.map(m => {
                      return m.name;
                    })} /*}
                  </li>
                  <li style={{ listStyle: "none" }}>
                    Meals Offered : /
                   {/*  {product.restaurantProperties.meals.map(m => {
                      return m.name;
                    })} */}
                  </li>
                  <li style={{ listStyle: "none" }}>
                    Visit their website: {product.website}
                  </li>
                  <Bookmark
                    bookmarked={product.bookmarked}
                    onClick={() => this.handleBookmark(product)}
                    type={"Restaurant"}
                  />
                  <button onClick={() => this.handleDelete(product)}>
                    Delete
                  </button>
                </div>
              ))}
            </div>
            {/* <div> Dinner in Lahore</div>
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
            <div> Pizza in Lahore</div> */}
            <Pagination
              itemsCount={count} // or {this.state.restaurants.length}
              pageSize={pageSize} /* or count*/
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Restaurants;
