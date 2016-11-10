import React from "react";
import {Container, Column, Row} from 'components/grid/';
import Ballon from "components/ui/ballon";
import style from "./profile.css";

const Profile = () => {
  return(
    <section id="profile" className={style.profileContainer}>
      <div className={style.profile}>
        <Row>
          <Column options={['col-xs-12', 'col-md-6']}>
            <img className={style.profile__image} src="https://scontent.ffor2-1.fna.fbcdn.net/v/t1.0-9/12715809_1297142960312467_4707451674445037566_n.jpg?oh=4588c06d4a6ebf7d8c7a5ec2efba377e&oe=58D04D55" />
          </Column>

          <Column options={['col-xs-12', 'col-md-6']}>
            <div className={style.profile__content}>
              <div className={style.profile__header}>
                <div className={style.profile__headerTop}>
                  <Ballon>Hello!</Ballon>
                </div>

                <h2 className={style.profile__name}>
                  I'm <span className={style.nameHighlight}>Kauê Buriti</span>
                </h2>
                <p className={style.profile__bio}>
                  In love with front-end development.
                </p>
              </div>

              <div className={style.profile__body}>
                <div className={style.profile__info}>
                  <span className={style.profile__infoLabel}>
                    E-mail:
                  </span>
                  <span className={style.profile__infoText}>
                    kauepbd@gmail.com
                  </span>
                </div>

                <div className={style.profile__info}>
                  <span className={style.profile__infoLabel}>
                    Phone:
                  </span>
                  <span className={style.profile__infoText}>
                    +55 84 99846 7756
                  </span>
                </div>

                <div className={style.profile__info}>
                  <span className={style.profile__infoLabel}>
                    Github:
                  </span>
                  <span className={style.profile__infoText}>
                    https://github.com/kaueburiti
                  </span>
                </div>
              </div>
            </div>
          </Column>
        </Row>
      </div>
    </section>
  )
}

export default Profile;
