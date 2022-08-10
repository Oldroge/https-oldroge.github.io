import React from 'react';

import Header from '../../components/Header/Header';

import PortfolioImage from './images/portfolio-presents.png';

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
        </div>
      </section>
    </>
  );
}
