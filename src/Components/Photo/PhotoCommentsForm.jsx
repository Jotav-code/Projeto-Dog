import React from 'react';
import Enviar from '../../Assets/enviar.svg?react';
import useFetch from '../../Hook/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../../Components/Helper/Error';
import Style from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComent] = React.useState('');
  const { request, loading, error } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { comment });
    const { response, json } = await request(url, options);
    console.log(response);
    if (response.ok) {
      setComent('');
      setComments((comente) => [...comente, json]);
    }
  }
  return (
    <form className={Style.form} onSubmit={handleSubmit}>
      <textarea
        className={Style.textarea}
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComent(target.value)}
      />
      <button className={Style.button}>
        <Enviar />
      </button>
      <Error erro={error} />
    </form>
  );
};

export default PhotoCommentsForm;
