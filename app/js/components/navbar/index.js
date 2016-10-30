import React from 'react';
import cx from 'classnames';
import _ from 'lodash';
import FontAwesome from 'react-fontawesome';

import {Container, Column, Row} from 'components/grid/';
import Button from 'components/button/';
import style from './navbar.css';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      opened: false
    };
  }

  toggleMenu(){
    const isOpened = this.state.opened;

    this.setState({
      opened: !isOpened
    });
  }

  render() {
    const menuItemsClasses = cx(style['main-menu__items'],{
      [style['-hidden']]: !this.state.opened
    });

    const overlayClasses = cx(style['main-menu__overlay'],{
      [style['-hidden']]: !this.state.opened
    });

    return (
      <nav className={style['main-menu']}>
        <div className={overlayClasses} onClick={this.toggleMenu.bind(this)}></div>

        <Container>
          <Row options={['middle-xs']}>
            <Column options={['col-xs-8', 'col-md-2']}>
              <img src="https://drupal.com/themes/drupalcom/logo.png" />
            </Column>

            <Column options={['col-md-10', 'last-xs', 'end-md']}>
              <ul className={menuItemsClasses}>
                <li className={style['main-menu__item']}>Home</li>

                <li className={style['main-menu__item']}>Escudo das Guinas</li>

                <li className={style['main-menu__item']}>Áreas protegidas</li>

                <li className={style['main-menu__item']}>Publicações</li>

                <li className={style['main-menu__item']}>Vídeos</li>

                <li className={style['main-menu__item']}>mapas</li>
              </ul>
            </Column>

            <Column options={['col-xs-4', 'last-md', 'end-xs']}>
              <Button
                onClick={this.toggleMenu.bind(this)}
                className={style['main-menu__toggle']} >
                <FontAwesome name='navicon' /> Menu
              </Button>
            </Column>
          </Row>
        </Container>
      </nav>
    );
  }
}
