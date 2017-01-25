import React from "react";
import cx from "classnames";
import style from "./balloon.css";

const Balloon = (props) => {
  const baloonClasses = cx(props.className, style.balloon, {
    [style['-yellow']]: props.yellow
  });

  return <span className={baloonClasses}>{props.children}</span>
}

export default Balloon;
