import React from 'react';
import cx from 'classnames';
import style from './section.css';

const Section = (props) => {
  const sectionClasses = cx(props.className, style.section,{
    [style.top]: props.top,
    [style.bottom]: !props.noBottom,
  });

  return(
    <section {...props} className={sectionClasses}>
      <header className={style.section__header}>
        <h2 className={style.section__title}>{props.title}</h2>

        <p className={style.section__subheading}>
          {props.subheading}
        </p>
      </header>

      {props.children}
    </section>
  );
};

export default Section;
