import React from 'react';
import Input from '../../Form/Input/Input';
import Button from '../../Form/Button/Button';
import useForm from '../../../Hook/useForm';
import useFetch from '../../../Hook/useFetch';
import Error from '../../Helper/Error';
import { PASSWORD_RESET } from '../../../api';
import { useNavigate } from 'react-router-dom';

const LoginPasswordReset = () => {
  const [login, setLogin] = React.useState('');
  const [key, setKey] = React.useState('');

  const password = useForm();
  const navigate = useNavigate();

  const { loading, error, request } = useFetch();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get('key');
    const login = params.get('login');
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate()) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });

      const { response } = await request(url, options);
      if (response.ok) return navigate('/login');
    }
  }
  return (
    <section>
      <Head title="Resete a senha" />
      <h1 className="titulo">Resente a senha</h1>
      <form onSubmit={handleSubmit}>
        <Input
          type="password"
          label="Nova senha"
          name="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
        {error && <Error />}
      </form>
    </section>
  );
};

export default LoginPasswordReset;
