import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
import virnaImage from 'image/references/virna.jpg';
import style from "./../references.css";

const Virna = () => {
  return (
    <div className={style.reference}>
      <img className={style.reference__image} src={virnaImage} />

      <div className={style.reference__content}>
        <header className={style.reference__header}>

          <h3 className={style.reference__name}>Virna Varela</h3>
          <p className={style.reference__profession}>Designer @ Tribuna do Norte</p>
        </header>

        <div className={style.reference__text}>
          <p>
            His dynamicity and plurality allow him to know how to switch between
            different areas of web development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Virna;
