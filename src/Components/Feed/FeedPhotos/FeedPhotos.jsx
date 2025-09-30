import React from 'react';
import FeedPhotosItem from './FeedPhotosItem/FeedPhotosItem';
import useFetch from '../../../Hook/useFetch';
import { GET_PHOTOS } from '../../../api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import Style from '../FeedPhotos/FeedPhotos.module.css';

const FeedPhotos = ({ setModal }) => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = GET_PHOTOS({ page: 1, total: 1, user: 170 });
      request(url, options);
    }

    fetchPhotos();
  }, []);

  if (error) return <Error erro={error} />;
  if (loading) return <Loading />;
  if (Array.isArray(data))
    return (
      <ul className={`${Style.feed} animeLeft`}>
        {data.map((photo) => {
          return (
            <FeedPhotosItem key={photo.id} photo={photo} setModal={setModal} />
          );
        })}
      </ul>
    );
  else {
    return null;
  }
};

export default FeedPhotos;
