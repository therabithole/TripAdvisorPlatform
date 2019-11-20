import React, { Component } from "react";
import "./styles/hotels.css";

// common widgets:
// import Like from "./../../globalComponents/common/Like";
// import Pagination from "./../../globalComponents/common/pagination";
// import { paginate } from "./../../../utils/paginate";
// import ListGroup from "./../../globalComponents/common/listGroup";
import SideBar from "../../Common/SideBar";
import Slider from "../../Common/Slider";
import Picker from "../../Common/Picker";

// Hotel components
import HotelsContent from "./HotelsContent";

// Hotel Database : Hotels List
import { getHotels } from "../db/fakeSupplierService";

// SideBar Database values:
import { getHotelFeatures } from "../db/hotelFeatures";
import { getRoomFeatures } from "../db/roomFeatures";

// WORK
class Hotels extends Component {
  // setting and initialising the empty state
  state = {
    hotels: [],
    hotelFeatures: [],
    roomFeatures: []
  };

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
    this.setState({ hotels: getHotels(), hotelFeatures, roomFeatures });
  }

  handleSideBarItemSelect = sideBarItem => {
    // WHAT IS THIS?
    this.setState({ selectedSideBarItem: sideBarItem });
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
            sideBar1={this.state.hotelFeatures}
            sideBar2={this.state.roomFeatures}
            selectedSideBarItem={this.state.selectedSideBarItem}
            onSideBarItemSelect={this.handleSideBarItemSelect}
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
