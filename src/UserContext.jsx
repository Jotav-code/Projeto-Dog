import React from 'react';
import { GET_USER, TOKEN_POST, TOKEN_VALIDATE } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  const userLogout = React.useCallback(async function () {
    setData(null);
    setLogin(false);
    setLoading(false);
    setError(null);
    window.localStorage.removeItem('token');
    navigate('/login');
  }, []);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const response = await fetch(url, options);
      console.log(response);
      if (!response.ok) throw new Error(`Error: ${response.statusText}`);
      const { token } = await response.json();
      window.localStorage.setItem('token', token);
      await getUser(token);
      navigate('/conta');
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    async function autoLogin() {
      const token = window.localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('token inválido');
          await getUser(token);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);
  return (
    <UserContext.Provider
      value={{ userLogin, data, getUser, login, error, loading, userLogout }}
    >
      {children}
    </UserContext.Provider>
  );
};
