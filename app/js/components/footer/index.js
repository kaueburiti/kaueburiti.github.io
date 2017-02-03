import React from "react";
import {Container, Column, Row} from 'components/grid/';
import ScrollDownButton from 'components/ui/scroll-down-button/';
import Balloon from 'components/ui/balloon/';
import Navbar from "components/navbar/";
import Profile from "components/profile/";
import style from "./footer.css";

const Header = () => {
  return(
    <div className={style.footer}>
      <div className={style.footer__overlay}></div>
      <div className={style.footer__content}>
        <h3 className={style.footer__call}>Want to contact me? Please, send me a email!</h3>
        <p className={style.footer__email}>contact@kaueburiti.com</p>
      </div>
    </div>
  )
}

export default Header;
