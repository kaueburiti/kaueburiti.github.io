import React from 'react';
import _ from 'underscore';
import cx from 'classnames';
import style from './button.css';

const Button = (props) => {
  const buttonClasses = cx(props.className, style.button, {
    [style['-small']]: props.small,
    [style['-success']]: props.success
  });

  const buttonProps = _.omit(props, ['small', 'success']);

  return(
    <button
      {...buttonProps}
      className={buttonClasses}
       >
      {props.children}
    </button>
  );
};

export default Button;
