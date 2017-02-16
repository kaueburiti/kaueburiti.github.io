import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
import ottonyImage from 'image/references/ottony.jpg';
import style from "./../references.css";

const Ottony = () => {
  return (
    <div className={style.reference}>
      <img className={style.reference__image} src={ottonyImage} />

      <div className={style.reference__content}>
        <header className={style.reference__header}>

          <h3 className={style.reference__name}>Ottony Chamberlaine</h3>
          <p className={style.reference__profession}>Developer @ Ecostage</p>
        </header>

        <div className={style.reference__text}>
          <p>
            Organized and with a natural talent with people, Kauê is capable to work
            as a team by being clear in their goals and open to differing opinions.
            Their creativity stands out if reflected in their works.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ottony;
