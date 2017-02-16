import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
import jhonnyImage from 'image/references/jhonny.jpg';
import style from "./../references.css";

const Jhonny = () => {
  return (
    <div className={style.reference}>
      <img className={style.reference__image} src={jhonnyImage} />

      <div className={style.reference__content}>
        <header className={style.reference__header}>

          <h3 className={style.reference__name}>Jhonny Michel</h3>
          <p className={style.reference__profession}>Developer @ Evolux</p>
        </header>

        <div className={style.reference__text}>
          <p>
            It's hard for me to say that out loud, 'cause I'm quite competitive,
            but this guy is inspiring. He's learning new stuff everyday and knows
            how to work with bleeding edge front-end technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jhonny;
