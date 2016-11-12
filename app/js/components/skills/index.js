import React from "react";
import {Container, Column, Row} from 'components/grid/';
import FontAwesome from 'react-fontawesome';
import SubjectSection from "components/subject-section/";
import style from "./skills.css";

const Skills = () => {
  return(
    <SubjectSection title="Skills">
      <div id="skills" className={style.skillsContainer}>
        <Row>
          <Column options={['col-xs-12', 'col-sm-6']}>
            <div className={style.skillsBox}>
              <h3 className={style.skillsBox__title}>Professional Skills</h3>

              <div className={style.skill}>
                <h4 className={style.skill__title}>Javascript</h4>
                <p className={style.skill__caption}>Knowloadge about ES6, Javascript Frameworks and design patterns</p>
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star-o' />
              </div>

              <div className={style.skill}>
                <h4 className={style.skill__title}>HTML & CSS</h4>
                <p className={style.skill__caption}>Knowloadge about ES6, Javascript Frameworks and design patterns</p>
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
              </div>

              <div className={style.skill}>
                <h4 className={style.skill__title}>Design & UI/UX</h4>
                <p className={style.skill__caption}>Knowloadge about ES6, Javascript Frameworks and design patterns</p>
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star-o' />
              </div>

              <div className={style.skill}>
                <h4 className={style.skill__title}>Project Management</h4>
                <p className={style.skill__caption}>Knowloadge about ES6, Javascript Frameworks and design patterns</p>
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star-o' />
              </div>
            </div>
          </Column>

          <Column  options={['col-xs-12', 'col-sm-6']}>
            <div className={style.skillsBox}>
              <h3 className={style.skillsBox__title}>Personal Skills</h3>

              <div className={style.skill}>
                <h4 className={style.skill__title}>English fluence</h4>
                <p className={style.skill__caption}>Knowloadge about ES6, Javascript Frameworks and design patterns</p>
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star-half-empty' />
                <FontAwesome className={style.skill__star} name='star-o' />
              </div>

              <div className={style.skill}>
                <h4 className={style.skill__title}>Punctual</h4>
                <p className={style.skill__caption}>Knowloadge about ES6, Javascript Frameworks and design patterns</p>
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
              </div>

              <div className={style.skill}>
                <h4 className={style.skill__title}>Leadership</h4>
                <p className={style.skill__caption}>Knowloadge about ES6, Javascript Frameworks and design patterns</p>
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star-half-empty' />
                <FontAwesome className={style.skill__star} name='star-o' />
              </div>

              <div className={style.skill}>
                <h4 className={style.skill__title}>Communicative</h4>
                <p className={style.skill__caption}>Knowloadge about ES6, Javascript Frameworks and design patterns</p>
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star' />
                <FontAwesome className={style.skill__star} name='star-o' />
              </div>
            </div>
          </Column>
        </Row>
      </div>
    </SubjectSection>
  )
}

export default Skills;
