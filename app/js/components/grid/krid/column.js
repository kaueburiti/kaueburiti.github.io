import React from 'react';
import cx from 'classnames';
import _ from 'lodash';
import style from 'css/base/krid.css';

export default class Column extends React.Component {
  options(){
    if(_.isUndefined(this.props.options))
      return;

    return this.props.options.map((option) => {
      return style[option];
    });
  }

  render() {
    const options = this.options();
    const classes = cx(style['col-xs'], options);

    return (
      <div className={classes}>
        {this.props.children}
      </div>
    );
  }
}
