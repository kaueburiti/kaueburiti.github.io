import React from "react";

export const getChildPerTypeName = (children, name, props) => {
  return React.Children.map(children, (child) => {
    if(child.type !== name && child.type.name !== name)
      return;

    return React.cloneElement(child, props);
  });
};
