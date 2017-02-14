import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import style from "./../skills.css";

const Javascript = (props) => {
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
                    Loving even the weird parts. Really.
                  </p>
                </div>
              </div>
            </Column>
          </Row>
        </Container>
      </header>

      <div className={style.skill__content}>
        <p>Javascript is a true passion to me, as well all the environment
        that surrounds it. Right now i'm really focused on things like
        <span className={style.highlight}> react</span>,
        <span className={style.highlight}> redux</span>,
        <span className={style.highlight}> functional programming in javascript </span>
        and <span className={style.highlight}> knowing more deeply</span> all the weirds
        and wonderful parts that composes this language.</p>

        <p>I'm really excited about the future of the language and about help to build
         a totally new generation of front-end driven applications.</p>
      </div>
    </div>
  )
}

export default Javascript;
