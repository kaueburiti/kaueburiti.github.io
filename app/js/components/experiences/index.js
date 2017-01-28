import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
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

      <p className={style.experienceContent__text}>
        {props.children}
      </p>

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
  return (
    <div className={style.experience}> 
      <Container>
        <Row options={['center-xs']}>
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

const Experiences = () => {
  return (
    <Section
      title="Experiences"
      subheading={'Let me tell more about me, ok?'}
      id="experiences">

      <Experience 
        company='Empregos RN'
        role='Co-founder & Front-end Developer' 
        startDate='2010'
        endDate='2016'
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
    </Section>
  );
};

export default Experiences;
