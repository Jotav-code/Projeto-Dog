import React from 'react';
import UserHeaderNav from './UserHeaderNav';
import Style from './UserHeader.module.css';
import { useLocation } from 'react-router-dom';

const UserHeader = () => {
  const [title, setTitle] = React.useState('');
  const location = useLocation();
  console.log(location);

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case '/conta/postar':
        setTitle('Poste sua foto');
        break;
      case '/conta/estatistica':
        setTitle('Estatisticas');
        break;
      default:
        setTitle('Minha conta');
    }
  }, [location]);
  return (
    <header className={Style.header}>
      <h1 className="titulo">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
