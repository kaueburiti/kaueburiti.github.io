import React from 'react';
import jump from 'jump.js'

const Jump = (props) => {
  const offset = (85 + 50) * -1; //Menu Height + Margin
  const config = {
    offset,
    ...props.config
  };

  return(
    <div onClick={() => jump(props.target, config)}>
      {props.children}
    </div>
  );
};

export default Jump;
