import React from 'react';
import { connect } from "react-redux";
import { navbarToggle } from "actions/";
import cx from 'classnames';
import _ from 'lodash';
import Sticky from "react-stickynode";
import FontAwesome from 'react-fontawesome';
import {Container, Column, Row} from 'components/grid/';
import Button from 'components/ui/button/';
import style from './navbar.css';

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
              <img height="50px" src="https://cdn1.iconfinder.com/data/icons/simple-icons/4096/codeschool-4096-black.png" />
            </Column>

            <Column options={['col-md-10', 'last-xs', 'end-md']}>
              <ul className={menuItemsClasses}>
                <li className={style['main-menu__item']}>
                  <a href="#profile">Profile</a>
                </li>

                <li className={style['main-menu__item']}>
                  <a href="#">Skills</a>
                </li>

                <li className={style['main-menu__item']}>
                  <a href="#">Experience</a>
                </li>

                <li className={style['main-menu__item']}>
                  <a href="#">Services</a>
                </li>

                <li className={style['main-menu__item']}>
                  <a href="#">References</a>
                </li>

                <li className={style['main-menu__item']}>
                  <a href="#">Contact</a>
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
