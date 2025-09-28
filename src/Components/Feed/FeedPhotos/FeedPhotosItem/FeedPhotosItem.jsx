import React from 'react';
import Style from './FeedPhotoItem.module.css';

const FeedPhotosItem = ({ photo }) => {
  return (
    <li className={Style.photo}>
      <img src={photo.src} alt={photo.title} />
      <span className={Style.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
