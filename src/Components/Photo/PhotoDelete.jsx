import React from 'react';
import Style from './PhotoDelete.module.css';
import { PHOTO_DELETE } from '../../api';
import { Navigate } from 'react-router-dom';
import useFetch from '../../Hook/useFetch';

const PhotoDelete = ({ id }) => {
  const { request, loading } = useFetch();

  async function handleClick() {
    const confirm = window.confirm('Tem certeza que deseja deletar?');
    if (confirm) {
      const { url, options } = PHOTO_DELETE(id);
      const { response } = await request(url, options);
      if (response.ok) window.location.reload();
    }
  }

  return (
    <>
      {loading ? (
        <button className={Style.delete} disabled>
          Deletando...
        </button>
      ) : (
        <button className={Style.delete} onClick={handleClick}>
          Deletar
        </button>
      )}
    </>
  );
};

export default PhotoDelete;
