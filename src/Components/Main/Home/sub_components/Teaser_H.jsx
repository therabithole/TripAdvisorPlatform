import React, { Component } from "react";
class Teasers extends Component {
  state = {};
  render() {
    return (
      <section>
        <h1> DESTINATIONS TO EXPLORE</h1>
        <p> Book your perfect stay with over 1M properties</p>
        <div className="BannerSearch">
          <input
            type="search"
            placeholder="Search for best hotel, restaurants and trip deals..."
          />
          <button type="submit">search</button>
        </div>
        <div className="BannerButtons">
          <button>Hotels</button>
          <button>Restaurants</button>
          <button>Tour Packages</button>
          <button>Best of 2019</button>
        </div>
      </section>
    );
  }
}

export default Teasers;
