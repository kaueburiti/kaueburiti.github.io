import React from 'react';
import _ from 'underscore';
import Jump from 'components/utils/jump/';
import cx from 'classnames';
import FontAwesome from 'react-fontawesome';
import style from './scroll-down-button.css';

const ScrollDownButton = (props) => {
  const arrowClasses = cx(style.scrollDownButton__arrow, {
    [style['-bounce']]: props.bounce
  });

  return(
    <Jump target="#profile">
      <div className={style.scrollDownButton}>
        <p>{props.children}</p>
        <FontAwesome
          className={arrowClasses}
          name='angle-down fa-2x' />
      </div>
    </Jump>
  );
};

export default ScrollDownButton;
