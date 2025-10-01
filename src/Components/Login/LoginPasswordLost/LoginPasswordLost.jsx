import React from 'react';
import Input from '../../Form/Input/Input';
import Button from '../../Form/Button/Button';
import useForm from '../../../Hook/useForm';
import useFetch from '../../../Hook/useFetch';
import { PASSWORD_LOST } from '../../../api';
import Error from '../../Helper/Error';
import Head from '../../Helper/Head';

const LoginPasswordLost = () => {
  const login = useForm();

  const { data, request, error, loading } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate()) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace('perdeu', 'resetar'),
      });
      const { respose, json } = await request(url, options);
    }
  }

  return (
    <section>
      <Head title="Perdeu a senha" />
      <h1 className="titulo">Perdeu a senha?</h1>
      {data ? (
        <p style={{ color: '#4c1' }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="email" {...login} />
          {loading ? (
            <Button disabled>Enviando</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
          {error && <Error erro={error} />}
        </form>
      )}
    </section>
  );
};

export default LoginPasswordLost;
