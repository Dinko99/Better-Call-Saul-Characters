import React from 'react';
import img from './img/bcslogo.jpg';

const Header = () => {
  return (
    <header>
      <img src={img} alt='Better Call Saul' />
    </header>
  );
};

export default Header;
