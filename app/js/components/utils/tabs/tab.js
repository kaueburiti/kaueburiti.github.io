import React from "react";
import cx from "classnames";

const Tab = (props) => {
  const tabClasses = cx(props.className, {
    'selected': props.tabName === props.currentTab
  });
  
  return(
    <li className={tabClasses} onClick={props.onClick.bind(this, props.tabName)}>
      {props.children}
    </li>
  )
}

export default Tab;
