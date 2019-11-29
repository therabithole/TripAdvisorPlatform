import React from "react";
import ReusableSideBarList from "./ReusableSideBarList";

const SideBar = props => {
  const { sideBars, onFilterSelect } = props;
  const sideBarList = Object.keys(sideBars);

  return (
    <React.Fragment>
      <aside>
        {sideBarList.map(sidebaritem => (
          <ReusableSideBarList
            text={sideBars[sidebaritem]}
            handleFilter={onFilterSelect}
          />
        ))}
      </aside>
    </React.Fragment>
  );
};

SideBar.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default SideBar;
