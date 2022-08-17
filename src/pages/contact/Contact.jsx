import React from 'react';

import Header from '../../components/Header/Header';

import './Contact.css';

import GitHubIcon from './images/github.png';
import LinkedinIcon from './images/linkedin.png';
import TelegramIcon from './images/telegram.png';

export default function Contact() {
  return (
    <>
      <Header />
      <article className="contact-container">
        <h3>Para saber mais sobre mim:</h3>
        <section className="social-medias-container">
          <div>
            <img
              src={LinkedinIcon}
              alt="letras i e n em azul"
              className="images-icon"
            />
          </div>
          <div>
            <img
              src={GitHubIcon}
              alt="silhueta de um gato com fundo preto"
              className="images-icon"
            />
          </div>
          <div>
            <img
              src={TelegramIcon}
              alt="fundo azul circular com um avião de papel ao centro"
              className="images-icon"
            />
          </div>
        </section>
      </article>
    </>
  );
}
