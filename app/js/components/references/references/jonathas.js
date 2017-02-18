import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
import jonathasImage from 'image/references/jonathas.jpg';
import style from "./../references.css";

const Jonathas = () => {
  return (
    <div className={style.reference}>
      <img className={style.reference__image} src={jonathasImage} />

      <div className={style.reference__content}>
        <header className={style.reference__header}>

          <h3 className={style.reference__name}>Jonathas Rangel</h3>
          <p className={style.reference__profession}>TI Manager @ Tribuna do Norte</p>
        </header>

        <div className={style.reference__text}>
          <p>
            A professional who cares about the quality of his work. Engaged in
            studies on his area, reaching to implement the best practices in
            his projects. He works very well as a team and is easy to deal with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Jonathas;
