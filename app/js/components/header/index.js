import React from "react";
import Navbar from "components/navbar/";
import style from "./header.css";

const Header = () => {
  return(
    <div className={style.header}>
      <Navbar />
    </div>
  )
}

export default Header;
