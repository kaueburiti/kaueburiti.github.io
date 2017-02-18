import React from "react";
import { Container, Column, Row } from "components/grid/";
import cx from "classnames";
import style from "./experiences.css";

const ExperiencesCard = (props) => {
  return (
    <div className={style.experienceCard}>
      <div className={style.experienceCard__bg}></div>
      <div className={style.experienceCard__mask}></div>

      <div className={style.experienceCard__content}>
        <h3 className={style.experienceCard__role}>
          {props.role}
        </h3>

        <p className={style.experienceCard__date}>
          {props.startDate} - {props.endDate}
        </p>
      </div>
    </div>
  );
};

const ExperienceContent = (props) => {
  return (
    <div className={style.experienceContent}>
      <h3 className={style.experienceContent__company}>
        {props.company}
      </h3>

      <div className={style.experienceContent__text}>
        {props.children}
      </div>

      <ul className={style.experienceContent__skills}>
        {
          props.skills.map((skill, key) => {
              return (
                <li key={key} className={style.experienceContent__skill}>
                  {skill}
                </li>
              );
            }
          )
        }
      </ul>
    </div>
  );
};

const Experience = (props) => {
  const experienceClasses = cx(props.className, style.experience);
  let rowOptions = ['center-xs'];

  if(props.reverse)
    rowOptions.push('reverse');

  return (
    <div className={experienceClasses}>
      <Container>
        <Row options={rowOptions}>
          <Column options={['col-bg-3', 'col-md-4', 'col-sm-6', 'col-xs-12']}>
            <ExperiencesCard {...props} />
          </Column>

          <Column options={['col-xs-1', 'hide-in-sm', 'show-in-md']}>
          </Column>

          <Column options={['col-bg-4', 'col-md-5', 'col-sm-6', 'col-xs-12']}>
            <ExperienceContent {...props}>
              {props.children}
            </ExperienceContent>
          </Column>
        </Row>
      </Container>
    </div>
  );
};

export default Experience;
