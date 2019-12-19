import React, { Component } from "react";
const SideBar = props => {
  const { data } = props;
  const { selectedSideBar, handleSelectedSideBar } = props;
  console.log(data, "data");
  return <React.Fragment></React.Fragment>;
};

export default SideBar;

/* <div onClick={() => handleSelectedSideBar(sideBars)}> </div>*/
