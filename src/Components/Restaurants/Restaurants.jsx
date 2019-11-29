import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

// Common Components
import Slider from "./../Common/Slider";
import SideBar from "./../Common/SideBar";

// Restaurant Database : Restaurant List
import { getRestaurants } from "../db/fakeSupplierService";
import { getFoodType } from "../db/foodList";
import { getCuisineList } from "./../db/cuisineList";

// common features:
import Bookmark from "./../Common/Bookmark";
import Pagination from "./../Common/Pagination";
import { paginate } from "./../Common/paginate";

class Restaurants extends Component {
  state = {
    restaurants: [],
    sidebars: { foodType: [], cuisineList: [] },

    pageSize: 3,
    currentPage: 1
  };

  componentDidMount() {
    const { foodtype, cuisineList } = this.state.sidebars;

    this.setState(
      {
        restaurants: getRestaurants(),
        sidebars: { foodType: getFoodType(), cuisineList: getCuisineList() }
      },
      () => {
        console.log(this.state.sidebars);
      }
    );
  }

  handleDelete = restaurant => {
    console.log("Deleted", restaurant);

    const restaurants = this.state.restaurants.filter(
      r => r._id !== restaurant._id
    );
    this.setState({ restaurants });
  };

  handleBookmark = restaurant => {
    const restaurants = [...this.state.restaurants];
    const index = restaurants.indexOf(restaurant);
    restaurants[index] = { ...restaurants[index] };
    restaurants[index].bookmarked = !restaurants[index].bookmarked;
    this.setState({ restaurants });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleFilterSelect = filter => {
    console.log(filter);
  };

  render() {
    const { length: count } = this.state.restaurants;
    const { pageSize, currentPage, restaurants: allRestaurants } = this.state;

    if (count === 0) return <p> There are no restaurants in the Database</p>;

    const restaurants = paginate(allRestaurants, currentPage, pageSize);
    return (
      <React.Fragment>
        <Slider
          title="THE BEST RESTAURANTS IN TOWN"
          subtitle="Select the desired filters and find out your best restaurant"
        />
        <section className="restaurant-content-wrapper row">
          <div className="col-2">
            <SideBar
              sideBars={this.state.sidebars}
              onFilterSelect={this.handleFilterSelect}
            />
          </div>
          <div className="col">
            <div>
              Ay!, You're seeing
              {restaurants.length} restaurants below
            </div>
            <div>
              {restaurants.map(restaurant => (
                <div key={restaurant._id}>
                  <li style={{ listStyle: "none" }}> {restaurant.name}</li>
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
              itemsCount={this.state.restaurants.length}
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
