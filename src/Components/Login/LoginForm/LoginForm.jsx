import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Form/Input/Input';
import Button from '../../Form/Button/Button';
import useForm from '../../../Hook/useForm';
import { TOKEN_POST, GET_USER } from '../../../api';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();

  React.useEffect(() => {
    let token = window.localStorage.getItem('token');
    if (token) getUser(token);
  }, []);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    console.log(json, response);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      const { url, options } = TOKEN_POST({
        username: username.value,
        password: password.value,
      });
      const response = await fetch(url, options);
      const json = await response.json();
      window.localStorage.setItem('token', json.token);
      getUser(json.token);
      console.log(response);
      console.log(json);
    }
  }
  return (
    <section>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        <Button>Enviar</Button>
      </form>
      <Link to="/login/criar">Cadastro</Link>
    </section>
  );
};

export default LoginForm;
