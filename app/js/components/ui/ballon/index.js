import React from "react";
import style from "./ballon.css";

const Ballon = (props) => {
  return <span className={style.ballon}>{props.children}</span>
}

export default Ballon;
