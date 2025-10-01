import React from 'react';
import { useParams } from 'react-router-dom';
import { GET_PHOTO } from '../../api';
import useFetch from '../../Hook/useFetch';

const Photo = () => {
  const { id } = useParams();
  const { request, loading } = useFetch();

  React.useEffect(() => {
    const { url, options } = GET_PHOTO(id);
    const { response, json } = request(url, options);
    console.log(response);
  }, [id]);

  return <div></div>;
};

export default Photo;
