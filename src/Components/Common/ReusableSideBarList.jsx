import React, { Component } from "react";

const ReusableSideBarList = ({ text, onFilterSelect }) => {
  return (
    <ul>
      {text.map(t => (
        <li className="list-group-item">
          {" "}
          {t.name} {console.log("displaying item", { t })}
        </li>
      ))}
    </ul>
  );
};

export default ReusableSideBarList;
