import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import extraImage from "image/skills/extra.jpg";
import { loadBackgroundImage } from "./lib.js";
import style from "./../skills.css";

const ExtraSkills = (props) => {
  loadBackgroundImage(extraImage, style.skill__header, style.fadeIn);

  return(
    <div>
      <header className={style.skill__header + ' ' + style.extra}>
        <Container>
          <Row>
            <Column options={['col-xs-12']}>
              <div className={style.skill__headerContentContainer}>
                <div className={style.skill__headerContent}>
                  <h1 className={style.skill__headerTitle}>Extra Skills</h1>
                  <p className={style.skill__headerSubheading}>
                    “But what I do have are a very particular set of skills,
                    skills I have acquired over a very long career.” – Taken (2008)
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        </Container>
      </header>

      <div className={style.skill__content}>
        <p>Here are some extra skills I want to tell you about:</p>
        <ul>
          <li>English communication</li>
          <li>A lot of experience with RubyOnRails environment</li>
          <li>SEO</li>
          <li>Play acoustic guitar</li>
          <li>A not really good suport in Dota</li>
        </ul>
      </div>
    </div>
  );
};

export default ExtraSkills;
