import React from 'react';
import Enviar from '../../Assets/enviar.svg?react';
import useFetch from '../../Hook/useFetch';
import { COMMENT_POST } from '../../api';
import Error from '../../Components/Helper/Error';
import Style from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const [coment, setComent] = React.useState('');
  const { request, error } = useFetch();

  function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_POST(id, { coment });
    const { response, json } = request(url, options);
    if (response.ok) {
      setComent('');
      setComments((comente) => [...comente, json]);
    }
  }
  return (
    <form className={Style.form} onSubmit={handleSubmit}>
      <textarea
        className={Style.textarea}
        id="comments"
        name="comments"
        placeholder="Comente..."
        value={coment}
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
