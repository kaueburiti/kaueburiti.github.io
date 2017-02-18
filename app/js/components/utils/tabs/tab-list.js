import React from "react";
import { getChildPerTypeName } from "./util.js";

const TabList = (props) => {
  const tabsWithProps = getChildPerTypeName(
    props.children,
    {
      onClick: props.onClick,
      currentTab: props.currentTab
    }
  );

  return(
    <ul className={props.className}>
      {tabsWithProps}
    </ul>
  )
}

export default TabList;
