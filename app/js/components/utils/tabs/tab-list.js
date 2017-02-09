import React from "react";
import { TAB_NAME } from "./components-names.js";
import { getChildPerTypeName } from "./util.js";

const TabList = (props) => {
  const tabsWithProps = getChildPerTypeName(
    props.children,
    TAB_NAME,
    {onClick: props.onClick}
  );

  return(
    <div>
      {tabsWithProps}
    </div>
  )
}

export default TabList;
