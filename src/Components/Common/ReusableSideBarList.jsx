import React, { Component } from "react";

const ReusableSideBarList = ({ text, value, onFilterSelect }) => {
  return (
    <ul>
      {text.map(t => (
        <li
          onClick={() => onFilterSelect(t)}
          key={t._id}
          className="list-group-item"
        >
          {t.name}
        </li>
      ))}
    </ul>
  );
};

export default ReusableSideBarList;
