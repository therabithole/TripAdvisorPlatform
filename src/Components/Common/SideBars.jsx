import React from "react";

import SideBar from "./SideBar";
import ReusableSideBars from "./ReusableSideBars";

const SideBars = props => {
  const { sideBars } = props;
  const { selectedSideBar, handleSelectedSideBar } = props;
  const { selectedItem, handleSelectedItems } = props;

  // Extracted from DefaultProps
  const { idProperty, textProperty } = props;

  return (
    <React.Fragment>
      <ul>
        {sideBars.map(sideBar => (
          <li
            key={sideBar}
            // sideBar === selectedSideBar
            className={{ listStyle: "none" }}
            onClick={() => handleSelectedSideBar(sideBar)}
          >
            <ul>
              <div>Filtering {sideBar.name}</div>
              {sideBar.items.map(item => (
                <li
                  key={item.id}
                  className={
                    item === selectedItem
                      ? "list-group-item active"
                      : "list-group-item"
                  }
                  onClick={() => handleSelectedItems(item)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

SideBars.defaultProps = {
  idProperty: "id",
  textProperty: "name"
};

export default SideBars;

/*    {mapSideBarNames.map(map => (
        <SideBar
          sideBars={map}
          selectedSideBar={selectedSideBar}
          handleSelectedSideBar={handleSelectedSideBar}
        />
      ))}
*/

/*  {mapSideBarNames.map(mapSideBarName => (
          <ReusableSideBars
            mapSideBar={sideBars[mapSideBarName]}
            handleSelectedItems={handleSelectedItems}
            selectedItem={selectedItem}
            idProperty={idProperty}
            textProperty={textProperty}
          />
        ))}*/

/*   const keepit = Object.assign(sideBars);
  const mapSideBarNames = Object.keys(sideBars);*/

/*  <li
        key={sideBar[idProperty]}
        onClick={() => handleSelectedItems(sideBar)}
        className={
          sideBar === selectedItem
            ? "list-group-item active"
            : "list-group-item"
        }
      >
        {sideBar[textProperty]}
      </li>*/
