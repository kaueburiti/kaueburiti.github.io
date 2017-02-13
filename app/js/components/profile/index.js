import React from "react";
import {Container, Column, Row, Section} from 'components/grid/';
import Balloon from 'components/ui/balloon/';
import style from "./profile.css";
import mansFace from "image/profile/mans_face.png";

const Profile = () => {
  return(
    <Section
      title={'Profile'}
      subheading={'Who am I and how can you find me.'}
      id="profile"
      top
      className={style.profileContainer} >

      <div className={style.profile}>
        <Container>
          <Row options={['center-xs']}>
            <Column options={['col-md-6', 'col-sm-8', 'col-xs-10']}>
              <div className={style.profile__pictureArea}>
                <Balloon className={style.balloon + ' ' + style.one}>
                  <h5 className={style.balloon__title}>Github</h5>
                  <p className={style.balloon__content}>
                    <a href="https://github.com/kaueburiti" target="_blank">
                      github.com/kaueburiti
                    </a>
                  </p>
                </Balloon>

                <Balloon className={style.balloon + ' ' + style.two}>
                  <h5 className={style.balloon__title}>LinkedIn</h5>
                  <p className={style.balloon__content}>
                    <a href="https://br.linkedin.com/in/kaueburiti" target="_blank">
                      br.linkedin.com/in/kaueburiti
                    </a>
                  </p>
                </Balloon>

                <img className={style.profile__picture} src={mansFace} />

                <Balloon className={style.balloon + ' ' + style.three}>
                  <h5 className={style.balloon__title}>E-mail</h5>
                  <p className={style.balloon__content}>
                    kauepbd@gmail.com
                  </p>
                </Balloon>

                <Balloon className={style.balloon + ' ' + style.four}>
                  <h5 className={style.balloon__title}>Phone</h5>
                  <p className={style.balloon__content}>
                    +55 84 9 9846 7756
                  </p>
                </Balloon>
              </div>

              <div className={style.profile__resume}>
                <p>I'm <span className={style.highlight}>Kauê Buriti</span>, a
                front-end developer living at Natal,
                <span className={style.highlight}> Brazil</span>.
                I have always loved the Web, so, when I realized that I could help
                to build it, I started my life alongside things like
                <span className={style.highlight}> Design</span>,
                <span className={style.highlight}> Javascript</span>,
                <span className={style.highlight}> HTML/CSS</span> and
                <span className={style.highlight}> Web relateded business</span>.
                </p>


              </div>

              <div className={style.profile__resume}>
                <p>It's been a great journey, and I hope you enjoy know a little
                bit more about it!</p>
              </div>
            </Column>

          </Row>
        </Container>
      </div>
    </Section>
  )
}

export default Profile;
