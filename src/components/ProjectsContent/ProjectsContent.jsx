import React from 'react';

import PortfolioImage from './images/portfolio-presents.png';
import GitHubIcon from './images/icon-github.png';
import ArrowRight from './images/arrow-right-side.png';
import ArrowLeft from './images/arrow-left-side.png';

import './ProjectsContent.css';

export default function ProjectsContent() {
  return (
    <section id="project-page">
      <div className="arrow-left-side-div">
        <img src={ArrowLeft} alt="" className="arrow-left-side" />
      </div>
      <div className="container-project">
        <div className="icon-github">
          <a
            href="https://github.com/Oldroge/my-personal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHubIcon} alt="" className="github-icon" />
          </a>
        </div>
        <a
          href="https://main--peaceful-jelly-fae778.netlify.app/about"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={PortfolioImage}
            alt="Imagem escrito Portfolio com fundo preto e detalhes de roxo"
            className="portfolio-image"
          />
        </a>
      </div>
      <div className="arrow-right-side-div">
        <img
          src={ArrowRight}
          alt="flecha apontando para o lado direito"
          className="arrow-right-side"
        />
      </div>
    </section>
  );
}
