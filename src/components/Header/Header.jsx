import React from 'react';
import './header.css';

import Icon from './images/icons8-código-do-google-96.png';

function Header() {
  return (
    <header id="header">
      <div className="container">
        <img
          src={Icon}
          alt="icone de computador pintado em verde"
          className="icon-image"
        />
        <h1 className="header-title">ROGE</h1>
        <div className="routes-container">
          <p>Sobre mim</p>
          <p>Projetos</p>
          <p>Skills</p>
          <p>Contato</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
