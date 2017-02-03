import React from "react";
import {Section, Container, Column, Row} from 'components/grid/';
import style from "./references.css";

const References = () => {
  return (
    <Section
      title="References"
      subheading={'Let me tell more about me, ok?'}
      id="references">

      <Container>
        <div className={style.references}>
          {
            _.times(6, function() {
              return (
                <div className={style.reference}>
                  <img className={style.reference__image} src="https://s-media-cache-ak0.pinimg.com/736x/91/f9/e2/91f9e2f9ede14378ac4e2cce837b7f82.jpg" />

                  <div className={style.reference__content}>
                    <header className={style.reference__header}>

                      <h3 className={style.reference__name}>Crazy Dog</h3>
                      <p className={style.reference__profession}>Back-end developer</p>
                    </header>

                    <div className={style.reference__text}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    </div>
                  </div>
                </div>
              )
            })
          }

        </div>
      </Container>

    </Section>
  );
};

export default References;
