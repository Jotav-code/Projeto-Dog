import React from 'react';
import useFetch from '../../../Hook/useFetch';
import Style from './FeedModal.module.css';
import { GET_PHOTO } from '../../../api';
import Error from '../../Helper/Error';
import Loading from '../../Helper/Loading';
import PhotoContent from '../../Photo/PhotoContent';

const FeedModal = ({ photo, setModal }) => {
  const { data, loading, error, request } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PHOTO(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideCLick(event) {
    if (event.target === event.currentTarget) return setModal(null);
  }

  return (
    <section onClick={handleOutsideCLick} className={Style.modal}>
      {error && <Error erro={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} />}
    </section>
  );
};

export default FeedModal;
