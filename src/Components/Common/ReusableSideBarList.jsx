import React, { Component } from "react";

const ReusableSideBarList = ({ text, handleFilter }) => {
  return (
    <ul>
      {text.map(names => (
        <li
          onClick={sidebaritem => handleFilter(names)}
          className="list-group-item"
        >
          {names.name}
        </li>
      ))}
    </ul>
  );
};

export default ReusableSideBarList;
