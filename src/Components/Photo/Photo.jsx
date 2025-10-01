import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_PHOTO } from '../../api';
import useFetch from '../../Hook/useFetch';
import Error from '../Helper/Error';
import Loading from '../Helper/Loading';
import PhotoContent from '../Photo/PhotoContent';

const Photo = () => {
  const { id } = useParams();
  const { request, loading, data, error } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PHOTO(id);
    request(url, options);
  }, [request, id]);

  if (error) return <Error erro={error} />;
  if (loading) return <Loading />;
  if (data)
    return (
      <section className="container mainContainer">
        <PhotoContent data={data} single={true} />
      </section>
    );
  else return null;
};

export default Photo;
