import React, { Component } from "react";
import "./styles/hotels.css";

// common widgets:
// import Like from "./../../globalComponents/common/Like";
// import Pagination from "./../../globalComponents/common/pagination";
// import { paginate } from "./../../../utils/paginate";
// import ListGroup from "./../../globalComponents/common/listGroup";

// Hotel components
import HotelPicker from "./HotelPicker";
import HotelSlider from "./HotelSlider";
import HotelsContent from "./HotelsContent";
import SideBar from "./SideBar";
// Hotel Database : Hotels List

// Hotel Database: Filtering / SideBar Data

import { getHotelFeatures } from "../db/hotelFeatures";
import { getRoomFeatures } from "../db/roomFeatures";

import { getHotels } from "../db/fakeSupplierService";

// WORK
class Hotels extends Component {
  state = { hotels: [], hotelFeatures: [], roomFeatures: [] };

  componentDidMount() {
    const hotelFeatures = [
      { _id: "", name: "All Property Features" },
      ...getHotelFeatures()
    ];

    const roomFeatures = [
      { _id: "", name: "All Room Features" },
      ...getRoomFeatures()
    ];
    this.setState({
      hotelFeatures,
      roomFeatures,
      hotels: getHotels()
    });
  }

  handleItemSelect = hotel => {
    console.log("Event is handling property feature here...", hotel);
  };

  handleFilterSelection = () => {
    console.log("handling filter");
  };

  render() {
    return (
      <React.Fragment>
        <main className="hotelsMain">
          <HotelPicker />
          <HotelSlider />
          <SideBar
            sideBar1={this.state.hotelFeatures}
            sideBar2={this.state.roomFeatures}
            onSelectingFilter={this.handleFilterSelection}
            onItemSelect={this.handleItemSelect}
            //  textProperty="name" defaultProps used
            // valueProperty="id" defaultProps used
          />

          <HotelsContent />
        </main>
      </React.Fragment>
    );
  }
}

export default Hotels;
