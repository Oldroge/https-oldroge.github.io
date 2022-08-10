import React from 'react';

import Header from '../../components/Header/Header';

import PortfolioImage from './images/portfolio-presents.png';
import GitHubIcon from './images/icon-github.png';
import ArrowRight from './images/arrow-right-side.png';
import ArrowLeft from './images/arrow-left-side.png';

import './Projects.css';

export default function Projects() {
  return (
    <>
      <Header />
      <section id="project-page">
        <div className="arrow-left-side-div">
          <img
            src={ArrowLeft}
            alt=""
            className="arrow-left-side"
          />
        </div>
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
        <div className="arrow-right-side-div">
          <img
            src={ArrowRight}
            alt="flecha apontando para o lado direito"
            className="arrow-right-side"
          />
        </div>
      </section>
    </>
  );
}
