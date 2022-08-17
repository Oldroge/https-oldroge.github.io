import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AboutMePage from './pages/about-me/AboutMePage';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';

function App() {
  return (
    <Routes>
      <Route exact path="/about" element={<AboutMePage />} />
      <Route exact path="/projects" element={<Projects />} />
      <Route exact path="/skills" element={<Skills />} />
    </Routes>
  );
}

export default App;
