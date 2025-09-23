import React from 'react';
import Style from './Login.module.css';
import { Routes, Route } from 'react-router-dom';
import LoginForm from './LoginForm/LoginForm';
import LoginCreate from './LoginCreate/LoginCreate';
import LoginPasswordLost from './LoginPasswordLost/LoginPasswordLost';
import LoginPasswordReset from './LoginPasswordReset/LoginPasswordReset';
const Login = () => {
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
