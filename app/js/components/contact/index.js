import React from "react";
import {Container, Column, Row} from 'components/grid/';
import ScrollDownButton from 'components/ui/scroll-down-button/';
import Balloon from 'components/ui/balloon/';
import Navbar from "components/navbar/";
import Profile from "components/profile/";
import style from "./contact.css";

const Contact = () => {
  return(
    <div id="contact" className={style.contact}>
      <div className={style.contact__overlay}></div>
      <div className={style.contact__content}>
        <h3 className={style.contact__call}>Want to contact me? Please, send me a email!</h3>
        <p className={style.contact__email}>contact@kaueburiti.com</p>
      </div>
    </div>
  )
}

export default Contact;
