import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
import tiagoImage from 'image/references/tiago.jpg';
import style from "./../references.css";

const Tiago = () => {
  return (
    <div className={style.reference}>
      <img className={style.reference__image} src={tiagoImage} />

      <div className={style.reference__content}>
        <header className={style.reference__header}>

          <h3 className={style.reference__name}>Tiago Santos</h3>
          <p className={style.reference__profession}>Product Marketing @ InLoco Media</p>
        </header>

        <div className={style.reference__text}>
          <p>
            Kauê is a professional committed to the projects they develop, and his
            ability to work as a team and ransform the development of projects
            into something collaborative is one of its main characteristics.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Tiago;
