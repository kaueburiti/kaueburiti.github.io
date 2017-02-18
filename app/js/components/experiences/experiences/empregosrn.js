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
          'Javascript',
          'React JS',
          'Ruby on Rails',
          'Version Control',
          'Advanced CSS methodologies'
        ]
      }>
      <p>In 2010 I helped to build the <a href="http://vagasempregosrn.com.br/" title="Empregos RN" target="_blank">Empregos RN</a>,
      the <span className={style.highlight}>bigger job plataform in my State</span>.</p>
      <p>I believe that the most important learnings that i got were about
      <span className={style.highlight}> Business</span>, <span className={style.highlight}>Project Management</span> and
      improving the <span className={style.highlight}>User Experience through tests and interviews</span>.</p>
      <p>The lessons of <span className={style.highlight}>entrepreneurship</span> that i got from this business are priceless!</p>
    </Experience>
  );
};

export default EmpregosRN;
