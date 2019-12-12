import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

// Common Components
import Slider from "./../Common/Slider";
import SideBar from "./../Common/SideBar";

// Restaurant Database : Restaurant List
import { getRestaurants } from "../db/fakeSupplierService";
import { getAfghanRestaurants } from "./../db/fakeSupplierService";
import { getLahoreRestaurants } from "./../db/fakeSupplierService";
import { getIslamabadRestaurants } from "./../db/fakeSupplierService";
import { getRawalpindiRestaurants } from "./../db/fakeSupplierService";
import { getKarachiRestaurants } from "./../db/fakeSupplierService";

// DB: SideBar List
import { getFoodType } from "../db/foodList";
import { getFamousFoods } from "../db/foodList";
import { getCuisineList } from "./../db/cuisineList";
import { getDietaryRestrictions } from "./../db/dietaryRestrictions";
import { getAllLocations } from "./../db/geoLocations";
import { getPunjabCities } from "./../db/geoLocations";

// common features:
import Bookmark from "./../Common/Bookmark";
import Pagination from "./../Common/Pagination";
import { paginate } from "./../Common/paginate";

class Restaurants extends Component {
  state = {
    restaurants: [],
    sidebars: {
      famousFoods: [],
      dietaryRestrictions: [],
      foodType: [],
      cuisineList: [],
      locations: []
    },
    filters: {
      restaurantsByCity: {
        karachiRestaurants: [],
        lahoreRestaurants: [],
        islamabadRestaurants: [],
        rawalpindiRestaurants: []
      }
    },
    pageSize: 4,
    currentPage: 1
  };

  // When the page loads
  componentDidMount() {
    this.setState(
      {
        restaurants: getRestaurants(),
        sidebars: {
          famousFoods: getFamousFoods(),
          dietaryRestrictions: getDietaryRestrictions(),
          foodType: getFoodType(),
          cuisineList: getCuisineList(),
          locations: getAllLocations()
        },
        // locations: getPunjabCities(),
        subData: {
          restaurantsByCity: {
            karachiRestaurants: getKarachiRestaurants(),
            lahoreRestaurants: getLahoreRestaurants(),
            islamabadRestaurants: getIslamabadRestaurants(),
            rawalpindiRestaurants: getRawalpindiRestaurants()
          }
        }
      },
      () => {
        console.log(this.state.sidebars);
        console.log(this.state.restaurants);
      }
    );
  }

  ////////////////////////////////// PAGE ACTIONS //////////////////////////

  //// pagechange - pagination

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  //// sidebar filter

  handleFilterSelect = filter => {
    console.log(filter);
    this.setState({ selectedFilter: filter });
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

    const { selectedFilter } = this.state;

    const filtered = selectedFilter
      ? allRestaurants.filter(restaurantsinDB => {
          const foodDetailsinDB = restaurantsinDB.foodDetails;
          const nestedArray = Object.values(foodDetailsinDB);
          nestedArray.find(values => {
            values.find(data => {
              console.log(data.name);
            });
          });
        })
      : allRestaurants;

    // if selected filtered is truthy, we are going to get allRestaurants and filter them
    // console.log("check", check);
    // console.log("kocations", this.state.locations);
    // const filteredRestaurants = selectedFilter ? allRestaurants.filter( r = > r. )

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
              selectedFilter={this.state.selectedFilter}
              onFilterSelect={this.handleFilterSelect}
            />
          </div>
          <div className="col">
            <div>
              Ay!, You're seeing
              {this.state.restaurants.length} restaurants{" "}
              {/* we are NOT using restaurants.length BUT> this.state because that is original array/amount without pagination method*/}
            </div>
            <div>
              {restaurants.map(restaurant => (
                <div key={restaurant._id}>
                  <li style={{ listStyle: "none" }}> {restaurant.name}</li>
                  <li style={{ listStyle: "none" }}>
                    {restaurant.foodDetails.cuisine.map(m => {
                      return m.name;
                    })}
                  </li>
                  <li style={{ listStyle: "none" }}>
                    {restaurant.foodDetails.meals.map(m => {
                      return m.name;
                    })}
                  </li>
                  <li style={{ listStyle: "none" }}>
                    {" "}
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
