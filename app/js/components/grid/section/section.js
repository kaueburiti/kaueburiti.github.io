import React from 'react';
import cx from 'classnames';
import style from './section.css';

const Section = (props) => {
  const sectionClasses = cx(props.className, style.section,{
    [style.top]: props.top,
    [style.bottom]: !props.noBottom,
  });

  return(
    <section
      className={sectionClasses} >
      {props.children}
    </section>
  );
};

export default Section;
