import React from "react";
import {Container, Column, Row, Section} from 'components/grid/';
import Balloon from 'components/ui/balloon/';
import style from "./profile.css";
import mansFace from "image/profile/mans_face.png";

const Profile = () => {
  return(
    <Section
      title={'Profile'}
      subheading={'Let me tell more about me, ok?'}
      id="profile"
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
                  <h5 className={style.balloon__title}>Twitter</h5>
                  <p className={style.balloon__content}>
                    <a href="https://twitter.com/pontoka" target="_blank">
                      twitter.com/pontoka
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
                Lorem ipsum <span className={style.highlight}>dolor sit</span> amet, consectetur adipiscing elit, sed do
                eiusmod <span className={style.highlight}>tempor</span>
                incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud <span className={style.highlight}>exercitation</span>
                ullamco laboris nisi ut aliquip ex ea commodo ad minim veniam consequat.
              </div>
            </Column>

          </Row>
        </Container>
      </div>
    </Section>
  )
}

export default Profile;
