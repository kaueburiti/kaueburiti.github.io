import React from "react";
import {Section, Container, Column, Row} from 'components/grid';
import style from "./references.css";
import {
  Virna,
  Tiago,
  Ottony,
  Jhonny,
  Jaimerson,
  Jonathas
} from './references/';

const References = () => {
  return (
    <Section
      title="References"
      subheading={'Wind and words.'}
      id="references">

      <Container>
        <div className={style.references}>
          <Jaimerson />
          <Tiago />
          <Virna />
          <Jonathas />
          <Jhonny />
          <Ottony />
        </div>
      </Container>

    </Section>
  );
};

export default References;
