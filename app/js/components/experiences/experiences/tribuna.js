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
          'Javascript',
          'PHP environment',
          'Ruby on Rails',
          'Gulp/Grunt',
          'Pair programming',
          'Wordpress'
        ]
      }>
      <p>The Tribuna do Norte is the most important paper in my region, and there i worked on
      great <span className={style.highlight}>multidisciplinary teams</span>.</p>
      <p>The bigger project that I worked on in Tribuna do Norte, was the <a
      href="http://www.tribunadonorte.com.br/classificados"
      title="Classificados da Tribuna do Norte"
      target="_blank">
      "Classificados da Tribuna do Norte"</a>,
      a online plataform to selling, focused on properties and cars, and i helped to <span className={style.highlight}>design and code it</span>.
      We have build some others small things and <span className={style.highlight}>landing page</span> to
      special journalistc articles, some of that <span className={style.highlight}>awarded in national contests</span>!</p>
    </Experience>
  );
};

export default Tribuna;
