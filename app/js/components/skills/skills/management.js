import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import managementImage from "image/skills/management.jpg";
import { loadBackgroundImage } from "./lib.js";
import style from "./../skills.css";

const ProjectManagement = (props) => {
  loadBackgroundImage(managementImage, style.skill__header, style.fadeIn);

  return(
    <div>
      <header className={style.skill__header + ' ' + style.management}>
        <Container>
          <Row>
            <Column options={['col-xs-12']}>
              <div className={style.skill__headerContentContainer}>
                <div className={style.skill__headerContent}>
                  <h1 className={style.skill__headerTitle}>Project Management</h1>
                  <p className={style.skill__headerSubheading}>
                    “Plans are worthless. Planning is essential.” – Dwight D. Eisenhower
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        </Container>
      </header>

      <div className={style.skill__content}>
        <p>As a professional with a <span className={style.highlight}>remote work</span> and
        <span className={style.highlight}> big projects</span>, I had some important
        experiences with project management. <span className={style.highlight}> Requirements gathering</span>,
        <span className={style.highlight}> project management methodologies</span>,
        <span className={style.highlight}> code versioning </span>
        and <span className={style.highlight}>communication habilities</span> are essencial to those who want to be a more
        independent professional.</p>
      </div>
    </div>
  );
};

export default ProjectManagement;
