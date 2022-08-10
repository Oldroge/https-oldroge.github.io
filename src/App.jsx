import React from 'react';
import { Route } from 'react-router-dom';

import AboutMePage from './pages/about-me/AboutMePage';

function App() {
  return (
    <>
      <Route exact path="/about" component={AboutMePage} />
      {/* <h1>Portfólio</h1> */}
    </>
  );
}

export default App;
