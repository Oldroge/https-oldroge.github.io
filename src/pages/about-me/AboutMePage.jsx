import React from 'react';

import Header from '../../components/Header/Header';

import './AboutMe.css';
import rogeImage from './images/roge-image.jpeg';

export default function AboutMePage() {
  return (
    <>
      <Header />
      <section id="about-me-page">
        <img
          src={rogeImage}
          alt="Roge sorrindo olhando pra câmera e fundo branco"
          className="roge-photo"
        />
        <div className="roge-name-div">
          <h2 className="about-me-roge-name">Roge Martins</h2>
        </div>
      </section>
    </>
  );
}
