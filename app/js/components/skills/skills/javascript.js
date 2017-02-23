import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import javascriptImage from "image/skills/javascript.jpg";
import { loadBackgroundImage } from "./lib.js";
import style from "./../skills.css";

const Javascript = (props) => {
  loadBackgroundImage(javascriptImage, style.skill__header, style.fadeIn);

  return(
    <div>
      <header className={style.skill__header + ' ' + style.javascript}>
        <Container>
          <Row>
            <Column options={['col-xs-12']}>
              <div className={style.skill__headerContentContainer}>
                <div className={style.skill__headerContent}>
                  <h1 className={style.skill__headerTitle}>Javascript</h1>
                  <p className={style.skill__headerSubheading}>
                    “Programs must be written for people to read, and only incidentally for machines to execute.” -  Harold Abelson
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        </Container>
      </header>

      <div className={style.skill__content}>
        <p>Javascript is a true passion to me, as well all the environment
        that surrounds it. Right now I'm really focused on things like
        <span className={style.highlight}> react</span>,
        <span className={style.highlight}> redux</span>,
        <span className={style.highlight}> functional programming in javascript </span>
        and <span className={style.highlight}> knowing more deeply</span> all the weird
        and wonderful parts that composes this language.</p>

        <p>I'm really excited about the future of the language and about helping to build
         a totally new generation of <span className={style.highlight}>front-end driven applications</span>.</p>
      </div>
    </div>
  );
};

export default Javascript;
