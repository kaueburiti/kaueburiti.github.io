import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
import jaimersonImage from 'image/references/jaimerson.jpg';
import style from "./../references.css";

const Jaimerson = () => {
  return (
    <div className={style.reference}>
      <img className={style.reference__image} src={jaimersonImage} />

      <div className={style.reference__content}>
        <header className={style.reference__header}>

          <h3 className={style.reference__name}>Jaimerson Araújo</h3>
          <p className={style.reference__profession}>Developer @ Ecostage</p>
        </header>

        <div className={style.reference__text}>
          Kauê is an outstanding professional, disciplined and communicative.
          His expertise and discipline allow him to be extremely precise with
          the estimates he provides on delivery times.
        </div>
      </div>
    </div>
  );
};

export default Jaimerson;
