import React, { useState } from 'react';

import Icon from './images/icons8-cardápio-64.png';

export default function MenuBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="routes-container">
        <p className="nav-menu-option">Sobre mim</p>
        <p className="nav-menu-option">Projetos</p>
        <p className="nav-menu-option">Skills</p>
        <p className="nav-menu-option">Contato</p>
      </nav>
      <nav
        className="nav-btn-div"
        onClick={() => (show === false ? setShow(true) : setShow(false))}
        aria-hidden="true"
      >
        <img
          src={Icon}
          alt="botão para abrir aba de navegação"
          className="nav-img"
        />
        {
          show ? (
            <span className="block-nav-bar">
              <p>Sobre mim</p>
              <p>Projetos</p>
              <p>Skills</p>
              <p>Contato</p>
            </span>
          ) : null
        }
      </nav>

    </>
  );
}
