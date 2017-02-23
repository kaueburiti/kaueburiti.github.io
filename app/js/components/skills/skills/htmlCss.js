import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import htmlImage from "image/skills/html.jpg";
import { loadBackgroundImage } from "./lib.js";
import style from "./../skills.css";

const HtmlCss = (props) => {
  loadBackgroundImage(htmlImage, style.skill__header, style.fadeIn);

  return(
    <div id="html-css">
      <header className={style.skill__header}>
        <Container>
          <Row>
            <Column options={['col-xs-12']}>
              <div className={style.skill__headerContentContainer}>
                <div className={style.skill__headerContent}>
                  <h1 className={style.skill__headerTitle}>HTML & CSS</h1>
                  <p className={style.skill__headerSubheading}>
                    “Without foundations, there can be no fashion.“ - Christian Dior
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        </Container>
      </header>

      <div className={style.skill__content}>
        <p><span className={style.highlight}>CSS's methodologies </span>
        are something that fascinates me, and I think we should not underestimate the power
        of a well writeded HTML/CSS</p>

        <p>I'm using a lot of <span className={style.highlight}>CSS modules </span>
        with <span className={style.highlight}>PostCSS</span>, configured to
        allow <span className={style.highlight}>SASS</span>'s syntax.
        <span className={style.highlight}> Animations </span>
        and <span className={style.highlight}>how CSS works under the hood</span> are
        subjects, wich each day more, gives me interesting new things to study!</p>
      </div>
    </div>
  );
};

export default HtmlCss;
