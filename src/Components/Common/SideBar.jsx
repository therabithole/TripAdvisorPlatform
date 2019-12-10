import React from "react";
import ReusableSideBarList from "./ReusableSideBarList";

const SideBar = props => {
  const { sideBars, onFilterSelect } = props;
  const sideBarList = Object.keys(sideBars);
  const { id, defValue } = props;
  const { selectedFilter } = props;

  return (
    <React.Fragment>
      <aside>
        {sideBarList.map(sidebaritem => (
          <ReusableSideBarList
            data={sideBars[sidebaritem]}
            handleFilter={onFilterSelect}
            selectedFilter={selectedFilter}
            id={id}
            defValue={defValue}
          />
        ))}
      </aside>
    </React.Fragment>
  );
};

SideBar.defaultProps = {
  id: "id",
  defValue: "name"
};

export default SideBar;
