import React from "react";
import ReusableSideBarList from "./ReusableSideBarList";

const SideBar = props => {
  const {
    sideBar1,
    sideBar2,
    onFilterSelect,
    textProperty,
    valueProperty,
    onSideBarItemSelect,
    selectedSideBarItem
  } = props;
  return (
    <React.Fragment>
      <aside>
        <ReusableSideBarList text={sideBar1} FilterSelect={onFilterSelect} />
        <ReusableSideBarList text={sideBar2} />
        <ul>
          {sideBar1.map(item => (
            <li
              onClick={() => onSideBarItemSelect(item)}
              key={item[valueProperty]}
              className={
                item === selectedSideBarItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {item[textProperty]}
            </li>
          ))}
        </ul>
        <br />
        <ul>
          {sideBar2.map(item => (
            <li
              onClick={() => onSideBarItemSelect(item)}
              key={item[valueProperty]}
              className={
                item === selectedSideBarItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
            >
              {item[textProperty]}
            </li>
          ))}
        </ul>
      </aside>
    </React.Fragment>
  );
};

SideBar.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default SideBar;
