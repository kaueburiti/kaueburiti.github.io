import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
import FontAwesome from 'react-fontawesome';
import SubjectSection from "components/subject-section/";
import style from "./skills.css";

const Skills = () => {
  return(
    <Section
      title="Skills"
      subheading={'Let me tell more about me, ok?'}
      id="skills">

      <div className={style.skill}>
        <Container>
          <Row>
            <Column options={['col-xs-12']}>
              <ul className={style.skill__options}>
                <li className={style.skill__option + ' ' + style['-selected']}>Javascript</li>
                <li className={style.skill__option}>HTML/CSS</li>
                <li className={style.skill__option}>UX/UI Design</li>
                <li className={style.skill__option}>Project Management</li>
                <li className={style.skill__option}>SEO</li>
                <li className={style.skill__option}>Extra Skills</li>
              </ul>
            </Column>
          </Row>
        </Container>

        <header className={style.skill__header}>
          <Container>
            <Row>
              <Column options={['col-xs-12']}>
                <div className={style.skill__headerContentContainer}>
                  <div className={style.skill__headerContent}>
                    <h1 className={style.skill__headerTitle}>Javascript</h1>
                    <p className={style.skill__headerSubheading}>
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                    </p>
                  </div>
                </div>
              </Column>
            </Row>
          </Container>
        </header>

        <div className={style.skill__content}>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
          explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
          odit aut fugit, sed quia consequuntur magni dolores eos qui
          consequuntur ratione voluptatem sequi nesciunt
        </div>
      </div>
    </Section>
  )
}

export default Skills;
