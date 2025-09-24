import React from 'react';
import Style from './Login.module.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import LoginCreate from './LoginCreate/LoginCreate';
import LoginPasswordLost from './LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset/LoginPasswordReset';
import { UserContext } from '../../userContext';

const Login = () => {
  const { login } = React.useContext(UserContext);

  if (login === true) return <Navigate to="/conta" />;
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="criar" element={<LoginCreate />} />
        <Route path="resetar-senha" element={<LoginPasswordReset />} />
        <Route path="esqueceu-senha" element={<LoginPasswordLost />} />
      </Routes>
    </div>
  );
};

export default Login;
