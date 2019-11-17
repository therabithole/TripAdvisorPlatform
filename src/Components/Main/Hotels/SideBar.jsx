import React from "react";

const SideBar = props => {
  const {
    sideBar1,
    sideBar2,
    textProperty,
    valueProperty,

    onItemSelect
  } = props;
  return (
    <React.Fragment>
      <aside>
        <ul>
          {sideBar1.map(item => (
            <li
              onClick={() => onItemSelect(item)}
              key={item[valueProperty]}
              className={"list-group-item"}
            >
              {item[textProperty]}
            </li>
          ))}
        </ul>
        <br />
        <ul>
          {sideBar2.map(item => (
            <li
              onClick={() => onItemSelect(item)}
              key={item[valueProperty]}
              className="list-group-item"
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
