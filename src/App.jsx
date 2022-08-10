import React from 'react';
import { Route } from 'react-router-dom';

import AboutMePage from './pages/about-me/AboutMePage';
import Projects from './pages/about-me/projects/Projects';

function App() {
  return (
    <>
      <Route exact path="/about" component={AboutMePage} />
      <Route exact path="/projects" component={Projects} />
    </>
  );
}

export default App;
