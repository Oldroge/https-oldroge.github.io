import React from 'react';
import { Route } from 'react-router-dom';

import AboutMePage from './pages/about-me/AboutMePage';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <>
      <Route exact path="/about" component={AboutMePage} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/skills" component={Skills} />
    </>
  );
}

export default App;
