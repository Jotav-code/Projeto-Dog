import React from 'react';
import Style from './Image.module.css';

const Image = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = React.useState(true);
  function handleLodad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }
  return (
    <div className={Style.wrapper}>
      {skeleton && <div className={Style.skeleton}></div>}
      <img onLoad={handleLodad} className={Style.img} alt={alt} {...props} />
    </div>
  );
};

export default Image;
