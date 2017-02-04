import React from "react";
import {Container, Column, Row} from 'components/grid/';
import ScrollDownButton from 'components/ui/scroll-down-button/';
import Balloon from 'components/ui/balloon/';
import Navbar from "components/navbar/";
import Profile from "components/profile/";
import style from "./header.css";

const Header = () => {
  return(
    <div className={style.header}>
      <Navbar />
      <div className={style.header__bg}></div>
      <div className={style.header__mask}></div>

      <section className={style.header__content}>
        <h1 className={style.header__title}>
          Kauê Buriti <Balloon yellow>Hello!</Balloon>
        </h1>
        <h3 className={style.header__subheading}>Front-end Developer</h3>
      </section>

      <ScrollDownButton bounce>Come with me</ScrollDownButton>
    </div>
  )
}

export default Header;
