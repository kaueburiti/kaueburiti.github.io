import React from 'react';
import { connect } from "react-redux";
import { navbarToggle } from "actions/";
import cx from 'classnames';
import _ from 'lodash';
import Jump from 'components/utils/jump/';
import Sticky from "react-stickynode";
import FontAwesome from 'react-fontawesome';
import {Container, Column, Row} from 'components/grid/';
import Button from 'components/ui/button/';
import style from './navbar.css';
import logo from 'image/logo/logo.png';

const mapStateToProps = (state) => {
  return {
    opened: state.navbarIsExpanded
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    navbarToggle() {
      dispatch(navbarToggle());
    }
  };
}

const Navbar = (props) => {
  const menuItemsClasses = cx(style['main-menu__items'], {
    [style['-hidden']]: !props.opened
  });

  const overlayClasses = cx(style['main-menu__overlay'], {
    [style['-hidden']]: !props.opened
  });

  return(
    <Sticky enabled={true} innerZ={100} enableTransforms={false}>
      <nav className={style['main-menu']}>
        <div className={overlayClasses} onClick={props.navbarToggle.bind(this)}></div>

        <Container>
          <Row options={['middle-xs']}>
            <Column options={['col-xs-8', 'col-md-2']}>
              <Jump target="#header">
                <p className={style.mainMenu__logo}>&#60;/&#62;</p>
              </Jump>
            </Column>

            <Column options={['col-md-10', 'last-xs', 'end-md']}>
              <ul className={menuItemsClasses}>
                <li className={style['main-menu__item']}>
                  <Jump target="#profile">Profile</Jump>
                </li>

                <li className={style['main-menu__item']}>
                  <Jump target="#skills">Skills</Jump>
                </li>

                <li className={style['main-menu__item']}>
                  <Jump target="#experiences">Experiences</Jump>
                </li>

                <li className={style['main-menu__item']}>
                  <Jump target="#references">References</Jump>
                </li>

                <li className={style['main-menu__item']}>
                  <Jump target="#contact">Contact</Jump>
                </li>
              </ul>
            </Column>

            <Column options={['col-xs-4', 'last-md', 'end-xs']}>
              <Button
                onClick={props.navbarToggle.bind(this)}
                className={style['main-menu__toggle']} >
                <FontAwesome name='navicon' /> Menu
              </Button>
            </Column>
          </Row>
        </Container>
      </nav>
    </Sticky>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
