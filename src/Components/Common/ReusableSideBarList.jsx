import React, { Component } from "react";

const ReusableSideBarList = ({
  data,
  handleFilter,
  selectedFilter,
  id,
  defValue
}) => {
  return (
    <ul>
      {data.map(actualData => (
        <li
          key={actualData[id]}
          onClick={() => handleFilter(actualData)}
          className={
            actualData === selectedFilter
              ? "list-group-item active"
              : "list-group-item"
          }
        >
          {actualData[defValue]}
        </li>
      ))}
    </ul>
  );
};

export default ReusableSideBarList;
