import React from 'react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../../../src/UserContext';
import MinhasFotos from '../../../Assets/feed.svg?react';
import Postar from '../../../Assets/adicionar.svg?react';
import Estatisticas from '../../../Assets/estatisticas.svg?react';
import Sair from '../../../Assets/sair.svg?react';
import Style from './UserHeaderNav.module.css';
const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const [mobile, setMobile] = React.useState(null);

  return (
    <nav className={Style.nav}>
      <NavLink end to="/conta">
        <MinhasFotos /> {mobile && 'Minhas fotos'}
      </NavLink>
      <NavLink to="/conta/postar">
        <Postar />
        {mobile && 'Postar'}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <Estatisticas />
        {mobile && 'Estatisticas'}
      </NavLink>
      <button onClick={userLogout}>
        {mobile && 'Sair'}
        <Sair />
      </button>
    </nav>
  );
};

export default UserHeaderNav;
