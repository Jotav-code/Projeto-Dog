import React from 'react';
import Style from './UserPhotoPost.module.css';
import Input from '../../Form/Input/Input';
import Button from '../../Form/Button/Button';
import useForm from '../../../Hook/useForm';
import usefeth from '../../../Hook/useFetch';
import { PHOTO_POST } from '../../../api';
import Error from '../../Helper/Error';
import { useNavigate } from 'react-router-dom';
import Head from '../../Helper/Head';
const UserPhotoPost = () => {
  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({});

  const { data, error, loading, request } = usefeth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (data) navigate('/conta');
  }, [data, navigate]);

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData();

    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token');
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }
  function handelImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }
  return (
    <section className={`${Style.photoPost} animeLeft`}>
      <Head title="Poste sua foto" />
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Nome" name="nome" {...nome} />
        <Input type="number" label="Peso" name="peso" {...peso} />
        <Input type="number" label="Idade" name="idade" {...idade} />
        <input
          className={Style.file}
          type="file"
          name="img"
          id="img"
          onChange={handelImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error erro={error} />
      </form>
      {img.preview && (
        <div
          className={Style.preview}
          style={{ background: `url('${img.preview}')` }}
        ></div>
      )}
    </section>
  );
};

export default UserPhotoPost;
