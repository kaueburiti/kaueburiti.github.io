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
          Muito carismático e extrovertido, está sempre em busca de boas relações
          com a equipe. É muito competente e comprometido com os projetos nos
          quais trabalha, prezando pelas melhores formas de desenvolver as
          soluções necessárias. Sua dinamicidade e pluralidade permite com que
          ele saiba alternar entre diferentes áreas do desenvolvimento web.
        </div>
      </div>
    </div>
  );
};

export default Jonathas;
