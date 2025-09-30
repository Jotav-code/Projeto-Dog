import React from 'react';
import Style from './FeedPhotoItem.module.css';
import Image from '../../../Helper/Image';

const FeedPhotosItem = ({ photo, setModal }) => {
  function handleClick() {
    setModal(photo);
  }
  return (
    <li className={Style.photo} onClick={handleClick}>
      <Image src={photo.src} alt={photo.title} />
      <span className={Style.visualizacao}>{photo.acessos}</span>
    </li>
  );
};

export default FeedPhotosItem;
