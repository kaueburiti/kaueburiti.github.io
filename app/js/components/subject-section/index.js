import React from "react";
import {Section} from 'components/grid/';
import style from "./subject-section.css";

const SubjectSection = (props) => {
  return(
    <Section>
      {props.title && <h2 className={style.subjectSection__title}>{props.title}</h2>}

      {props.children}
    </Section>
  )
}

export default SubjectSection;
