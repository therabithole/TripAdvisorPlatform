import React, { Component } from "react";
import "./styles/hotels.css";

// common widgets:
// import Like from "./../../globalComponents/common/Like";
// import Pagination from "./../../globalComponents/common/pagination";
// import { paginate } from "./../../../utils/paginate";
// import ListGroup from "./../../globalComponents/common/listGroup";
import SideBar from "./../Common/SideBar";
import Slider from "./../Common/Slider";
import Picker from "./../Common/Picker";

// Hotel components
import HotelsContent from "./HotelsContent";

// Hotel Database : Hotels List
import { getHotels } from "../db/fakeSupplierService";

// SideBar Database values:
import { getHotelFeatures } from "../db/hotelFeatures";
import { getRoomFeatures } from "../db/roomFeatures";

// WORK
class Hotels extends Component {
  state = {
    hotels: [],
    sidebars: {
      hotelFeatures: [],
      roomFeatures: []
    },
    selectedHotel: [],
    pageSize: 5,
    currentPage: 1
  };
  // setting and initialising the empty state

  // Adding Custom titles - COMPONENT DID MOUNT

  componentDidMount() {
    const hotelFeatures = [
      { _id: "", name: "All Hotel Features" },
      ...getHotelFeatures()
    ];
    const roomFeatures = [
      { _id: "", name: "All Room Features" },
      ...getRoomFeatures()
    ];

    // setting STATE of Data for sidebars and Main Content : - COMPONENT DID MOUNT
    this.setState({
      hotels: getHotels(),
      sidebars: { hotelFeatures, roomFeatures }
    });
  }

  handleFilterSelect = filter => {
    console.log(filter);
    this.setState({ selectedFilter: filter });
  };

  render() {
    return (
      <React.Fragment>
        <main className="hotelsMain">
          <Picker />
          <Slider
            title="THE BEST BEDS, MAGIC SLEEP"
            subtitle="Select the desired filters and find out your best hotel"
          />
          <SideBar
            sideBars={this.state.sidebars}
            onFilterSelect={this.handleFilterSelect}
            selectedFilter={this.state.selectedFilter}
          />
          <HotelsContent />
        </main>
      </React.Fragment>
    );
  }
}

export default Hotels;

//  textProperty="name" defaultProps used
// valueProperty="id" defaultProps used
