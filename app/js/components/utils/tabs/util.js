import React from "react";

export const getChildPerTypeName = (children, props) => {
  return React.Children.map(children, (child) => {
    if(!child)
      return;

    return React.cloneElement(child, props);
  });
};
