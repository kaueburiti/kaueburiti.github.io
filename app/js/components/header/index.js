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
      <div className={style.headerMask}></div>

      <section className={style.header__content}>
        <h1 className={style.header__title}>Kauê Buriti</h1>
        <h3 className={style.header__subheading}>Front-end Developer</h3>
      </section>
    </div>
  )
}

export default Header;
