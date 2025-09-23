import React from 'react';
import Style from './Header.module.css';
import { Link } from 'react-router-dom';
import DogsIcon from '/src/Assets/dogs.svg?react';

const Header = () => {
  return (
    <header className={Style.header}>
      <nav className={`${Style.nav} container`}>
        <Link className={Style.logo} to="/" aria-label="Dogs - Header">
          <DogsIcon />
        </Link>
        <Link className={Style.login} to="login">
          Login / Criar
        </Link>
      </nav>
    </header>
  );
};

export default Header;
