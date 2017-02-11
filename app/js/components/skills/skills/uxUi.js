import React from "react";
import { Section, Container, Column, Row } from 'components/grid/';
import style from "./../skills.css";

const UxUi = (props) => {
  return(
    <div>
      <header className={style.skill__header + ' ' + style.ux}>
        <Container>
          <Row>
            <Column options={['col-xs-12']}>
              <div className={style.skill__headerContentContainer}>
                <div className={style.skill__headerContent}>
                  <h1 className={style.skill__headerTitle}>UX/UI Design</h1>
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
  )
}

export default UxUi;
