import React from 'react';
import Style from './Footer.module.css';
import Dogs from '../../Assets/dogs-footer.svg?react';
const Footer = () => {
  return (
    <footer className={Style.footer}>
      <Dogs />
      <p>Dogs. Alguns direitos resevados</p>
    </footer>
  );
};

export default Footer;
