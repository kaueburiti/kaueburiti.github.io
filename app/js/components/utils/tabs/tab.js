import React from "react";

const Tab = (props) => {
  return(
    <div onClick={props.onClick.bind(this, props.tabName)}>
      {props.children}
    </div>
  )
}

export default Tab;
