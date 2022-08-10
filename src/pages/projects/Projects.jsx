import React from 'react';

import Header from '../../components/Header/Header';

import PortfolioImage from './images/portfolio-presents.png';
import GitHubIcon from './images/icon-github.png';

import './Projects.css';

export default function Projects() {
  return (
    <>
      <Header />
      <section id="project-page">
        <div className="container-project">
          <img
            src={PortfolioImage}
            alt="Imagem escrito Portfolio com fundo preto e detalhes de roxo"
            className="portfolio-image"
          />
          <div className="icon-github">
            <a
              href="https://github.com/Oldroge/my-personal-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHubIcon}
                alt=""
                className="github-icon"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
