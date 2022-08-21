import React from 'react';

import Header from '../../components/Header/Header';

import './Contact.css';

import GitHubIcon from './images/github.png';
import LinkedinIcon from './images/linkedin.png';
import TelegramIcon from './images/telegram.png';
import GmailIcon from './images/gmail.png';

export default function Contact() {
  return (
    <>
      <Header />
      <article className="contact-container">
        <h3>Para saber mais sobre mim:</h3>
        <section className="social-medias-container">
          <div>
            <a href="https://www.linkedin.com/in/roge/" target="_blank" rel="noreferrer">
              <img
                src={LinkedinIcon}
                alt="letras i e n em azul"
                className="images-icon"
              />
            </a>
          </div>
          <div>
            <a href="https://github.com/Oldroge" target="_blank" rel="noreferrer">
              <img
                src={GitHubIcon}
                alt="silhueta de um gato com fundo preto"
                className="images-icon"
              />
            </a>
          </div>
          <div>
            <a href="https://t.me/oldroge" target="_blank" rel="noopener noreferrer">
              <img
                src={TelegramIcon}
                alt="fundo azul circular com um avião de papel ao centro"
                className="images-icon"
              />
            </a>
          </div>
          <div>
            <a href="mailto:rogedeveloper@gmail.com" target="_blank" rel="noopener noreferrer">
              <img
                src={GmailIcon}
                alt="fundo azul circular com um avião de papel ao centro"
                className="images-icon"
              />
            </a>
          </div>
        </section>
      </article>
    </>
  );
}
