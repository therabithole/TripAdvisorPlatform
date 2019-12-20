import React, { Component } from "react";
import "../_Products/node_modules/bootstrap/dist/css/bootstrap.css";

// Common Components
import Slider from "./../_commonFuncs/Slider";
import SideBars from "../_commonFuncs/SideBars";

// Restaurant Database : Restaurant List
import { getRestaurants } from "../db/fakeSupplierService";

// DB: SideBar List
import { restaurantSideBar } from "./../db/sideBarService";
// common features:
import Bookmark from "./../Common/Bookmark";
import Pagination from "./../Common/Pagination";
import { paginate } from "./../Common/paginate";

class Restaurants extends Component {
  state = {
    restaurants: [],
    sidebars: [],
    pageSize: 4,
    currentPage: 1
  };

  // When the page loads
  componentDidMount() {
    this.setState(
      {
        restaurants: getRestaurants(),
        sidebars: restaurantSideBar
      },
      () => {
        // console.log("Display Sidebar", this.state.sidebars);
        // console.log("actual data", this.state.restaurants);
      }
    );
  }

  ////////////////////////////////// PAGE ACTIONS //////////////////////////
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
  /////////////////////////////////////// PRODUCT ACTIONS  ///////////////////////////////

  //Deleting Products

  handleDelete = restaurant => {
    console.log("Deleted", restaurant);

    const restaurants = this.state.restaurants.filter(
      r => r._id !== restaurant._id
    );
    this.setState({ restaurants });
  };

  // Bookmark Product

  handleBookmark = restaurant => {
    const restaurants = [...this.state.restaurants];
    const index = restaurants.indexOf(restaurant);
    restaurants[index] = { ...restaurants[index] };
    restaurants[index].bookmarked = !restaurants[index].bookmarked;
    this.setState({ restaurants });
  };

  ///////////////////////////// RENDER (PAGE) METHOD //////////////////////////////////////

  render() {
    // destructuring - 1
    const { length: count } = this.state.restaurants;

    // destructuring - 2
    const { pageSize, currentPage } = this.state;

    // conditions

    if (count === 0) return <p> No restaurants in your area</p>;

    // mapping/paginating the restaurant data (this.state.restaurants) according toe page-size, currentpage

    const { restaurants: allRestaurants } = this.state;

    // pagination lesson 13: Filtering implementation before PAGINATION

    const { selectedItem } = this.state;

    const filtered = selectedItem
      ? allRestaurants.filter(restaurant => {
          const { name, restaurantProperties } = restaurant;
        })
      : allRestaurants;

    const restaurants = paginate(allRestaurants, currentPage, pageSize);

    return (
      <React.Fragment>
        <Slider
          title="THE BEST RESTAURANTS IN TOWN"
          subtitle="Select the desired filters and find out your best restaurant"
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
              {this.state.restaurants.length} restaurants
              {/* we are NOT using restaurants.length BUT> this.state because that is original array/amount without pagination method*/}
            </div>
            <div>
              {restaurants.map(restaurant => (
                <div key={restaurant._id}>
                  <li style={{ listStyle: "none" }}> {restaurant.name}</li>
                  <li style={{ listStyle: "none" }}>
                    Cuisines : /
                    {restaurant.restaurantProperties.cuisine.map(m => {
                      return m.name;
                    })}
                  </li>
                  <li style={{ listStyle: "none" }}>
                    Meals Offered : /
                    {restaurant.restaurantProperties.meals.map(m => {
                      return m.name;
                    })}
                  </li>
                  <li style={{ listStyle: "none" }}>
                    Visit their website: {restaurant.website}
                  </li>
                  <Bookmark
                    bookmarked={restaurant.bookmarked}
                    onClick={() => this.handleBookmark(restaurant)}
                    type={"Restaurant"}
                  />
                  <button onClick={() => this.handleDelete(restaurant)}>
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
