import React from 'react';
import Style from './PhotoContent.module.css';
import { Link } from 'react-router-dom';
import PhotoComments from './PhotoComments';

const PhotoContent = ({ data }) => {
  const { photo, comments } = data;
  return (
    <div className={Style.photo}>
      <div className={Style.img}>
        <img src={photo.src} alt={photo.title} />
      </div>
      <div className={Style.details}>
        <div>
          <p className={Style.author}>
            <Link to={`/perfil/${photo.author}`}>@{photo.author}</Link>
            <span className={Style.visualizacoes}>{photo.acessos}</span>
          </p>
          <h1 className="title">
            <Link to={`/foto/${photo.id}`}>{photo.title}</Link>
          </h1>
          <ul className={Style.attributes}>
            <li>{photo.peso} Kg</li>
            <li>{photo.idade} Anos</li>
          </ul>
        </div>
      </div>
      <PhotoComments id={photo.id} comments={comments} />
    </div>
  );
};

export default PhotoContent;
