import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Icon from './images/icons8-cardápio-64.png';

export default function MenuBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="routes-container">
        <Link to="/about" className="nav-menu-option">
          <p>Sobre mim</p>
        </Link>

        <Link to="/projects" className="nav-menu-option">
          <p>Projetos</p>
        </Link>
        <Link to="/skills" className="nav-menu-option">
          <p>Skills</p>
        </Link>
        <Link to="/contact" className="nav-menu-option">
          <p>Contato</p>
        </Link>
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
              <Link to="/about" className="nav-menu-option">
                <p>Sobre mim</p>
              </Link>
              <Link to="/projects" className="nav-menu-option">
                <p>Projetos</p>
              </Link>
              <Link to="/skills" className="nav-menu-option">
                <p>Skills</p>
              </Link>
              <Link to="/contact" className="nav-menu-option">
                <p>Contato</p>
              </Link>
            </span>
          ) : null
        }
      </nav>

    </>
  );
}
