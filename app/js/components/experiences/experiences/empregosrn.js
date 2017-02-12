import React from "react";
import { Section } from "components/grid/";
import Experience from "./../experience.js";
import style from "./../experiences.css";

const EmpregosRN = () => {
  return (
    <Experience
      company='Empregos RN'
      role='Co-founder & Front-end Developer'
      startDate='2010'
      endDate='2016'
      className={style.empregosrn}
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

export default EmpregosRN;
