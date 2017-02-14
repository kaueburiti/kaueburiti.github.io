import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import style from "./../skills.css";

const Design = (props) => {
  return(
    <div>
      <header className={style.skill__header + ' ' + style.design}>
        <Container>
          <Row>
            <Column options={['col-xs-12']}>
              <div className={style.skill__headerContentContainer}>
                <div className={style.skill__headerContent}>
                  <h1 className={style.skill__headerTitle}>Design</h1>
                  <p className={style.skill__headerSubheading}>
                    “Those who don’t build must burn.” – Ray Bradbury
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        </Container>
      </header>

      <div className={style.skill__content}>
        <p>I love giving to the user a
        <span className={style.highlight}> beatiful interface</span>, thinking about
        each step of the <span className={style.highlight}>user experience</span>,
        inside and outside the Web. <span className={style.highlight}> Usuability</span>,
        beatuty and simplicity are goals that i always want to reach.</p>
        <p>Tools like <span className={style.highlight}>Illustrator</span> and
        <span className={style.highlight}> Photoshop</span> helps me a lot in my work, but we
        can never forget about how useful cant be a simple and paper to things like
        <span className={style.highlight}> prototyping</span> and idea's validation.</p>
      </div>
    </div>
  )
}

export default Design;
