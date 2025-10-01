import React, { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { UserContext } from '../../../../src/UserContext';
import MinhasFotos from '../../../Assets/feed.svg?react';
import Postar from '../../../Assets/adicionar.svg?react';
import Estatisticas from '../../../Assets/estatisticas.svg?react';
import Sair from '../../../Assets/sair.svg?react';
import Style from './UserHeaderNav.module.css';
import userMedia from '../../../Hook/userMedia';
const UserHeaderNav = () => {
  const { userLogout } = React.useContext(UserContext);

  const mobile = userMedia('(max-width: 40rem)');
  const [mobileMenu, setMobileMenu] = useState(false);
  const { pathname } = useLocation();

  React.useEffect(() => {
    setMobileMenu(false);
  }, [pathname]);

  return (
    <>
      {mobile && (
        <button
          aria-label="menu-mobile"
          className={`${Style.buttonHamburguer} ${
            mobileMenu && Style.buttonHamburguerActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <nav
        className={`${mobile ? Style.navMobile : Style.nav} ${
          mobileMenu && Style.navMobileActive
        }`}
      >
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
    </>
  );
};

export default UserHeaderNav;
