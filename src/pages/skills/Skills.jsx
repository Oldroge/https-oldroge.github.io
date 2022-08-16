import React, { useState } from 'react';

import Header from '../../components/Header/Header';
import SkillsLanguages from '../../components/SkillsLanguages/SkillsLanguages';

import './Skills.css';

export default function Skills() {
  const [languageName, setLanguageName] = useState();
  const readLanguageName = (value) => {
    setLanguageName(value);
  };
  return (
    <section>
      <Header />
      <div className="container-skills">
        <SkillsLanguages readLanguageText={readLanguageName} />
        <div className="text-skills">
          <p>{ languageName }</p>
        </div>
      </div>
    </section>
  );
}
