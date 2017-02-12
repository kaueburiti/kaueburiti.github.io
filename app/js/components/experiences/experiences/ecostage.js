import React from "react";
import { Section } from "components/grid/";
import Experience from "./../experience.js";
import style from "./../experiences.css";

const Tribuna = () => {
  return (
    <Experience
      company='Ecostage'
      role='Front-end Developer'
      startDate='2015'
      endDate='Now'
      className={style.ecostage}
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
