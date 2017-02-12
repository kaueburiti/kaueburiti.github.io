import React from "react";
import { Section } from "components/grid/";
import Experience from "./../experience.js";
import style from "./../experiences.css";

const Tribuna = () => {
  return (
    <Experience
      company='Tribuna do Norte'
      role='Front-end Developer'
      startDate='2013'
      endDate='2015'
      className={style.tribuna}
      reverse
      skills={
        [
          'UX/UI',
          'Javascript',
          'Design',
          'Team work/management',
          'Version Control'
        ]
      }>
      Lorem ipsum dolor sit amet, consectetur adipiscing
      elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
      aute irure dolor in reprehenderit
    </Experience>
  );
};

export default Tribuna;
