import React from 'react';
import _ from 'underscore';
import cx from 'classnames';
import FontAwesome from 'react-fontawesome';
import style from './scroll-down-button.css';

const ScrollDownButton = (props) => {
  return(
    <div className={style.scrollDownButton}>
      <p>{props.children}</p>
      <FontAwesome name='angle-down fa-2x' />
    </div>
  );
};

export default ScrollDownButton;
