import React from 'react';
import cx from 'classnames';
import _ from 'lodash';
import style from 'css/base/krid.css';

export default class Row extends React.Component {
  options(){
    if(_.isUndefined(this.props.options))
      return;

    return this.props.options.map((option) => {
      return style[option];
    });
  }

  render() {
    const options = this.options();
    const classes = cx(style.row, options);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
