import React from "react";
import {Container, Column, Row} from 'components/grid/';
import Navbar from "components/navbar/";
import Profile from "components/profile/";
import style from "./header.css";

const Header = () => {
  return(
    <div className={style.header}>
      <Navbar />
      <div className={style.headerBg}></div>
    </div>
  )
}

export default Header;
