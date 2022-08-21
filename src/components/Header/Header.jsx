import React from 'react';
import './header.css';

import Icon from './images/icons8-código-fonte-96.png';
import MenuBar from '../MenuBar/MenuBar';

function Header() {
  return (
    <header id="header">
      <div className="container">
        <img
          src={Icon}
          alt="sinal de menor que, barra, maior que pintado de roxo"
          className="icon-image"
        />
        <MenuBar />
      </div>
    </header>
  );
}

export default Header;
