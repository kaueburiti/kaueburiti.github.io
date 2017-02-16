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

export default Jhonny;
