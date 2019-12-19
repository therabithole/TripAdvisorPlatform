import React, { Component } from "react";
import SideBars from "./SideBars";

const ReusableSideBars = ({
  name,
  mapSideBar,
  handleSelectedItems,
  selectedItem,
  idProperty,
  textProperty
}) => {
  return (
    <React.Fragment>
      <ul>
        {mapSideBar.map(sideBar => (
          <li
            key={sideBar[idProperty]}
            onClick={() => handleSelectedItems(sideBar)}
            className={
              sideBar === selectedItem
                ? "list-group-item active"
                : "list-group-item"
            }
          >
            {sideBar[textProperty]}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default ReusableSideBars;
