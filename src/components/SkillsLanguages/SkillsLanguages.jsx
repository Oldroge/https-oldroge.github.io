import React from 'react';

import './SkillsLanguages.css';

import JavaScriptIcon from './images/js.png';
import HtmlIcon from './images/html-5.png';
import CssIcon from './images/css.png';
import ReduxIcon from './images/redux.png';
import JestIcon from './images/jest.png';
import AngularIcon from './images/angular.png';
import ReactIcon from './images/react.png';
import MySqlIcon from './images/mysql.png';
import MongoIcon from './images/mongo.png';
import NodeIcon from './images/nodejs.png';

export default function SkillsLanguages() {
  return (
    <div className="container-skills-languages">
      <div className="div-language">
        <div className="languages">
          <img
            src={HtmlIcon}
            alt=""
            className="icon"
          />
        </div>
        <div className="languages">
          <img
            src={CssIcon}
            alt=""
            className="icon"
          />
        </div>
      </div>
      <div className="div-language">
        <div className="languages">
          <img
            src={JavaScriptIcon}
            alt=""
            className="icon"
          />
        </div>
        <div className="languages">
          <img
            src={ReactIcon}
            alt=""
            className="icon"
          />
        </div>
      </div>
      <div className="div-language">
        <div className="languages">
          <img
            src={ReduxIcon}
            alt=""
            className="icon"
          />
        </div>
        <div className="languages">
          <img
            src={JestIcon}
            alt=""
            className="icon"
          />
        </div>
      </div>
      <div className="div-language">
        <div className="languages">
          <img
            src={NodeIcon}
            alt=""
            className="icon"
          />
        </div>
        <div className="languages">
          <img
            src={MySqlIcon}
            alt=""
            className="icon"
          />
        </div>
      </div>
      <div className="div-language">
        <div className="languages">
          <img
            src={MongoIcon}
            alt=""
            className="icon"
          />
        </div>
        <div className="languages">
          <img
            src={AngularIcon}
            alt=""
            className="icon"
          />
        </div>
      </div>
    </div>
  );
}
