import React from 'react';
import { Link } from 'react-router-dom';
import Input from '../../Form/Input/Input';
import Button from '../../Form/Button/Button';
import useForm from '../../../Hook/useForm';
import { TOKEN_POST, GET_USER } from '../../../api';
import { UserContext } from '../../../UserContext';
import Error from '../../Helper/Error';
import Styles from './LoginForm.module.css';
import StylesBtn from '../../Form/Button/Button.module.css';
import Head from '../../Helper/Head';

const LoginForm = () => {
  const username = useForm();
  const password = useForm();
  const { userLogin, data, getUser, error, loading } =
    React.useContext(UserContext);

  async function handleSubmit(event) {
    event.preventDefault();
    if (username.validate() && password.validate()) {
      userLogin(username.value, password.value);
    }
  }
  return (
    <section className="animeLeft">
      <Head title="Login" />
      <h1 className="titulo">Login</h1>
      <form className={Styles.form} onSubmit={handleSubmit}>
        <Input label="Usuário" type="text" name="username" {...username} />
        <Input label="Senha" type="password" name="password" {...password} />
        {loading ? (
          <Button disabled>Carregando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        <Error erro={error && 'Dados incorretos.'} />
      </form>
      <Link className={Styles.perdeu} to="/login/perdeu">
        Perdeu a senha?
      </Link>
      <div className={Styles.cadastro}>
        <h2 className={Styles.subtitle}>Cadastre-se</h2>
        <p>Ainda não possui conta? Cadastre-se no site.</p>
        <Link className={StylesBtn.button} to="/login/criar">
          Cadastro
        </Link>
      </div>
    </section>
  );
};

export default LoginForm;
