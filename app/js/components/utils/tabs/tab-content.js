import React from "react";

const TabContent = (props) => {
  if(props.currentTab !== props.contentController)
    return null;

  return(
    <div>
      {props.children}
    </div>
  )
}

export default TabContent;
