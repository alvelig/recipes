import React from 'react';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import Routes from './Routes';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

const Router = window !== undefined ? BrowserRouter : StaticRouter;

function ReactApp(_, railsContext) {
  return () => (
    <Router location={railsContext?.location}>
      <NavBar />
      <main>
        <Routes />
      </main>
    </Router>
  );
}

export default ReactApp;
