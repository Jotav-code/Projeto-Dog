import React from 'react';
import { GET_USER, TOKEN_POST } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  async function getUser(token) {
    const { url, options } = GET_USER(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const response = await fetch(url, options);
    const { token } = await response.json();
    getUser(token);
    window.localStorage.setItem('token', token);
  }
  return (
    <UserContext.Provider value={{ userLogin, data, getUser, login }}>
      {children}
    </UserContext.Provider>
  );
};
