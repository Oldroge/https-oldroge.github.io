import React from 'react';
import './header.css';

import Icon from './images/icons8-código-do-google-96.png';
import MenuBar from '../MenuBar/MenuBar';

function Header() {
  return (
    <header id="header">
      <div className="container">
        <img
          src={Icon}
          alt="icone de computador pintado em verde"
          className="icon-image"
        />
        <div className="title-container">
          <h1 className="header-title">ROGE</h1>
        </div>
        <MenuBar />
      </div>
    </header>
  );
}

export default Header;
