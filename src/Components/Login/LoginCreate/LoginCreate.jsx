import { func } from 'prop-types';
import React from 'react';
import Input from '../../Form/Input/Input';
import useForm from '../../../Hook/useForm';
import Button from '../../Form/Button/Button';
import { POST_USER } from '../../../api';
import { UserContext } from '../../../UserContext';
import Error from '../../Helper/Error';
import useFetch from '../../../Hook/useFetch';
import Head from '../../Helper/Head';

const LoginCreate = () => {
  const username = useForm();
  const email = useForm('email');
  const password = useForm();

  const { userLogin } = React.useContext(UserContext);
  const { request, loading, error } = useFetch();

  const { url, options } = POST_USER({
    username: username.value,
    email: email.value,
    password: password.value,
  });

  async function handleSubmit(event) {
    event.preventDefault();
    const { response } = await request(url, options);
    if (response.ok) userLogin(username.value, password.value);
  }
  return (
    <section className="animeLeft">
      <Head title='Criar conta' />
      <h1 className="titulo">Cadastre-se</h1>
      <form onSubmit={handleSubmit}>
        <Input type="text" label="Usuário" {...username} />
        <Input type="email" label="E-mail" {...email} />
        <Input type="password" label="Senha" {...password} />
        {loading ? (
          <Button disabled>Cadastrando...</Button>
        ) : (
          <Button>Cadastre-se</Button>
        )}
        <Error erro={error} />
      </form>
    </section>
  );
};

export default LoginCreate;
