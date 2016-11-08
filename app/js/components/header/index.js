import React from "react";
import Navbar from "components/navbar/";
import Ballon from "components/ui/ballon";
import style from "./header.css";

const Header = () => {
  return(
    <div className={style.header}>
      <Navbar />

      <Ballon>Hello guys!</Ballon>
    </div>
  )
}

export default Header;
