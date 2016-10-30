import React from 'react';
import cx from 'classnames';
import style from 'css/base/krid.css';

export default class Container extends React.Component {
  render() {
    const containerClasses = cx(style.container, {
      [style['container-fluid']]: this.props.fluid
    });

    return (
      <div className={containerClasses}>
        {this.props.children}
      </div>
    );
  }
}
