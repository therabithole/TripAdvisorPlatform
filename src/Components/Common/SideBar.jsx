import React from "react";

const SideBar = props => {
  const {
    sideBar1,
    sideBar2,
    textProperty,
    valueProperty,
    onSideBarItemSelect,
    selectedSideBarItem
  } = props;
  return (
    <React.Fragment>
      <aside>
        <ul>
          {sideBar1.map(item => (
            <li
              key={item[valueProperty]}
              className={
                item === selectedSideBarItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onSideBarItemSelect(item)}
            >
              {item[textProperty]}
            </li>
          ))}
        </ul>
        <br />
        <ul>
          {sideBar2.map(item => (
            <li
              key={item[valueProperty]}
              className={
                item === selectedSideBarItem
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onSideBarItemSelect(item)}
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
