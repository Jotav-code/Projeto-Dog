import React from 'react';
import Style from './Header.module.css';
import { Link } from 'react-router-dom';
import DogsIcon from '/src/Assets/dogs.svg?react';
import { UserContext } from '../../UserContext';

const Header = () => {
  const { data } = React.useContext(UserContext);
  return (
    <header className={Style.header}>
      <nav className={`${Style.nav} container`}>
        <Link className={Style.logo} to="/" aria-label="Dogs - Header">
          <DogsIcon />
        </Link>
        {data ? (
          <Link className={Style.login} to="login">
            {data.nome}
          </Link>
        ) : (
          <Link className={Style.login} to="login">
            Login / Criar
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Header;
