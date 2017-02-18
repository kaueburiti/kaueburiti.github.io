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
          'Advanced Javascript',
          'Single page applications',
          'CSS Modules',
          'Webpack',
          'React + Redux stack'
        ]
      }>
      <p>Right now I'm working remotely at Ecostage, a company that have focuses on
      technological projects related to the <span className={style.highlight}>environmental cause</span>. The experience with
      a <span className={style.highlight}>remote job</span> and
      more <span className={style.highlight}>independent teams</span> has been a huge learning!</p>
      <p>Usually, we use a robust front-end stack, using <span className={style.highlight}>Rails as API</span> to communicate with a total
      independent <span className={style.highlight}>front-end driven application</span>.</p>
    </Experience>
  );
};

export default Tribuna;
